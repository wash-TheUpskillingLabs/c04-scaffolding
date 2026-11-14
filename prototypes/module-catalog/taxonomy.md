# Taxonomy (starting set)

A small starting set, per the PRD: tags and categories grow from use, and the Labs doesn't dictate them. Any module or situation can use a tag that isn't listed here. `node build.mjs` counts every tag in use and lists the new ones, so the pod can see which ones keep coming back and decide when a tag becomes a term. Who decides that is an open question (PRD, Open questions).

This file is Scaffolding's input to the taxonomy shared with Wayfinding and Front Door, not the final word.

## Set from the top

Things the Labs validates as needed to join the ecosystem. A module can say it is one of these with `validated:`. Nothing in the format marks a module as required.

- `github` — GitHub training, validated as needed to join the ecosystem (steering committee interview, #25)

## Optional tools

- `lovable`
- `claude`
- `vercel`
- `supabase`

## Starting tags

- `github`
- `git`
- `team-setup`
- `team-formation`
- `prototyping`
- `prompting`
- `helping` (for training modules on helping without taking over)
- `facilitation`
- `research`

## Metadata fields with starting values

These are starting points, not a fixed list. `build.mjs` warns, but does not fail, when a value is outside them.

| Metadata field | Starting values |
| --- | --- |
| `kind` | `upskilling`, `training` |
| `status` | `draft`, `stable` |
| `output_type` | `training` (no required output), `workshop` (has an output) |
| `stage` | `prep`, `during`, `after` |
| `scale` | `1:1`, `1:few`, `1:cohort/public` |
| `timing` | `before-attempt`, `when-stuck`, `after` |
| `learner_stage` | `dependent`, `interested`, `involved`, `self-directed` |
| `scope` | `general`, `cohort-specific` |
