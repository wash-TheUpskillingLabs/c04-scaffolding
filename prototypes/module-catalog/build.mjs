#!/usr/bin/env node
// Builds the module catalog from Markdown. No dependencies.
//
//   node build.mjs          validate, then write catalog.js, m/<slug>/index.html and thumbs/<slug>.svg
//   node build.mjs --check  validate only
//
// Modules live in modules/<slug>.md, situation logs in situations/<date>-<slug>.md.
// Files starting with "_" are templates and are skipped.

import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const CHECK_ONLY = process.argv.includes("--check");
const SITE_PATH = "/prototypes/module-catalog/"; // where Vercel serves this folder
const REPO = "https://github.com/wash-TheUpskillingLabs/c04-scaffolding";

// Starting values from taxonomy.md. Outside them is a warning, not an error: the taxonomy grows from use.
const STARTING = {
  kind: ["upskilling", "training"],
  status: ["draft", "stable"],
  output_type: ["training", "workshop"],
  stage: ["prep", "during", "after"],
  scale: ["1:1", "1:few", "1:cohort/public"],
  timing: ["before-attempt", "when-stuck", "after"],
  learner_stage: ["dependent", "interested", "involved", "self-directed"],
  scope: ["general", "cohort-specific"],
};
const LIST_FIELDS = ["stage", "scale", "maintained_by", "timing", "learner_stage", "prerequisites", "tags", "formed_from"];
const MUST = ["title", "summary", "kind", "status", "output_type", "output", "stage", "scale", "delivered_by", "maintained_by", "learning_outcome"];
const FORBIDDEN = ["required", "mandatory", "grade", "score", "credential"];

const errors = [];
const warnings = [];

// ---------- parsing ----------

function parseFrontMatter(text, file) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) { errors.push(`${file}: no front matter (--- block at the top)`); return { data: {}, body: text }; }
  const data = {};
  let lastKey = null;
  for (const raw of m[1].split(/\r?\n/)) {
    if (!raw.trim() || raw.trim().startsWith("#")) continue;
    const item = raw.match(/^\s+-\s+(.*)$/);
    if (item && lastKey) {
      if (!Array.isArray(data[lastKey])) data[lastKey] = [];
      data[lastKey].push(unquote(item[1]));
      continue;
    }
    const kv = raw.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) { warnings.push(`${file}: couldn't read front matter line "${raw}"`); continue; }
    const [, key, value] = kv;
    lastKey = key;
    const v = value.trim();
    if (v.startsWith("[") && v.endsWith("]")) {
      data[key] = v.slice(1, -1).split(",").map((s) => unquote(s.trim())).filter(Boolean);
    } else {
      data[key] = unquote(v);
    }
  }
  return { data, body: m[2] };
}

function unquote(s) {
  s = s.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) return s.slice(1, -1);
  return s;
}

function asList(v) {
  if (v === undefined || v === null || v === "") return [];
  return Array.isArray(v) ? v : [v];
}

// Minimal Markdown: headings, paragraphs, lists, blockquotes, fenced code, bold, italic, code, links.
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function inline(s) {
  let out = esc(s);
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${u}">${t}</a>`);
  return out;
}
function markdown(md) {
  const lines = md.replace(/\r/g, "").split("\n");
  const html = [];
  let para = [];
  let list = null; // "ul" | "ol"
  let code = null;
  const flushPara = () => { if (para.length) { html.push(`<p>${inline(para.join(" "))}</p>`); para = []; } };
  const closeList = () => { if (list) { html.push(`</${list}>`); list = null; } };
  for (const line of lines) {
    if (code !== null) {
      if (line.startsWith("```")) { html.push(`<pre><code>${esc(code.join("\n"))}</code></pre>`); code = null; }
      else code.push(line);
      continue;
    }
    if (line.startsWith("```")) { flushPara(); closeList(); code = []; continue; }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) { flushPara(); closeList(); const n = Math.min(h[1].length + 1, 4); html.push(`<h${n}>${inline(h[2])}</h${n}>`); continue; }
    const ul = line.match(/^\s*[-*]\s+(.*)$/);
    const ol = line.match(/^\s*\d+\.\s+(.*)$/);
    if (ul || ol) {
      flushPara();
      const want = ul ? "ul" : "ol";
      if (list !== want) { closeList(); html.push(`<${want}>`); list = want; }
      html.push(`<li>${inline((ul || ol)[1])}</li>`);
      continue;
    }
    const bq = line.match(/^>\s?(.*)$/);
    if (bq) { flushPara(); closeList(); html.push(`<blockquote><p>${inline(bq[1])}</p></blockquote>`); continue; }
    if (!line.trim()) { flushPara(); closeList(); continue; }
    closeList();
    para.push(line.trim());
  }
  flushPara(); closeList();
  return html.join("\n");
}

function section(body, heading) {
  const re = new RegExp(`^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s|$(?![\\s\\S]))`, "m");
  const m = body.match(re);
  return m ? m[1].trim() : "";
}

function readDir(dir) {
  const full = join(ROOT, dir);
  if (!existsSync(full)) return [];
  return readdirSync(full).filter((f) => f.endsWith(".md") && !f.startsWith("_")).sort();
}

// ---------- load ----------

const situations = readDir("situations").map((f) => {
  const file = `situations/${f}`;
  const { data, body } = parseFrontMatter(readFileSync(join(ROOT, file), "utf8"), file);
  const id = basename(f, ".md");
  const s = {
    id,
    date: data.date || id.slice(0, 10),
    logged_by: data.logged_by || "",
    scale: data.scale || "",
    tags: asList(data.tags),
    module: data.module || "",
    problem: section(body, "The problem"),
    worked: section(body, "What worked"),
    file,
  };
  if (!s.logged_by) errors.push(`${file}: logged_by is missing. Use a role, never a name.`);
  if (!s.problem) errors.push(`${file}: needs a "## The problem" section`);
  if (!s.worked) errors.push(`${file}: needs a "## What worked" section`);
  if (s.scale && !STARTING.scale.includes(s.scale)) warnings.push(`${file}: scale "${s.scale}" is outside the starting values`);
  const words = (s.problem + " " + s.worked).split(/\s+/).length;
  if (words > 150) warnings.push(`${file}: ${words} words. A situation log is meant to be a few lines.`);
  return s;
});
const situationById = Object.fromEntries(situations.map((s) => [s.id, s]));

const modules = readDir("modules").map((f) => {
  const file = `modules/${f}`;
  const { data, body } = parseFrontMatter(readFileSync(join(ROOT, file), "utf8"), file);
  const slug = basename(f, ".md");
  const m = { slug, file, body };
  for (const [k, v] of Object.entries(data)) m[k] = LIST_FIELDS.includes(k) ? asList(v) : v;
  for (const k of LIST_FIELDS) if (!m[k]) m[k] = [];

  for (const k of MUST) {
    const v = m[k];
    if (v === undefined || v === "" || (Array.isArray(v) && v.length === 0)) errors.push(`${file}: "${k}" is a Must field and is empty`);
  }
  if (m.maintained_by.length < 2) errors.push(`${file}: name at least two maintainers (by role), so one volunteer leaving doesn't orphan it`);
  for (const k of FORBIDDEN) if (k in data) errors.push(`${file}: "${k}" isn't a module field. Modules are optional by default, and the catalog doesn't grade.`);
  for (const [k, allowed] of Object.entries(STARTING)) {
    for (const v of asList(m[k])) if (v && !allowed.includes(v)) warnings.push(`${file}: ${k} "${v}" is outside the starting values in taxonomy.md`);
  }
  if (m.status === "stable" && !m.reviewed_by) errors.push(`${file}: status is stable but nobody has reviewed the learning material (reviewed_by)`);
  if (m.reviewed_by && !m.reviewed_on) warnings.push(`${file}: reviewed_by is set but reviewed_on (the date) is empty`);
  if (m.timing.includes("before-attempt") && (!m.private_way_in || !m.way_out)) {
    errors.push(`${file}: sets up an attempt before the explanation, so it needs private_way_in and way_out (planned struggle can read as public failure, #5)`);
  }
  for (const id of m.formed_from) if (!situationById[id]) errors.push(`${file}: formed_from "${id}" isn't a file in situations/`);
  for (const h of ["Overview", "Exercises", "For facilitators"]) if (!section(body, h)) warnings.push(`${file}: no "## ${h}" section`);
  return m;
});
const moduleBySlug = Object.fromEntries(modules.map((m) => [m.slug, m]));
const moduleByTitle = Object.fromEntries(modules.map((m) => [String(m.title).toLowerCase(), m]));

for (const s of situations) {
  if (s.module && !moduleBySlug[s.module]) errors.push(`${s.file}: module "${s.module}" isn't a file in modules/`);
}
for (const m of modules) {
  // A situation that names a module counts toward it even if the module forgot to list it.
  for (const s of situations) if (s.module === m.slug && !m.formed_from.includes(s.id)) m.formed_from.push(s.id);
}

// ---------- tags ----------

const taxonomyText = existsSync(join(ROOT, "taxonomy.md")) ? readFileSync(join(ROOT, "taxonomy.md"), "utf8") : "";
const knownTags = new Set([...taxonomyText.matchAll(/^- `([^`]+)`/gm)].map((x) => x[1]));
const tagCounts = {};
const bump = (t, key) => { tagCounts[t] ??= { modules: 0, situations: 0, unmoduled: 0 }; tagCounts[t][key]++; };
for (const m of modules) for (const t of m.tags) bump(t, "modules");
for (const s of situations) { for (const t of s.tags) { bump(t, "situations"); if (!s.module) bump(t, "unmoduled"); } }
const tags = Object.entries(tagCounts)
  .map(([tag, c]) => ({ tag, ...c, known: knownTags.has(tag) }))
  .sort((a, b) => b.modules + b.situations - (a.modules + a.situations) || a.tag.localeCompare(b.tag));
const newTags = tags.filter((t) => !t.known).map((t) => t.tag);

// ---------- report ----------

console.log(`${modules.length} modules, ${situations.length} situations, ${tags.length} tags`);
if (newTags.length) console.log(`New tags, not yet in taxonomy.md: ${newTags.join(", ")}`);
const seeds = tags.filter((t) => t.unmoduled >= 2);
if (seeds.length) console.log(`Recurring with no module yet: ${seeds.map((t) => `${t.tag} (${t.unmoduled})`).join(", ")}`);
for (const m of modules) if (!m.reviewed_by) console.log(`Not yet reviewed: ${m.slug}`);
for (const w of warnings) console.log(`warning: ${w}`);
for (const e of errors) console.error(`error: ${e}`);
if (errors.length) { console.error(`\n${errors.length} error(s). Nothing written.`); process.exit(1); }
if (CHECK_ONLY) process.exit(0);

// ---------- write ----------

const LABELS = {
  kind: { upskilling: "Upskilling module, for learners", training: "Training module, for the people who deliver it" },
  output_type: { training: "Training, no required output", workshop: "Workshop, has an output" },
  stage: { prep: "Prep before a Cycle", during: "During a Cycle", after: "Maintained project after" },
  timing: { "before-attempt": "Before an attempt", "when-stuck": "When stuck", after: "After an attempt" },
  scope: { general: "General", "cohort-specific": "Cohort-specific" },
};
const label = (field, v) => (LABELS[field] && LABELS[field][v]) || v;
const labels = (field, vs) => asList(vs).map((v) => label(field, v)).join(", ");

function thumbSvg(m) {
  const words = String(m.title).split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > 24 && cur) { lines.push(cur); cur = w; } else cur = (cur + " " + w).trim();
  }
  if (cur) lines.push(cur);
  const shown = lines.slice(0, 4);
  const startY = 330 - (shown.length - 1) * 44;
  const kindText = m.kind === "training" ? "Training module" : "Upskilling module";
  const accent = m.kind === "training" ? "#cfab67" : "#0094a0";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" role="img" aria-label="${esc(m.title)}">
  <rect width="1200" height="630" fill="${m.kind === "training" ? "#03232a" : "#00141b"}"/>
  <circle cx="1040" cy="160" r="110" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <circle cx="1040" cy="160" r="56" fill="none" stroke="rgba(255,255,255,.32)" stroke-width="2"/>
  <circle cx="1040" cy="160" r="9" fill="${accent}"/>
  <text x="80" y="120" font-family="Geologica, system-ui, sans-serif" font-size="34" fill="rgba(255,255,255,.64)">${esc(kindText)}</text>
  ${shown.map((l, i) => `<text x="80" y="${startY + i * 88}" font-family="Geologica, system-ui, sans-serif" font-size="76" font-weight="640" fill="rgba(255,255,255,.95)">${esc(l)}</text>`).join("\n  ")}
  <text x="80" y="560" font-family="Geologica, system-ui, sans-serif" font-size="30" fill="rgba(255,255,255,.64)">The Upskilling Labs module catalog</text>
</svg>
`;
}

function prereqHtml(p) {
  const target = moduleByTitle[String(p).toLowerCase()] || moduleBySlug[p];
  return target ? `<a href="../${target.slug}/">${esc(p)}</a>` : esc(p);
}

function modulePage(m) {
  const thumb = m.thumbnail || `${SITE_PATH}thumbs/${m.slug}.svg`;
  const reviewed = m.reviewed_by
    ? `<p class="review ok">Learning material reviewed by ${esc(m.reviewed_by)}${m.reviewed_on ? `, ${esc(m.reviewed_on)}` : ""}.</p>`
    : `<p class="review">Not yet reviewed. Nobody has checked this learning material yet, so treat it as a draft.</p>`;
  const row = (k, v) => (v ? `<dt>${k}</dt><dd>${v}</dd>` : "");
  const formed = m.formed_from.map((id) => situationById[id]).filter(Boolean);
  const situationsHtml = formed.length
    ? `<h2>Formed from</h2><p class="quiet">The situation logs this module grew from: what the problem was and what worked.</p><ul class="situations">${formed
        .map((s) => `<li><span class="meta">${esc(s.date)}, logged by ${esc(s.logged_by)}${s.scale ? `, ${esc(s.scale)}` : ""}</span><p><strong>The problem.</strong> ${inline(s.problem.replace(/\n+/g, " "))}</p><p><strong>What worked.</strong> ${inline(s.worked.replace(/\n+/g, " "))}</p></li>`)
        .join("")}</ul>`
    : `<h2>Formed from</h2><p class="quiet">No logged situations yet. This module was written from a past workshop.</p>`;
  const tryIt = m.private_way_in || m.way_out
    ? `<h2>Trying it first</h2><dl class="fields">${row("A private way in", esc(m.private_way_in))}${row("A way out", esc(m.way_out))}</dl>`
    : "";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(m.title)}</title>
<meta name="description" content="${esc(m.summary)}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(m.title)}">
<meta property="og:description" content="${esc(m.summary)}">
<meta property="og:image" content="${esc(thumb)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geologica:wght,SHRP@300..800,0..100&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../style.css">
</head>
<body>
<header class="cover small">
  <div class="wrap">
    <p class="lockup"><a href="../../">Module catalog</a>, a Scaffolding prototype with made-up data</p>
    <h1>${esc(m.title)}</h1>
    <p class="q">${esc(m.summary)}</p>
  </div>
</header>
<main class="wrap module">
  <img class="thumb-lg" src="../../thumbs/${m.slug}.svg" alt="">
  ${reviewed}
  <p class="status">Status: ${esc(m.status)}. Optional, like every module in the catalog.${m.validated ? ` ${esc(m.validated)}` : ""}</p>
  <h2>About this module</h2>
  <dl class="fields">
    ${row("Learning outcome", esc(m.learning_outcome))}
    ${row("Kind", esc(label("kind", m.kind)))}
    ${row("Output", esc(label("output_type", m.output_type)) + (m.output ? `. ${esc(m.output)}` : ""))}
    ${row("Stage", esc(labels("stage", m.stage)))}
    ${row("Scale", esc(m.scale.join(", ")))}
    ${row("Delivered by", esc(m.delivered_by))}
    ${row("Maintained by", esc(m.maintained_by.join(", ")))}
    ${row("Reviewed by", m.reviewed_by ? esc(m.reviewed_by + (m.reviewed_on ? `, ${m.reviewed_on}` : "")) : "Not yet")}
    ${row("Timing", esc(labels("timing", m.timing)))}
    ${row("Learner stage", esc(m.learner_stage.join(", ")))}
    ${row("How support fades", esc(m.support_fades))}
    ${row("Maps to", esc(m.maps_to))}
    ${row("Time", esc(m.time))}
    ${row("Prerequisites", m.prerequisites.length ? m.prerequisites.map(prereqHtml).join(", ") : "None")}
    ${row("Scope", esc(label("scope", m.scope)))}
    ${row("Tags", esc(m.tags.join(", ")))}
  </dl>
  ${tryIt}
  <div class="body">
${markdown(m.body)}
  </div>
  ${situationsHtml}
  <p class="quiet edit"><a href="${REPO}/blob/main/prototypes/module-catalog/${m.file}">Edit this module on GitHub</a></p>
</main>
<footer><div class="wrap"><p>A prototype of the Scaffolding pod, Build Cycle C04, The Upskilling Labs of Greater Washington. Made-up data only. Licensed CC BY 4.0.</p></div></footer>
</body>
</html>
`;
}

rmSync(join(ROOT, "m"), { recursive: true, force: true });
rmSync(join(ROOT, "thumbs"), { recursive: true, force: true });
mkdirSync(join(ROOT, "thumbs"), { recursive: true });
for (const m of modules) {
  mkdirSync(join(ROOT, "m", m.slug), { recursive: true });
  writeFileSync(join(ROOT, "m", m.slug, "index.html"), modulePage(m));
  writeFileSync(join(ROOT, "thumbs", `${m.slug}.svg`), thumbSvg(m));
}

const catalog = {
  built: new Date().toISOString().slice(0, 10),
  modules: modules.map(({ body, file, ...m }) => ({ ...m, file, overview: section(body, "Overview").split(/\n\n/)[0] || "" })),
  situations,
  tags,
  starting: STARTING,
  labels: LABELS,
};
writeFileSync(join(ROOT, "catalog.js"), `// Generated by build.mjs. Don't edit by hand: edit modules/ and situations/, then run node build.mjs.\nwindow.CATALOG = ${JSON.stringify(catalog, null, 2)};\n`);
console.log(`Wrote catalog.js, ${modules.length} module pages and thumbnails.`);
