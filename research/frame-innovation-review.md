# Frame Innovation in the Build Cycle: Review and Recommendations

Nov 21, 2026 · @Macon Morrison

**Recommendation:** keep Kees Dorst's Frame Innovation as the engine of the Build Cycle, but stop teaching it directly. Present the cycle as a Double Diamond, use plain language with Dorst's terms as optional depth, and make the second half explicitly about testing ideas with real people.

Participants now have their own guide built this way: [From Problem to Frame: How the Build Cycle Works](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/blob/main/prototypes/participant-guide/README.md). This memo is for the programme team. It assesses the framework, maps its steps to Labs tools and past workshops, and lists fixes for the "What to Expect" docs.

## What the research shows

The Scaffolding pod's research ([c04-scaffolding](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/tree/main/research)) interviewed past participants and an organiser and traced Cycle 3 week by week. Five findings bear on this memo.

- **Dorst's method and vocabulary were unfamiliar.** A Cycle 3 and 4 participant found "some of the language … weird." An organiser interviewed on Nov 9 didn't recognise Dorst's name. A maintainer who completed Cycle 3 relied on the Triangulator's copied prompts because he "didn't understand Dorst at the time." The method was linked only "for the curious."
- **Participants didn't know what came next.** A past participant interviewed on Nov 7 asked for regular meetings "to discuss the next step." Later phases in the schedule were "Exact date TBD," and the two guides sat below the fold in the dashboard's Library tab; one participant finished the cycle without ever finding them.
- **The vocabulary switched silently after the hackathon.** Cycle 3 followed Dorst closely until Aug 15. Afterwards, project guides used design-thinking language ("How might we," personas, PRDs) and pointed to the Double Diamond and IDEO as "Frameworks We Like." Project teams then began a new round of research (audience research and pain points), so in effect the cycle ran two first diamonds: one for the pod's problem and one for each project. That can make sense, since a project is narrower than the pod's problem, but nothing connected the two rounds, and nothing told participants the language had changed.
- **Transformation and Integration were thin.** Months 2 and 3 were mostly prototyping (Dorst's Futures). Nothing asked what people or organisations would need to change to adopt the work.
- **Pods and project teams were easy to confuse.** Participants worked as if the pod were their team, then found it splitting: "you are too many here … that took people aback."

The Labs' own pitch promises both "the technical skills to working with AI" and durable skills, so framing work should be practised with AI rather than traded off against it.

## Is Dorst the right framework?

Yes, as the engine underneath the cycle, but not as the framework participants see. Taught directly, it is harder to follow than it needs to be, and participants have struggled with it.

**Why it fits the Labs**

- The Build Cycle's central bet is that choosing the right problem matters more than building fast. Dorst is one of the few frameworks built entirely around that.
- Cycle topics such as civic participation, climate and healthcare are the open, tangled problems he wrote for, where the obvious fix keeps failing.
- His paradox and themes steps push pods past the usual fixes toward reframes that bring in new partners, which the hackathon and problem-owner discovery depend on.
- The Labs have already built around it: the Triangulator, the facilitator guides and the hackathon plan all use his model.

**Where it struggles**

- **It's abstract and academic.** Dorst says himself the book is not a how-to manual, and its vocabulary (archaeology, field, themes, frames) means nothing to newcomers.
- **It was written for experienced designers.** He describes experts relying on intuition to judge which frames are promising; volunteers in a 13-week cycle don't have that yet.
- **It assumes a client brings you a problem.** The Labs had to invert this and discover the problem owner later, so the cycle already runs a modified version.
- **It's thin on the back half.** Steps 7–9 are about organisational change, not hands-on testing. The hackathon probes and the search for a "ripe" problem owner borrow more from lean startup thinking than from Dorst.

**Alternatives considered**

| Framework | Strength | Weakness for the Labs |
| --- | --- | --- |
| Double Diamond (Design Council) | Simple, widely known, easy to explain | Says little about *how* to reframe |
| d.school / IDEO design thinking | Familiar and accessible; fits the Labs' human-centred design theme | Tends to rush to solutions, which is Dorst's own critique |
| Lean startup / customer discovery | Concrete for testing ideas with real people | No help with framing the problem |
| Design justice / participatory design | Centres the communities affected, which suits civic and community topics | Less of a step-by-step process |
| Systems thinking / theory of change | Good for mapping complex causes and effects | Can become analysis without action |

**Recommendation: a hybrid, not a replacement**

1. Use the Double Diamond as the visible shape. People already know it, it ties directly to the Labs' design-thinking theme, and the Cycle 3 project guide already lists it among "Frameworks We Like."
2. Keep Dorst inside the first diamond (discover and define), where paradox, themes and frames are the real differentiator.
3. Make the second diamond (develop and deliver) explicitly lean: probes, stakeholder tests and "tell me more" signals.
4. Teach in plain language first, as the participant guide now does, and offer Dorst's terms as optional depth for those who want it.
5. Name the handoff between the two diamonds, at the hackathon and again at project formation (details below).
6. Give steps 8 and 9 real assignments (details below).
7. Rename pods and teams so each name says what the group is for (details below).

This keeps the tooling already built while lowering the barrier that confused participants.

## Three changes for the next cycle

### Name the handoff between the two diamonds

In Cycle 3 the handoff happened twice without being named: at the hackathon, when pods moved from frames to probes, and at project formation (weeks 6–7), when new teams began a fresh round of research without a clear link to what the pod had found. Name it at both moments.

- **Hackathon morning.** At frame lock-in, show a "you are here" slide: the Double Diamond with the first diamond complete. Say plainly that the problem is now chosen and the work moves from understanding it to exploring solutions.
- **A handoff packet before project formation.** Each pod writes up its problem situation, paradox, themes, three to five frames, links to the evidence, and candidate problem owners. The Triangulator export already produces most of this (`problem-situation.md`, themes), so it is assembly rather than new work.
- **Project teams start from the packet.** Their research can still go deeper on their own users, but it starts from the frame and stakeholder the pod named: "test our frame with the stakeholder we named" comes before open-ended audience research. The project research guide should open by pointing to the packet.
- **Bridge the vocabulary.** Add a short table to the project guide translating the earlier terms into the design-thinking terms used afterwards: themes → insights, frame → "How might we," field map → stakeholders and personas.

### Give steps 8 and 9 real assignments

Keep each to one page, in the team repo, presented at an event that already exists. Both can be AI-assisted, for example drafting the change map or summarising the retro.

**Step 8: adoption plan** (around week 10, mid-build, or presented at Meet the Projects)

- **The owner.** A real person or organisation, plus evidence of interest such as a reply or a meeting.
- **A change map.** Who would need to do what differently (the owner's staff, users, partners), what it costs them and what they gain. Apply Dorst's test: drop anything that asks someone to change a lot for little in return.
- **Two paths.** A quick win that works with the organisations as they are, and a longer-term path that needs them to change.
- **Lighter option.** If a separate assignment feels heavy, make this an "Adoption" section in the PRD teams already write.

**Step 9: hand it on** (at the summit)

- **One summit slide.** A frame or lesson that applies beyond this project, and who else could use it.
- **A handoff README.** Status, open next steps and contacts. Projects stay in the repository as open source rather than passing to organisers, so this README is the real handoff: it is what a future team reads before picking the project up. This pairs with the GitHub 2.0: The Handoff workshop.
- **A short retro.** What turned out wrong about the frame.
- **For organisers.** Organisers don't take on the projects, but they can point each new cohort to past project repos, READMEs and retros. Together they become ready-made archaeology for the next cycle on a related topic.

### Rename pods and teams

Participants treated the pod as the team they would keep, and the split into project teams "took people aback." The Scaffolding glossary (Nov 19) raises two possible pairings: **Pod, with Tribe above it**, following the Spotify model's usage, or **Team, with Track or Research Group above it**.

**Recommendation: Team, with Research Group above it.**

- **It fixes the confusion.** "Research group" signals a group that researches a problem together and isn't your final team; "team" means what it sounds like.
- **It's plain language.** "Team" is a word participants already use and can put on a CV. "Pod" and "tribe" both need explaining, and "tribe" carries cultural baggage some participants may find off-putting.
- **The Labs has wavered on "pod" before.** An organiser said Cycle 1 avoided it, partly because grant applications used the word differently.
- **"Track" would collide.** It already names hackathon streams (the Newcomer and Pod Sprint tracks).

**Alternative considered: keep "pod" for the team.** In wider use, a pod is a small cross-functional team that builds something together, which is what the Labs' project teams are. Moving the word down to the team would use it correctly and keep a name the Labs already owns, with Research Group (or Tribe) above it.

- **For it:** the word would finally match its common meaning, and the Labs' identity built around "pods" carries over.
- **Against it:** "pod" would flip meaning, so returning participants would hear the same word for a different group, and newcomers would still need it explained. "Team" needs no explanation at all.

If the Labs wants to keep the word, this is the better way to keep it: one consistent meaning, at the level where it fits.

Assuming OLOS is rebuilt, the rename can run through the whole system rather than the labels alone. Related names would change with it: the Poderator role (for example, Research Group Guide) and "Pod Squad" for the organisers supporting a group.

Whatever the names, make the sequence clear from day one: you research the problem as a larger group, then split into teams of three to five after the hackathon. An interviewee's own fix was to make this "very clear from the very beginning."

## The nine steps, mapped to the Build Cycle

Dorst's model has nine steps. The first four open up the situation, step 5 finds the themes, and the last four turn frames into action. The table draws on the Scaffolding pod's [crosswalk](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/blob/main/research/record-dorst-and-related-practices.md) for the Double Diamond phase and how closely it fits, and on its Cycle 3 timeline and the Triangulator for where each step happened.

One adaptation matters: Dorst starts with a client who hands over a problem, but the Labs start with field evidence and no client. So pods build themes from evidence in the Triangulator *before* naming a paradox, and the problem owner is discovered later rather than assumed. The participant guide numbers its steps in this Labs order, so its step numbers differ from Dorst's below.

| # | Step | What you do | Double Diamond (fit) | Where it happened in Cycle 3 | Matching workshop |
| --- | --- | --- | --- | --- | --- |
| 1 | Archaeology | Dig into the problem's history and past fixes, including paths not taken. Note the hard limits. | Discover (moderate) | Sensemaking Sprint (quick pass); Assignment 1 fieldwork on "previous attempts"; Triangulator *Classify* | Ask Better Questions (Rachael Wooden) |
| 2 | Paradox | Ask what makes this hard. Write the deadlock as a chain of "because" statements. "Because… Because… Because…", ending in the contradiction. | Discover to Define (partial) | Meet the Pods ("design paradoxes"); Triangulator *Deepen*, stage 5 | Ask Better Questions: AI-Powered Problem Framing (Rachael Wooden) |
| 3 | Context | Study the inner circle of stakeholders already involved. | Discover (good) | Assignment 1 fieldwork; Triangulator *Deepen*, stage 4 (inner circle) | Design Thinking / Intro to UX Design (Eric Meniefield) |
| 4 | Field | Widen out to everyone who might touch the problem or a solution. | Discover (good) | Assignment 1 fieldwork; Triangulator *Deepen*, stage 4 (wider field) | No clear match yet |
| 5 | Themes | Find the deep values many players share. | Define (good) | Sensemaking Sprint; Triangulator ladder; Meet the Pods clustering (partly) | Design Thinking (Evan Katz); Design Thinking for Healthcare 2 (Courtney Irwin) |
| 6 | Frames | "If the situation is approached as if it is…, then…" "Everyone assumes this is a problem about \_\_\_. What if it's actually about \_\_\_?" | Define (good) | Assignment 2; hackathon frame lock-in | How Might We (Helen Glover) |
| 7 | Futures | Explore what each frame could lead to, and test it. | Develop (good) | Hackathon probes; field testing (week 5); build and iterate (weeks 9–11) | From Problem to Prototype (Victoria Harrison); Vibe Coding (Lilah Schaeffer, AJ Bubb) |
| 8 | Transformation | Work out what people and organisations would need to change to make it real. | Deliver (partial) | Little in Cycle 3; problem-owner discovery is planned in the Triangulator spec | Customer Discovery (Randall Noval); Building Out Loud (Javi Calderon, Suzie Zhang) |
| 9 | Integration | Draw lessons and spot new opportunities across the network. | After Deliver (partial) | Summit showcase (partly) | GitHub 2.0: The Handoff (Aaron McKeever); Storytelling (John Cornwell) |

Workshop matches are based on titles and recording names in the workshop inventory; check them against the actual content. Most of these sessions still need their deck or recording archived.

The steps are not strictly linear. Designers loop back to reframing whenever a solution feels weak; Dorst calls this coevolution of problem and solution.

**Example: Department store declining sales**

- **Archaeology.** Cameras weren't allowed in fitting rooms for privacy reasons, so tags were the only defence, and professional thieves tore them off and hid them. The store responded by moving fitting rooms away from the exits, cutting their number and size, and removing shelves, chairs and mirrors. A quick check still turned up dozens of tags hidden in ceilings and partitions.
- **A second chain from the field.** Online shopping was hitting sales, so staff chased away people they suspected of browsing, which made the experience worse. Dorst calls the bigger question here, what in-store shopping is for in the internet age, "not a paradox (yet), but an open question."
- **Paradox**
  - Because fitting rooms give customers privacy and a good shopping experience, they make good hiding places.
  - Because they're good hiding places, they become where theft happens.
  - Because theft happens there, the store adds measures that make them less comfortable.
  - Because they're less comfortable, they no longer give a good shopping experience.
- **Themes (two).**
  - *Choosing clothes is socially sensitive,* yet the store made people do it alone in an isolated booth.
  - *Value comes from the live shopping experience,* the one thing a physical store can offer that online can't.
- **Frame.** Combining the two themes gives the frame: shopping as a fulfilling social experience, with the fitting room as a catwalk.

  Dorst writes every frame in the same format: *"If the problem situation is approached as if it is…, then…"* Here: if the store's declining sales are approached as a problem of creating a more fulfilling social shopping experience, then the fitting rooms should become a catwalk.

## Notes for organisers

Both "What to Expect" docs are written for the July–October 2026 cycle, which ended with the showcase on 13 October. Before reusing them for the next cohort, these items need attention.

**What to Expect: The Build Cycle**

- **Flag: four key dates were never set.** Solution proposal, solution voting, project registration and rehearsal still say "Exact date TBD", even though the cycle has finished. Anyone relying on this doc never got firm dates for these milestones. Set them before the next cycle's docs go out.
- All week dates (Week 0 on 07/13 to the showcase on 10/13) are past and need replacing.
- The "What this Cycle is about" section is out of date: it describes the topic of a completed cycle. Replace it with the next cycle's topic.
- Typo: "sensemarking sprint" should be "sensemaking sprint."

**What to Expect: From Pod to Hackathon**

- Past dates: joining closes "August 15th," Assignment 1 is due August 10 and Assignment 2 is due August 14.
- The GitHub links point to the Effort-vs-Impact repo; new pods will need their own.
- The folder name is cut short in one place ("Individual-frame-hypothes").
- Stray asterisks show up around the paradox examples and the formula, which suggests formatting was lost in a copy-paste.
- The note "(link is now fixed)" can go.
- The Sydney Opera House example doesn't match the book. In Dorst's case, protesters climbed the sails to unroll banners, and the building's heritage listing meant it couldn't be altered; fencing off the podium was the proposed fix. The doc describes graffiti on the tiles.

**Still to do**

In order: the first two are decisions the rest depend on, then how the method is presented, then the materials, and last, putting the participant guide where people will find it.

- [ ] Agree a point of view on modules: they are the Labs' learning offer for everyone, and the Build Cycle is optional, hands-on intensive practice for those who want it.
  - People learn at four points, not one: before a cycle (preparing, or deciding whether to join), during one, after one (going deeper, keeping a project going, becoming a mentor) and without ever joining. The steering committee says the cycle "shouldn't be always on," and what the Labs offers between cycles is still open.
  - The module catalog prototype is a first pass, and its next version should reflect this. Today its `stage` field only has `prep`, `during` and `after`, all measured against a cycle, which treats the cycle as the centre. Modules should stand on their own, with the cycle as one place to practise them intensively.
  - Let people find modules by their situation and their learner stage (the catalog already has `learner_stage`: dependent, interested, involved, self-directed) rather than by cycle week.
  - The framing steps themselves could become modules. Someone outside a cycle could use "Map the players" on a problem at work, while a cycle participant uses the same module at step 2. Each step in the participant guide would then point to a module rather than a one-off workshop.
  - This also supports the pathway a past participant proposed at the Oct 3 retreat, "participant → practitioner → contributor → leader," since modules after a cycle include training modules for those who go on to deliver them.
- [ ] Align on a shared taxonomy and vocabulary across pods.
  - The module catalog's tags and metadata are Scaffolding's input to a taxonomy shared with Wayfinding and Front Door, "not the final word." Who decides when a recurring tag becomes an agreed term is still open.
  - The same alignment covers the words participants hear: pod and team, the step names in the participant guide, and Dorst's terms. Most entries in the Scaffolding glossary still have no plain-language definition.
  - Build on what already exists. Front Door's [`participants` data dictionary](https://github.com/wash-TheUpskillingLabs/c04-frontdoor/blob/main/research/participant-scope/participants-data-dictionary.md) defines each OLOS field from the code, with a confidence rating, and its dimensions mind map names activities, participant roles and locations. Scaffolding's glossary covers the words participants hear, and the module catalog has the tags.
  - Start with the terms people found unclear. Scaffolding's [confusion log](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/blob/main/research/record-confusion-log.md) lists them: pod and team, sprint, group day, the role of design thinking, "the judgment the Cycle is for," and "scaffolding" itself.
  - Decide one owner and one place for agreed terms, so the participant guide, the "What to Expect" docs, the rebuilt OLOS and the module catalog all use the same words.
- [ ] Align on framing Dorst within the Double Diamond. Present frame creation as the problem-framing half of human-centred design and design thinking, the Labs' overarching theme: it fills the first diamond of the Double Diamond (Empathise and Define in the d.school model) before ideation starts. Dorst makes the same point: design thinking is often reduced to generating solutions, when the expert skill is framing. Link past design-thinking workshops from each step (see the "Matching workshop" column above).
- [ ] Show Dorst's own formats (the "because" chain and "If approached as if…, then…") in the "What to Expect" docs next to the Labs' adaptations (value, failure, trap; "Everyone assumes… what if…"). The adaptations are good and can stay; showing both lets anyone who reads the book see the link.
- [ ] Link the Triangulator from both "What to Expect" docs and name the parts of it that cover steps 3–5: the Deepen workbook's stage 4 maps the players (inner circle for context, wider field for field), and the evidence ladder (Evidence → Pattern → Theme) builds the themes. Neither doc mentions these steps today, so a reader jumps from paradox to frame.
- [ ] Find or commission a workshop for step 4 (field). None in the inventory matches yet.
- [ ] Link the [participant guide](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/blob/main/prototypes/participant-guide/README.md) and its "Where am I, and what's next?" table from the dashboard's main view, both "What to Expect" docs and the Triangulator. Participants weren't familiar with Dorst and often didn't know what came next, and in Cycle 3 the guides sat below the fold in the Library tab; one participant finished the cycle without finding them.

**Sources**

- Kees Dorst, [*Frame Innovation: Create New Thinking by Design*](https://drive.google.com/file/d/1wYSUO7iVzHK23Zctpy4IBNjusCJljXkL/view?usp=drivesdk), MIT Press, 2015 (chapters 1–4) (shared Drive; access may be restricted)
- [What to Expect: The Build Cycle](https://docs.google.com/document/d/1CfZn9DL5Qf2bUnVr9EALKjB72vyj5EKdPzrrICHUqiY/edit) (shared Drive; backup copy: [research/c03-civics-elections/guides/what-to-expect-the-build-cycle.md](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/blob/main/research/c03-civics-elections/guides/what-to-expect-the-build-cycle.md))
- [What to Expect: From Pod to Hackathon](https://docs.google.com/document/d/1pMlYL-VD3jjw_oiurrxtWu81ub-MLWGUa4gWdEp3uqg/edit) (shared Drive; backup copy: [research/c03-civics-elections/guides/what-to-expect-from-pod-to-hackathon.md](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/blob/main/research/c03-civics-elections/guides/what-to-expect-from-pod-to-hackathon.md))
- [The Triangulator README](https://github.com/TheUpskillingLabs/sensemaking) and its product spec (`docs/PRD-triangulator-finalization.md`), TheUpskillingLabs on GitHub
- [Pod Sprint Hackathon plan](https://github.com/TheUpskillingLabs/hack-sprint) (`POD_SPRINT_HACKATHON.md`)
- upskilling-labs-workshop-inventory (Google Sheet), for the workshop matches
- Scaffolding pod research, [c04-scaffolding](https://github.com/wash-TheUpskillingLabs/c04-scaffolding/tree/main/research): the crosswalk record (`record-dorst-and-related-practices.md`), the confusion log, and interviews dated Nov 5–13, 2026
