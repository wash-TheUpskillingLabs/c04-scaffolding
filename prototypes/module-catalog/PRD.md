# PRD: A Bottom-Up Module Catalog for The Upskilling Labs (C04 Scaffolding)

Draft of 2026-11-14, updated 2026-11-25. Hypotheses to test, not settled design.

## Overview

**The problem:** Most newcomers meet The Labs only through the Build Cycle, and outside a Cycle it offers a series of workshops. Those workshops have no feedback loop. Participants have no good way to say what worked, so The Labs has too little information about what to keep. One steering committee member also says they rely on outside experts with no quality check. That leaves little to build a catalog from, and the catalog has to do two jobs: support the Cycle and stand on its own.

**The proposal:** The Scaffolding pod proposes a module catalog that grows bottom-up: help given in specific situations is logged, and modules form around the situations that keep coming back. A module is a bundle of content on a topic (a blog post, guides, facilitation material, recordings, slide decks) with a standard structure, a named maintainer and a review of the material itself. Each module has a card, the catalog entry that lists it: a title, summary, key fields and a thumbnail image, as an event has a card.

**What it should let people do:** The Cycle's own workshops are built from modules, so the Cycle draws on the catalog. Modules are also open to the public, and some help someone prepare for a Cycle. A participant stuck at a step in the participant guide can open the module for that step, and a Poderator can pull one in when a pod is stuck. A non-technical volunteer can maintain the catalog.

**What it is not:** It is a catalog, not a curriculum, because The Labs is an Open Lab and modules follow no fixed path. It does not cover the route map (Wayfinding) or where content is stored and how it reaches people (Front Door). See Non-goals.

**Status:** Everything here is a hypothesis to test, and the open questions are listed at the end. The draft is built from the research listed under Evidence base.

**Evidence base:**

- Research issues #3 to #15, logged Oct 28, mostly published research summarized by the steering committee.
- Eight interviews in the research folder (#16, #23, #25, #26, #28, #29, #39, #42). These are the first-hand evidence: three participants (one a problem proposer, #42), a maintainer's self-report, two participants turned Poderators (#29, #39), an organizer and a steering committee member. None is from an employer, mentor or workshop leader. They are described by role, since the repo is public.
- The steering committee member's Nov 14 notes, not in the repo yet.
- Three case files, with a list of other cases considered.
- The Nov 21 memo and the participant guide.

**What this means for the catalog:** Unclear or shifting structure inside the Cycle (#16, #28, #29, #39, and in part #23 and #42) is a Cycle and Wayfinding problem more than a catalog one. The catalog's own part comes from the steering committee member's notes: workshops have no quality check, and help given in specific situations should be logged so it can inform formal content. This is my reading, to test.

## Evidence

The detail lives in the repo's research folder, one record per interview, case or research issue, and each is linked below. This section keeps only the findings that shape the requirements, and says how far each can be trusted. The interviews are the first-hand evidence. The thirteen research issues (#3 to #15, logged Oct 28 by the steering committee) were written from published research, several from memory or secondary summaries, so check the original before quoting any figure. Evidence is stated by role only, since the repo is public.

| Finding | Where it comes from | How far to trust it |
| --- | --- | --- |
| Most newcomers meet The Labs only through the Cycle, and outside one it offers workshops. | [#14](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/14), [#25](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/25) | One organizer's account, plus the pod lead's typed notes of a steering committee member. |
| Participants have no good way to say what worked, so The Labs has too little information about what to keep. | The pod's reading, to test. Consistent with [#25](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/25) (the workshop model "doesn't work") and [#29](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/29) (presenters weak at teaching). | An inference, not a stated finding. No account describes the feedback gap directly. |
| Workshops rely on outside experts and their own content, with no quality check. | Nov 14 notes of a steering committee member. Not in the repo yet. | One person, typed into Claude as they spoke. Wording to confirm. |
| Structure and purpose were unclear or shifted during the Cycle. | [#16](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/16), [#28](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/28), [#29](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/29), [#39](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/39), and in part [#23](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/23) and [#42](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/42). Six of eight interviews, two of them only in part. | Mostly first-hand. My count. This is a Cycle and Wayfinding problem more than a catalog one. The C03 problem proposer (#42) found the schedule itself clear ("very straightforward. That was very structured"); what she didn't know was what voting and project teams would look like, and there was no support when she was stuck. |
| Learners arrived without the grounding they needed, and information was spread across places or not read. | [#16](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/16), [#23](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/23), [#26](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/26), [#28](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/28), [#29](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/29), [#39](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/39) (a GitHub 101 that assumed setup), [#42](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/42) (GitHub "what is that?", and no idea what to expect at the hackathon). Seven of eight. | Mostly first-hand. My count. Whether the #25 and #28 organizers are one person is open. |
| Specific workshops were valued; timing, level and access got in the way. | Valued: [#39](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/39) ("the vast majority of the other sessions were excellent," apart from one GitHub 101), [#29](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/29) (a branding workshop "was good"), [#42](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/42) (still applies a problem-solving workshop "to most of the things that I do"). In the way: [#16](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/16) ("Honestly, not really"; not matched to her level), [#23](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/23) (design thinking "might have been useful before the cycle"; GitHub sessions didn't fit her time), [#26](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/26) (times didn't work). | First-hand, mixed. Fits a catalog: what a session is for, who it suits, and a way to catch up later. |
| Help asked for through the Learning Log reached no one. | [#42](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/42) (reported being stuck, "I did, I did, I did"; no one reached out), [#39](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/39) (Poderators had no access in OLOS), [#28](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/28) (an organizer understood it was "supposed to be for the Poderators"). | One participant first-hand, one Poderator first-hand, one organizer's understanding. Bears on capture: a request for help needs a route to someone who can act. |
| Help starts hypersituated and should be logged so modules form around recurring situations. | Nov 14 notes of a steering committee member, on bottom-up creation. Not in the repo yet. | One person, typed live. A design direction to test, not a finding. |
| Volunteers and organizers may be carrying too much, and nobody has measured hours. | Two relayed mentions (a volunteer cutting back, an organizer worried about several organizers' load). The Code for America Brigades case file in the research folder. | Two secondhand mentions, one each. The case is a draft from public sources, not an account from The Labs. |
| Learning-science ideas that could shape the catalog. | Research issues [#3 to #15](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues), and the catalog design section below. | Mostly secondary summaries, with studies from classrooms. Candidates to test, not findings. |

What it tells us (my read): [mine]

## What the research suggests for catalog design

The research points to a handful of things a card could say, but each row is my reading of the issues, not a finding, and the studies are mostly classrooms rather than adults upskilling for work. Treat every row as a candidate for the prototype test.

| What the research says | Issues | What a card could do about it |
| --- | --- | --- |
| Trying a problem before being taught tends to help learners who already have some knowledge | #3, #4 | Say when it fits: before an attempt, when stuck, or after. A module is most useful as the explanation that follows an attempt. |
| Novices need some grounding before they struggle | #6 | List prerequisites and the output, so training modules can supply the minimum grounding. |
| How a helper responds matters: asking and giving time works, telling does not | #4, #10 | Give mentors and peers a training module on helping without taking over. |
| Support is meant to come down | #8, #10 | Say what gets withdrawn and when. |
| Learners differ in how self-directed they are | #10 | Name the learner stage the card suits. |
| Motivation depends on choice, feeling capable, and belonging | #9, #11 | Optional by default. Output is something finished. Small-group formats count for belonging. |
| Newcomers move from the edge toward the center | #13, #15 | Keep the contributor to maintainer ladder, with open contribution and named maintainers. |
| Learning starts before and continues after a Cycle | #14 | Let "stage" include prep, a maintained project after, and no Cycle at all (Nov 21 memo). |
| Plain words help, but a metaphor is not evidence | #5, #7 | Use "productive struggle" in the card text. Do not cite the Dunning-Kruger curve. |
| Participants found Dorst's words unfamiliar, didn't know what came next, and met a change of vocabulary after the hackathon that nobody announced | Nov 21 memo, citing #16, #23, #26, #28 | Plain-language names first, source terms as optional depth, and the step a module serves named on the card. |

One more point from #12 is about dates, not cards, and is in the success measures below.

## Users and their needs

The interviews give first-hand accounts from participants, a Poderator, an organizer and a steering committee member. Mentors and workshop leaders are still known only secondhand, and no employer has been interviewed.

| Who | What they need from a module card | How well we know it |
| --- | --- | --- |
| Participant in a Build Cycle | To see what a piece of learning is, whether it is optional, what they walk away with, and what to call that skill at work | Six participant accounts (#16, #23, #26, #29, #39, #42), plus the research on struggle (#3 to #6) |
| Poderator | To pull the right module in when a pod is stuck, without being a project manager | Two participants turned Poderators (#29, #39) and an organizer (#28) |
| Mentor, peer or SME (volunteer) | To know how to help without taking over, to hand a session to someone else, and to stop re-answering the same questions | The research (#4, #10) and participants' accounts of mentors (#16, #29, #39, #42; in #42 a mentor set up GitHub for her, then for her team). No mentor interviewed. |
| Module maintainer | A format light enough that a few volunteers can create and keep it current | Organizer aims (#15) |
| Employer or hiring manager | Words they recognize for what the Cycle taught | Not yet interviewed |
| Wayfinding and Front Door pods | A shared description of a module: consistent stops for the map, a schema for the content store | Boundary note drafted in the handoff, not known to be sent |
| Outside expert (for example at a small or mid-sized business) | A low-effort way to contribute knowledge that becomes a module, with the content anonymized | Steering committee follow-up notes only |
| Mentor who helps a team that escalated | A light way to log what the problem was and what worked | Steering committee follow-up notes only |
| Outside event host | An easy way to register an event, a clear approval rule, and feedback on a workshop | Steering committee follow-up notes only |
| New regional organization | To publish modules and events with little setup | Steering committee follow-up notes only. One related line was unclear as written. |
| Someone who uses modules without joining a Cycle | To find a module by the situation they face, in plain words, without needing the Cycle or its terms | The Nov 21 memo only. No one in this group has been interviewed. |

## Goals and non-goals

Each bullet in the goals and requirements ends with its source in brackets. Steering notes are the steering committee member's notes of Nov 5 (#25) and Nov 14 (not in the repo yet). Pod lead means the pod lead's own message or handoff. Claude's proposal means no source gave it, and it can be struck. Memo is the Nov 21 memo.

The goal is that help given in a specific situation can become shared learning material, and that someone can look at a module's card and know what it is, when to use it, who delivers it, and what skill or output it builds.

**Goals**

- A mentor or participant can log a situation in a few lines (what the problem was and what worked) without special training. [Steering notes, Nov 14, not in repo]
- Modules form from logged situations and share a standard structure: a general-knowledge entry plus resources, a learning outcome, exercises, resources for facilitators, and the skills it assumes. [Steering notes, Nov 14, not in repo]
- A named person reviews each module's learning material before it is used, so quality doesn't depend on one outside expert. [Steering notes, Nov 14, not in repo; the named person is Claude's proposal]
- A card lets a participant, a workshop leader and an employer see what a module is, when to use it, who delivers it, and what skill or output it builds. [Pod lead]
- Structure emerges: tags and categories grow from use, with a small top-down core, such as GitHub training, which is validated as needed to join the ecosystem. [Steering notes, Nov 14, not in repo]
- Wayfinding and Front Door can use the same taxonomy and data model. The three pods share it as the glue between them, and the card fields here are Scaffolding's input to it, not the final word. [Pod lead]
- A new regional organization or outside host can submit a module or register an event with little setup. Whether it goes live at once or after approval is open. [Steering notes, Nov 14, not in repo]

- Someone who never joins a Cycle can find a module by the situation they face and use it without the Cycle's vocabulary. [Memo, Nov 21; Pod lead]
- Volunteers and mentors work within clear roles, so quality holds, participants are supported and people don't burn out. [Pod lead]
- Priority (Must): the catalog can be maintained by a non-technical volunteer. Fixing or refreshing a module, adding a situation log, editing a card and proposing a new module all work without Git, GitHub or Markdown skills. Updates are still reviewed before they go live. [Pod lead, Nov 24]
- The Cycle's own workshops are built from modules, so the Cycle draws on the catalog instead of running separate content. [Pod lead]
- Modules are open to the public, and some help people prepare for a Cycle. [Pod lead]
- A participant who is stuck at a step in the participant guide can open a module for that step. [Pod lead]
- A Poderator can pull in a module when a pod is stuck. [Pod lead]

**Non-goals**

- A curriculum. The Labs is an Open Lab, and the pod doesn't want to sound like a licensed career or postsecondary school. A steering committee member also called this a catalog, not a curriculum, since a curriculum is regulated. New York licenses private career school curricula, and DC licenses postsecondary schools. Modules follow no fixed path. Modules are optional by default. [Pod lead; Steering notes, Nov 14, not in repo (regulated)]
- The route map and "you are here" view. That is Wayfinding's lane. [Pod lead]
- Where content is stored and how it reaches people. That is Front Door's lane. One organizer on the steering committee gave the opinion that Markdown is the simplest format, and nothing more is assumed here. [Steering notes, Nov 14, not in repo (Markdown); Pod lead (Front Door's lane)]
- Deciding whether The Labs is a platform with verified creators or the creator itself, or what approval an outside host needs. Those are open questions for the steering committee. [Steering notes, Nov 14, not in repo (open questions)]
- Proving that the research applies at The Labs. The studies are by analogy, and the pod would have to test them. [Claude's proposal]
- Scoring, grading or issuing credentials. [Pod lead, Nov 24]

## Requirements

The requirements come in six parts: capturing situations, the module itself, the card that lists it, review of the learning material, structure for volunteers and mentors, and the shared taxonomy. They come from the steering committee member's notes, the interviews, and the Nov 21 memo and participant guide, and each is a candidate to test.

### Capture a situation

- A short log for help given in a specific situation: what the problem was and what worked. It should be light enough for a mentor to write in minutes. [Steering notes, Nov 14, not in repo]
- A log can name the participants and mentors involved, as the people who solved it. Whether logs are public, and whether someone can ask to be left out, is open. [Pod lead, Nov 24]
- When a team in OLOS escalates and a mentor accepts, how it was solved goes in the log. Accrued logs are what modules are formed from. [Steering notes, Nov 14, not in repo]
- Everything starts tied to one situation. A situation that recurs, or an approach that holds across several, becomes a candidate for a module. Who decides, and when, is open. [Steering notes, Nov 14, not in repo]

- Retros and handoff READMEs written at the end of a cycle are a ready source of situations. The memo proposes a short retro (what turned out wrong about the frame) and a handoff README for each project, and suggests organizers point new cohorts to past project repos. Neither is in place yet. [Memo, Nov 21]

### The module

- An organizer who sits on the steering committee gave the opinion that a Markdown file is the simplest thing that can hold a module. It is one person's opinion, not a decision. Front Door has not confirmed it owns how modules are stored and delivered, and whoever edits a module must be able to be a non-technical volunteer. [Steering notes, Nov 14, not in repo; Pod lead (Front Door's lane)]
- A standard structure: a general-knowledge entry plus resources, like an encyclopedia entry; a learning outcome, worked back from what the learner should be able to do; the exercises participants go through; resources for facilitators; and the skills it assumes (rapid prototyping assumes Git, Vercel and Supabase). [Steering notes, Nov 14, not in repo]
- Two kinds: upskilling modules for learners, and training modules for the people who deliver them. [Steering notes, Nov 5 (#25)]
- A module can be general or cohort-specific (team setup, team formation, tool-specific guides). C04 uses Claude, and whether other coding agents are allowed is open. [Steering notes, Nov 14, not in repo]
- Modules are optional by default. [Steering notes, Nov 5 (#25)]

- A module should make sense with no Cycle at all. The memo asks the pod to agree a point of view: modules are the Labs' learning offer for everyone, and the Build Cycle is optional, hands-on practice. People learn before a Cycle, during one, after one, and without ever joining. This is not yet agreed (see the open questions). [Memo, Nov 21]
- Cycle-specific details (dates, topic, repo links) sit apart from the lasting content, so a module can be reused without rewriting it. The two "What to Expect" docs were written for the July to October Cycle, and their dates and topic are now out of date. [Memo, Nov 21]
- An exercise can sit beside an AI prompt, with a reminder to check what the AI says against real people and sources. The participant guide does this at each step, and the Labs' pitch promises both AI skills and durable skills. [Participant guide]
- A way to tell the outcome has been reached. The participant guide gives each step a goal and a "move on when" check, which is a candidate form of the learning outcome. It also has a worked example, a list of common traps and a list of past workshops that help. Whether those belong in the standard structure or only in that guide is to test. [Participant guide; Steering notes, Nov 14, not in repo]
- The framing steps could themselves be modules, such as mapping the players, used by someone at work who never joins a Cycle and by a participant at that step. Each step in the guide would then point to a module instead of a one-off workshop. This is a proposal in the memo. [Memo, Nov 21]
- The first set could be the nine framing steps. The memo's table matches a past workshop to eight of them, by title and recording name only, and none to looking further out (Dorst's Field). Most of those sessions still need their deck or recording archived, and the matches need checking against what was taught. [Memo, Nov 21]
- A module can take more than one form: a workshop, exercises, self-guided learning, or a guide. A workshop is one form a module can take, not the module itself. Whether one module can hold several forms, or each form is its own module, is open. [Pod lead, Nov 24]
- Cycle workshops are written as modules, with the workshop as the form delivered in the Cycle. The same module is open to the public and can serve people before or outside a Cycle. [Pod lead, Nov 24]
- Each framing step in the participant guide links to the modules that help with it, so a participant who is stuck can open one. The Cycle step field is what makes the link. [Pod lead, Nov 24]
- A Poderator can find modules by the situation a pod is in, such as stuck at a step or short of evidence, and not only by step. The Situation and Timing fields are what make that possible. [Pod lead, Nov 24]

### The card

The card is what someone sees when browsing: a title, summary and thumbnail image, plus the fields below. The fields are candidates, and the first four modules should show which ones people use. The allowed values are starting points, not a fixed list.

| Field | What it answers | Priority | From |
| --- | --- | --- | --- |
| Kind | Upskilling module (for learners) or training module (for the people who deliver it) | Must | Steering committee interview |
| Output | Training (no required output) or workshop (has an output), and what people leave with | Must | Steering committee interview |
| Stage | Where the learner is: before a Cycle, during one, after one (going deeper, keeping a project going, becoming a mentor), or with no Cycle at all | Must | #14, Nov 21 memo |
| Scale | 1:1, 1:few, or 1:cohort/public | Must | Steering committee interview |
| Delivered by | The presenter or role that runs it. A presenter can be credited by name, so the person delivering it again knows who built it | Must | #10 |
| Maintained by | The few people who keep it current | Must | #13, #15 |
| Timing | Before an attempt, when stuck, or after | Should | #3, #6 |
| Learner stage | Where the learner is in how self-directed they are. The stages are not named yet. #10 offers dependent, interested, involved and self-directed as a starting point | To discuss | #10, Nov 21 memo |
| How support fades | What gets withdrawn, and when | Should | #8 |
| Maps to | The plain-language step name first, then the source term (such as Dorst's) and the names used elsewhere for similar work, so a learner can say what they did in a job interview | Should | Handoff notes, Nov 21 participant guide |
| Time | How long it takes | Should | Handoff notes |
| Prerequisites | What to have done first | Should | #6 |
| Reviewed by | Who checked the learning material itself, and when, before it was used | Must | Steering committee follow-up, #16, #28, #29 |
| Learning outcome | What the learner can do afterward, worked back from to decide the exercises | Must | Steering committee follow-up notes |
| Thumbnail | The image shown on the card, as an OpenGraph image | Should | Steering committee follow-up notes |
| Cycle step | The step it supports in the participant guide, and its phase (Discover, Define, Develop or Deliver), named in plain words rather than by number. Empty when the module stands on its own. | Should | Nov 21 memo, participant guide |
| Situation | The moment it helps with, in the words a learner or mentor would use, so people can search by what they face instead of by Cycle week | Should | Nov 21 memo |
| Form | Workshop, exercises, self-guided learning or a guide, and more than one if the module has several | Should | Pod lead's notes, Nov 24 |

Beyond the fields:

- Nothing in the card format marks a module as required, because modules are optional by default. [Claude's proposal; follows from #25, where modules are optional]
- A card can be written from a past workshop in one sitting, so the catalog can start from what already exists. [Pod lead, handoff]
- A card has a status, such as draft or stable, so readers know how far to trust it. This is borrowed from how The Carpentries run their lessons, which was a suggestion to test, not from the steering committee. [Claude's proposal, from the Carpentries, which the handoff suggested]
- Cards credit the people behind the material, such as presenters and authors, by name. They link to recordings and slides. [Pod lead, Nov 24]

- Cards can be found by situation and by learner stage first, not by Cycle week. How the catalog view works is Front Door's lane. [Memo, Nov 21]

### Review of the learning material

- Each module names who reviewed the material itself, and when. A steering committee member said workshops rely entirely on outside experts and their own content, with no QA. [Steering notes, Nov 14, not in repo]
- How often to review, and whether the checks below are the right ones, is open. [Open]
- One idea to test, from a Poderator interview (#29): ask presenters for the audience's needs, "three key points" and at least two in-class exercises. The interview file marks it as parked, not evidence. [Interview #29, parked]

- Evidence that review matters: the memo's check of the two "What to Expect" docs found an example that doesn't match the book it cites, four milestone dates still marked "Exact date TBD" after the Cycle ended, past dates, a cut-off folder name, stray asterisks from a copy-paste, and an out-of-date "what this Cycle is about" section. Most of it is staleness, not wrong ideas. [Memo, Nov 21]
- Candidate checks, drawn from those findings and to be tested: facts and examples match the source cited, dates and topics are current or kept apart from lasting content, links work, formatting survived a copy-paste, and terms match the shared vocabulary. [Memo, Nov 21]
- A card shows the date of the last review, so a reader can see how old the check is. [Memo, Nov 21]

### Volunteers and mentors

Whatever the learning goals turn out to be, volunteers and mentors need some structure, for three reasons: so quality holds, so participants are supported, and so people don't burn out. The steering committee notes and the interviews don't cover this directly, though the Brigade case file reports volunteer burnout in comparable chapters, and no mentor, workshop leader or Poderator has been asked about their hours. The pod lead relayed two mentions: a volunteer said they are getting busy and will cut back next year, and an organizer worried that several organizers carry a lot of load. The concern also came up at the March 2020 Brigade 2.0 session, which the Code for America case cites. These requirements are candidates drawn from the pod lead's three aims, to test with the people they affect.

- A short written description for each volunteer role (mentor, Poderator, facilitator, module maintainer, organizer): what it covers, the hours it asks for, who to ask for help, and when to hand off. A description covers the role, not whoever holds it today. [Claude's proposal]
- Participants can tell who to ask. A card names the role that delivers it, and when a team escalates in OLOS there is a defined route to a mentor. What happens when no mentor accepts is open. [Steering notes, Nov 14, not in repo (escalation route); Claude's proposal]
- A named person volunteers can go to when the load is too much, and some way to see when a few people carry most of the sessions. [Pod lead (burnout aim); relayed organizer mention]
- A clear path beyond volunteering, such as the participant to practitioner to contributor to leader path a past participant proposed. The Brigade case reports chapter leaders saying there was no such path, and one chapter later paid former fellows as mentors. [Memo, Nov 21; Case: Brigades]
- Plan for short tenures and give new volunteers a valuable first task quickly. Several Brigade chapters saw about three months of high commitment from a new volunteer, and Code for Miami's newcomers dropped off when they got little value. [Case: Brigades]
- Decide which roles count as volunteers. The pod's stakeholder map (players.md) keeps volunteers separate from participants and marks which roles count as volunteers as open, so the list of roles above, including organizer, is provisional. [players.md]
- Priority (Must), the pod lead's proposal of Nov 24: the catalog can be maintained by a non-technical volunteer. That covers fixing or refreshing a module, adding a situation log, editing a card, and proposing a new module, without Git, GitHub or Markdown skills. The capability is the requirement. The mechanism is Front Door's lane. [Pod lead, Nov 24]
- A non-builder's change goes through review before it goes live, so opening up updates doesn't lower quality. Who reviews, how fast, and which roles may publish directly and which only propose are open. [Claude's proposal]
- A tension to resolve: a steering committee member said GitHub is a requirement for joining the ecosystem (#25), and the same organizer suggested Markdown as the format. But GitHub overwhelmed non-technical participants (#28, heard), and a GitHub gap came up in seven of eight interviews (#16, #23, #26, #28, #29, #39, #42, my count; the eighth, #25, is the steering committee member who called GitHub a requirement). If a non-technical volunteer has to be able to maintain the catalog, the editing route has to sit in front of the repo, such as a form or simple editor, and not depend on it. An option that could fit both (Nov 25, not decided): a content system such as Sanity, which the pod lead says is free for volunteer-led organizations, works with the current tooling, including Claude Code and GitHub. Volunteers would edit in it without GitHub, and the content could still flow to the repo. A builder has said he can spin one up. Whether this suits the steering committee, and how it fits OLOS as the source of truth, is open. Front Door's lane. [Claude's proposal; Interviews #25, #28; Pod lead, Nov 25] **The pod lead's view (Nov 25):** GitHub is important and The Labs should keep using it, as the organizer said. Both hold: participants keep learning GitHub in the Cycle (the GitHub modules), and catalog content can be added and kept current without it (schema draft, Decided Nov 25). [Pod lead, Nov 25]
- Keeping the catalog current is a volunteer task that doesn't need a builder, so it can be a valuable first task for a new volunteer. [Claude's proposal]

### Taxonomy

- Tags and categories emerge from use. Start with a small set and let more appear, without the Labs dictating them. [Steering notes, Nov 14, not in repo]
- Some things are set from the top, such as GitHub training, which is validated as needed to join the ecosystem. Others are optional, such as Lovable. [Steering notes, Nov 14, not in repo]
- The taxonomy and data model are shared with Wayfinding and Front Door, as the glue between the three pods. [Pod lead]

- Plain words come first. Each term has a plain-language label, then the source term as optional depth, then the names used elsewhere. The participant guide's "Want to go deeper" table does this for the nine framing steps; for example, "Name what's stuck" is Dorst's Paradox, and "problem statement" elsewhere. [Memo, Nov 21; participant guide]
- Build on what exists before adding terms: Front Door's [participants data dictionary](https://github.com/wash-TheUpskillingLabs/c04-frontdoor/blob/main/research/participant-scope/participants-data-dictionary.md) and its dimensions mind map (activities, participant roles, locations); Scaffolding's glossary, whose entries mostly lack a plain-language definition; and the [confusion log](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/blob/main/research/record-confusion-log.md), which lists pod and team, sprint, group day, the role of design thinking, "the judgment the Cycle is for," and "scaffolding" itself. [Claude's proposal]
- One owner and one place for agreed terms, so the participant guide, the "What to Expect" docs, the rebuilt OLOS and the catalog use the same words. Who that is, and when a recurring tag becomes an agreed term, is open. [Memo, Nov 21]
- Role names may change. The memo recommends calling the larger group a Research Group and the project group a Team, which would rename the Poderator role. That is a recommendation, not a decision, so values for "Delivered by" shouldn't hard-code today's names. [Memo, Nov 21]
- Cards cite steps by plain name, not number. The participant guide numbers its steps in the Labs' order and the memo's table uses Dorst's order, so the same number points to different steps. [Memo, Nov 21]

## Parked ideas

These have some evidence behind them, but no source has asked for them yet. Each could move into the requirements if the pod wants it.

- **Two or more maintainers per module.** The steering committee member said a prototype module needs "a few maintainers" to create and maintain it (#25), with no number. The Brigade case reports a chapter captain working about 90 hours a week unpaid and "revolving door volunteers." The Carpentries case lead (PR #38) describes lessons maintained openly on GitHub by a community, from search summaries. Named volunteer maintainers comes from the handoff and is unverified. The number two is the pod's, not a source's. An alternative, proposed Nov 25: no named maintainers required, and an open upkeep queue that anyone with permission can pick items from, visible to everyone (schema draft, proposal 10).
- **Training before a volunteer role starts.** #4 found that when teachers probed and gave time, struggle stayed productive, and telling the answer lowered the thinking (middle-school math). #10 says a mismatch between the helper's role and the learner's stage causes resentment or a feeling of being abandoned. In the interviews, Poderators were unsure how much they could suggest (#29) and a mentor told a participant to "ask the AI" (#16). Nothing yet shows whether volunteers at The Labs want training or lack it.
- **A card that sets up an attempt says how to try it privately and how to get out.** #5 reports criticism, from a secondary guide to the Learning Pit, that planned struggle can read as public failure for some learners, and flags adults who recently lost jobs. It has not been tested at The Labs.

## Success measures and dates

Three things to test: whether people can pick the right module from its card, whether a logged situation can become a module, and whether the learning material gets reviewed. The first test is to write three or four real past workshops as modules and show their cards to testers. The handoff's idea was a participant, a workshop leader and an employer. Who the testers will be, and how many, is not known yet. The README set Nov 8 to 13 for rapid prototypes, and it isn't known whether that happened. The targets below are proposals for the pod lead to set.

| Measure | How we'd check | Proposed target |
| --- | --- | --- |
| Right card chosen | Each tester gets a situation and a set of cards | To be set |
| Can say what it builds | Tester says in their own words what skill or output the module builds | To be set |
| Cards fit real workshops | How many of the four past workshops are written without changing the format | All four |
| Fields get used | Which fields testers read, and which they skip | Cut any field nobody used |
| Cost to write one | Time for a volunteer to write a card, from the first four | Set after the first four |
| Missing voices heard | Interview issues logged with a mentor, a workshop leader and an employer. Not yet done: #29 covers a Poderator, not these. | At least one of each |
| First release is used | People who use it by Mon Nov 23 (README requirement) | At least three |
| Release changes because of feedback | What changed between Nov 23 and Nov 30 | At least one change, traced to a user |
| Hand-off | Final release Mon Dec 7: written account, January maintainer named, pull request to OLOS | All three done |
| Situations are logged | Situations logged in a few lines (the problem, what worked), by different people | At least three by Dec 7 |
| A module forms from logs | Modules written from logged situations | At least one by Dec 7 |
| Material is reviewed | Modules with a named reviewer before first use | All modules in the first release |
| Someone else can submit | A person who didn't build it submits a module or registers an event from the written steps | To be set |
| Found without a Cycle | A tester who has never joined a Cycle gets a situation and picks the right module from the cards | Set with the other card targets |
| Framing steps covered | The nine framing steps checked against the catalog: a module, a past workshop written up, or a named gap | All nine covered or named as a gap by Dec 7 |
| Participants know who to ask | A tester stuck on a situation names the role to go to, from the card or the role description | To be set |
| Volunteer load is known | Hours each volunteer role asks for, checked with a mentor, a workshop leader and a Poderator | Set after those interviews |
| Stuck, finds a module | A participant stuck at a step, and a Poderator with a stuck pod, each find a module without help | Both, on most situations |

Dates from the README, plus one from #12:

| Date | What |
| --- | --- |
| Sat Nov 14 | Project proposals pitched and voted on |
| Mon Nov 23 | First release, used by at least three people |
| Thu Nov 26 | Calendar midpoint (Thanksgiving). Gersick's teams changed approach here (#12), so plan a check-in before it. |
| Mon Nov 30 | Second release, changed by user feedback |
| Mon Dec 7 | Final release, written account, January maintainer named, pull request to OLOS |
| Tue Dec 8 | Teach-back and ship |

## Risks, assumptions and open questions

The biggest risk is that the catalog hardens into a syllabus, which is the trap the pod has already named: a fixed curriculum turns learning by doing into a course.

**Risks and assumptions**

- Modules become required reading. Mitigation: no "required" field, and test with a Poderator whether modules get pulled in when a pod is stuck.
- Writing cards adds work for volunteers whose hours are already limited, and the field list could grow. Mitigation: measure the first four cards and cut unused fields.
- There are six interviews and four case files, but no interview with a mentor, workshop leader or employer, and nothing direct on volunteer hours. The case files are drafts built mostly from public sources. The card fields still lean on organizers' aims, participants and the literature, and one interviewee read the recruiting message first.
- Much of the research is secondhand, and several records say they were written from memory. Read the originals before anyone quotes a number.
- The studies are mostly STEM classrooms and children. They are evidence by analogy for adults upskilling for work.
- Planned struggle can feel like public failure, and #5 flags adults who recently lost jobs. Any card that sets up an attempt needs a private or low-stakes way in and a clear way out.
- Assumed: Wayfinding and Front Door want a shared module description. The boundary note was unsent in the handoff.
- Assumed: group days are asynchronous. Confirm with an organizer, along with whether the Nov 14 vote is too.
- The midpoint check-in (Nov 26) falls on Thanksgiving.

- A steering committee member wants structure to emerge over time, with modules tagged and categorized without the Labs dictating it. A fixed set of allowed values in the taxonomy would work against that. The taxonomy may need to start small and grow from use.

- Outside experts supply the content, so a review step that is too heavy could stop them contributing.
- The catalog depends on a three-sided marketplace: the organization, outside experts and participants. If one side doesn't show up, few modules get made.
- Bottom-up capture works only if mentors log situations. Nothing yet says who asks them to, or how.
- An outside host's workshop reflects on The Labs, so brand safety matters. How much control the Labs keeps is open.
- A catalog can drift into a curriculum and start to sound like a licensed career or postsecondary school, which isn't the Open Lab format. A steering committee member also says a curriculum is regulated, as it is for licensed schools in New York and DC.

- Modules written for one Cycle go stale and mislead. The "What to Expect" docs still carry the July to October dates, and four dates that were never set. Mitigation: keep Cycle-specific details apart from lasting content, and show a review date.
- Step numbers differ between sources, so a module citing a number could point to the wrong step. Mitigation: cite steps by plain name.
- The participant guide has its own "Where am I, and what's next?" table, close to what Wayfinding is meant to own. Two versions could drift apart.
- Structure for volunteers can turn into rules that put them off. Mitigation: keep it to a short role description and a handoff note, and test it with mentors.
- Beyond the Brigade case file, the volunteer and burnout concern rests on two relayed mentions, a volunteer and an organizer. Neither is in an interview or a record, and nothing in the sources says how many hours volunteers give now.
- Code for America ended its Brigade program in 2023, and the reasons reported include falling volunteerism and harder fundraising. A catalog that depends on volunteers has the same exposure.

**Open questions**

- [ ] Do mentors at The Labs probe, or solve it for people? (#4)
- [ ] What is The Labs' version of the moment someone explains why an attempt fell short? (#3)
- [ ] How much grounding is "just enough," and for whom? (#6)
- [ ] What moves someone from one stage to the next, and who decides?
- [ ] When is a module required, and when is it pulled in because someone is stuck?
- [ ] At what point does repeated help become a module?
- [ ] What is the minimum someone needs before a Cycle to start well? (#14)
- [ ] Do contributors at the edge feel like members or like helpers? (#13)
- [ ] Which organizer aims conflict, such as self-organizing teams and people who need more direction? (#15)
- [ ] Which meaning of "agentic" does the pod use? (#11)
- [ ] Beyond a series of workshops, what does The Labs offer between Cycles?

- [ ] Is the problem unclear or shifting structure more than how much structure? (#16, #28, #29)
- [ ] Is the real question who decides, not how much structure? (#29)
- [ ] How do mentors and workshop leaders spend their volunteer hours, and what would make that time go further? (no interview covers it)
- [ ] Does a plan that is fixed for a Cycle matter more than any card? (#28)

- [ ] Who reviews the learning material, what do they check, and how often?

- [ ] How are tags and categories meant to emerge, and who decides when a tag becomes a term in the taxonomy?
- [ ] Which things stay top down (GitHub training is one) and which are optional?
- [ ] Is the Labs a platform with verified creators, or the creator itself?
- [ ] How does an outside host register an event, and what approval does it need?
- [ ] How do we keep quality with a lean core while modules are contributed across the country?

- [ ] When a mentor helps a team that escalated in OLOS, how is the way they solved it captured so it can seed a module?

- [ ] Is the catalog the Labs' learning offer for everyone, with the Build Cycle as optional practice? The steering committee says the Cycle "shouldn't be always on," and between Cycles it offers a series of workshops. (Nov 21 memo)
- [ ] Do the framing steps become modules, and who writes them? No past workshop matches looking further out.
- [ ] Who owns agreed terms, and where do they live?
- [ ] Where does the line fall between this catalog and Wayfinding's "where am I, and what's next" view, now that the participant guide has such a table?
- [ ] Should the path a past participant proposed, from participant to practitioner to contributor to leader, show on cards through training modules for people who deliver? (Nov 21 memo)
- [ ] How do workshop participants tell The Labs what worked, and where does that show up for the next learner?
- [ ] What does The Labs ask of volunteers and mentors now, in hours and tasks, and who decides?
- [ ] When a team escalates and no mentor accepts, what happens?
- [ ] How will we know a volunteer is close to burning out, and who steps in?
- [ ] Does this structure live in the catalog, in OLOS roles and onboarding, or in both?
- [ ] Which organizer tasks are carried by only a few people, and what could be shared?
- [ ] Does The Labs need dedicated capacity, such as a few paid or part-time roles, to keep volunteer-run learning going? One Brigade chapter described its lesson as the need for dedicated capacity.
- [ ] Which roles count as volunteers: mentors, workshop leaders, facilitators, organizers, maintainers? (players.md marks this open)

## Sources

Read Nov 14, 2026. Issues #2 to #6 were pasted in by the pod lead. #7 to #15 were read from the issue pages through summaries, so wording is paraphrased. Issue #1 was not read.

- [#2, This week (maintainers' checklist)](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/2)
- [#3, Productive failure meta-analysis](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/3)
- [#4, Productive struggle](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/4)
- [#5, The Learning Pit](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/5)
- [#6, Cognitive load and minimal guidance](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/6)
- [#7, What the Dunning-Kruger study found](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/7)
- [#8, Where "scaffolding" comes from](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/8)
- [#9, Self-Determination Theory](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/9)
- [#10, Self-directed learning is staged](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/10)
- [#11, Agentic learning and self-efficacy](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/11)
- [#12, Team development](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/12)
- [#13, Communities of practice](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/13)
- [#14, Before and after the Cycle](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/14)
- [#15, What the organizers are striving for](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/issues/15)
- [Scaffolding repo and README](https://github.com/wash-TheUpskillingLabs/c04-scaffolding)
- The pod's C04 Scaffolding handoff notes (Project doc), Nov 5 to 6, 2026.

Interview files in the research folder, read Nov 14 through summaries of each file:

- [#29, participant turned Poderator](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/interview-past-participant-poderator-2026-11-13.md)
- [#28, organizer](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/interview-organizer-2026-11-09.md)
- [#23, mid-cycle joiner and C04 participant](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/interview-c03-c04-participant-2026-11-09.md)
- [#26, maintainer self-report](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/interview-maintainer-self-report.md)
- [#16, past participant](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/interview-past-participant-2026-11-07.md)
- [#25, steering committee member](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/interview-steering-committee-member-2026-11-05.md)

The steering committee member's follow-up notes of Nov 14, including the module, bottom-up and quality notes, were typed by the pod lead as the organizer spoke and are not in the repo yet. They are drafted as a record, record-steering-committee-member-followup-2026-11-14.md, for the pod lead to add by pull request. Until it is merged, the PRD is the only place they appear. The [repo glossary](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/glossary.md) was searched for module, card, taxonomy and content model, not read in full.

Two Nov 21 documents were read on Nov 24 from copies the pod lead supplied, not from the repo:

- Frame Innovation in the Build Cycle: Review and Recommendations, a memo for the program team (Nov 21, 2026).
- [From Problem to Frame: How the Build Cycle Works](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/blob/main/prototypes/participant-guide/README.md), the participant guide, with its double diamond diagram of four phases and nine steps (Nov 21, 2026).

On licensed schools, read Nov 24:

- [New York State Education Department, curriculum information for licensed private career schools](https://acces.nysed.gov/bpss/curriculum-information)
- [DC regulations for postsecondary non-degree schools](https://osse.dc.gov/sites/default/files/dc/sites/osse/publication/attachments/5A81.pdf)

Two mentions of volunteer and organizer load were relayed by the pod lead: a volunteer and an organizer. The March 2020 Brigade 2.0 session is part of the Code for America case, and its auto-captioned quotes should be checked against the audio. Dates aren't given, and no notes are in the repo.

Cases:

- [Code for America's Brigade network](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/case-code-for-america-brigades.md)
- [Pursuit](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/case-pursuit.md) (Queens, NY AI Builder school)
- [Extension Master Gardeners (draft)](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/case-master-gardener-draft.md)

Also considered (possible future cases): [Case leads](https://raw.githubusercontent.com/wash-TheUpskillingLabs/c04-scaffolding/main/research/case-leads.md)

players.md, a first-draft stakeholder map dated Nov 24, was also read, through the GitHub API. frame-innovation-review.md is new in the folder and was not opened.
