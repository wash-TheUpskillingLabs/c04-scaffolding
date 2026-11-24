# Module catalog (prototype)

A rough probe of the PRD "A Bottom-Up Module Catalog for The Upskilling Labs" (draft of Nov 14, 2026). Help given in one situation gets logged in a few lines. Modules form around the situations that keep coming back. Each module is one Markdown file with a standard structure, named maintainers and a review of the learning material. The catalog lists each module as a card.

**Made-up data only.** Every module and situation log here is invented for the prototype, and none has been reviewed. They're shaped like the situations in the PRD (the GitHub connector, "ask the AI," a mentor solving it for someone), not taken from real ones.

Open it at `/prototypes/module-catalog/` on the pod site, or open `index.html` straight from disk.

## What it tests

1. **Can someone pick the right module from its card?** Give a tester a situation and the catalog, and see which card they open.
2. **Can a logged situation become a module?** The Situations view shows tags that recur with no module yet. `team-formation` is one in the sample data.
3. **Does the learning material get reviewed?** Every card shows "Not yet reviewed" until someone fills in `reviewed_by`, and a module can't be marked `stable` without it.

## How the pieces fit

| Piece | Where | What it is |
| --- | --- | --- |
| Situation log | `situations/<date>-<slug>.md` | What the problem was and what worked. Role, never a name. Template: `situations/_template.md`. The "Log a situation" view writes one for you and can open it as a GitHub issue. |
| Module | `modules/<slug>.md` | The module: its metadata in the front matter (shown on its page under "About this module"), then an overview (the general-knowledge entry), exercises, notes for facilitators and resources. `formed_from` lists the situations it grew from. Template: `modules/_template.md`. |
| Card | The catalog list, and the OpenGraph image on each module page | A view of a module, the way an event has a card: title, summary, thumbnail and a few metadata fields. The card is how you find a module. It isn't part of how a module is built. |
| Taxonomy | `taxonomy.md` | A small starting set of tags and metadata values. Any tag can be used. The build lists the new ones and counts them so they can grow from use. |

## Schema draft

[`schema.md`](schema.md) drafts how modules, offerings, resources, situation logs and tags could be stored in OLOS, using Front Door's National, Regional and Both scoping. It's for Scaffolding and Front Door to work through together.

## Build

No dependencies. From this folder:

```bash
node build.mjs
```

It validates every module and situation, then writes `catalog.js`, a page for each module in `m/<slug>/`, and a thumbnail for each in `thumbs/`. Commit what it writes: the site has no build step. `node build.mjs --check` validates only.

The build fails, and writes nothing, when a module:

- leaves a Must metadata field empty (kind, output, stage, scale, delivered by, maintained by, learning outcome, title, summary, status)
- names fewer than two maintainers
- uses a metadata field that would make it required or graded (`required`, `mandatory`, `grade`, `score`, `credential`)
- is marked `stable` with nobody in `reviewed_by`
- sets up an attempt before the explanation (`timing: before-attempt`) without a `private_way_in` and a `way_out` (#5)
- points `formed_from` at a situation that doesn't exist

Values outside the starting set are only warnings, because the taxonomy is meant to grow.

## Choices to check

- **The card is a view, not part of a module.** The metadata belongs to the module. The card shows six metadata fields (kind, output, stage, scale, who runs it, review status), plus the title, summary and thumbnail. Which six is a guess for testers to correct.
- **"Recurring" means two or more situations sharing a tag with no module.** That is a display rule, not a decision. When repeated help becomes a module, and who decides, is still open.
- **Situation logs as GitHub issues.** The log form opens a prefilled `Situation:` issue. Where logs really live is Front Door's lane.
- **Thumbnails are SVG.** Most link previews need PNG or JPG for `og:image`, so a real release would render PNGs.
- **Never required?** The build blocks `required`. A builder questions this: The Labs may need the flexibility to make some things required. A Cycle already requires turning in a project ([Record #37](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/37)); the pilot required weekly in-person time; attendance was expected in later Cycles. Modules complement Build Cycles, so the question is which level a requirement belongs to. Open: required for whom, and who decides.
- **`validated`** marks the small top-down core (GitHub training) with a sentence, not a flag, so nothing in the format reads as "required."

## Who saw it, and what we learned

Not shown to anyone yet. The PRD's first test is to write three or four real past workshops as modules and show their cards to a participant, a workshop leader and an employer.

| Date | Who (role) | What they did | What we learned |
| --- | --- | --- | --- |
| | | | |
