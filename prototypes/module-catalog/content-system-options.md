# Content system options (notes, Nov 25)

Options for where volunteers edit catalog content without needing GitHub, while GitHub stays in use. Not a decision, and Front Door's lane. Collected by the pod lead on Nov 25; **vendor claims (prices, programs, features) are unverified** and need checking before anyone relies on them.

## What any option has to do

From the PRD and the schema draft:

1. **Non-technical editing.** A volunteer can fix a module, add a resource or propose a new one without Git, GitHub or Markdown skills (PRD, Must).
2. **Reusable content components.** Write once, use in many modules, sessions and Cycle steps; a change shows everywhere (PRD, Must). The schema draft's `content_uses` and `related_content`.
3. **A flexible content model.** New kinds of content, fields and relations can be added without rebuilding (PRD, Must).
4. **Federated permissions, not separate silos.** A record has one home (national or a lab) and can be listed in others. National content shows on every lab's page, and a lab can propose its module to national (schema draft, "Home and listings"). Permissions follow a record's home. So "chapter locks" means *a lab edits its own records and sees everyone's published ones*, not *a lab sees only its own*.
5. **Fits OLOS as the source of truth**, or a clear rule for which system holds what (schema draft, open questions).
6. **GitHub stays** in the Cycle and the tooling, including Claude Code (Decided, Nov 25).
7. **Approval before publishing**, and the upkeep queue (schema draft, proposal 10).
8. **Free or sponsored** for a volunteer-led nonprofit.

## Options

| Option | How it's free or sponsored (claimed) | How permissions work (claimed) | Against the needs above |
|---|---|---|---|
| **Decap CMS** | Free and open source. Hosted on GitHub or GitLab with Netlify or Vercel; unlimited users | Content lives in a Git repository; editors log in to a web UI and edit Markdown files, e.g. per chapter folder | Fits GitHub staying (6) and cost (8). To check: whether per-folder locks are enforced or only conventional (4), how well it reuses components and links content (2), and how it fits OLOS's database (5), since content would live in Markdown, not in OLOS |
| **Sanity** | Pod lead: free for volunteer-led organizations | Not yet looked at | Pod lead: works with Claude Code and GitHub. To check: references for reuse (2), roles by lab (4), plan limits |
| **Custom, built by a builder** | No license cost; a builder has offered to build it | Whatever it's built to do: it can follow the schema draft's home and listings exactly | Can be built directly on OLOS (5) and around the schema draft (2, 3, 4, 7), with Claude Code and GitHub (6). The cost is people: who builds it, how long it takes, and who keeps it running when the builder moves on. The same orphan risk the upkeep queue addresses for content applies to the system itself |
| **Strapi Cloud** | No free cloud tier; a nonprofit program offers steep discounts or sponsored access for verified nonprofits with an active web presence ([Strapi blog](https://strapi.io/blog/empowering-open-source-and-non-profits-with-strapi-cloud)) | Custom roles: unlimited roles (e.g. "Baltimore Chapter Editor"), restricted by content type, field or creator ([Strapi](https://strapi.io/features/custom-roles-and-permissions)) | Managed hosting. Reusable "components" are a Strapi concept (2). Restricting by creator isn't the same as by home lab (4); check whether a role can be limited to a lab's records while seeing everyone's published ones |
| **Directus** | $0 license through an Open Innovation Grant (under $5M revenue, under 50 employees); self-hosted, possibly on nonprofit cloud credits ([Directus](https://directus.com/)) | Row-level filters, e.g. a "Chapter Lead" role limited to `chapter_id == $CURRENT_USER.chapter_id` | Closest to the schema's model (4): a rule like `home_metro_id = the editor's lab` for editing, with published records readable by all. Directus works on top of an existing SQL database, so it could be the editing screen over OLOS's own Postgres tables, keeping OLOS the source of truth (5). Cost: someone has to host and maintain it |
| **Contentful** (multi-space) | Request a nonprofit upgrade with multiple spaces | Each chapter gets its own isolated space | Isolation works against federation (4): a national module couldn't simply show on every lab's page, and proposing a lab module to national means copying across spaces |

## A first read (Claude's, to test)

- **Directus** matches the federated model and OLOS best on paper, at the cost of hosting it.
- **Decap** matches "GitHub stays" best, but moves content out of OLOS and into Markdown, which reopens the question of what the source of truth is.
- **Sanity** and **Strapi** sit between: managed, with good reuse, if their roles can follow a record's home.
- **A custom build** fits the model exactly, since it's built to it, but depends on volunteers to build it and keep it running. A managed or open-source option shifts that work to a vendor or a community.
- **Contentful's** one-space-per-chapter model is the weakest fit for listings across labs.

Before choosing: check each claim above, and try one real module (with a resource used in two places, and a regional module listed on another lab's page) in the top two options.
