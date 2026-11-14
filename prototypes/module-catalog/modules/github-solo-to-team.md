---
title: GitHub, from working alone to working as a team
summary: Move from your own copy of the code to a shared repo with branches, pull requests and a team rule for who merges.
kind: upskilling
status: draft
output_type: workshop
output: Your team's repo with one merged pull request from each person and a written rule for who reviews and merges.
stage: [prep, during]
scale: [1:few, 1:cohort/public]
delivered_by: A mentor who uses GitHub at work
maintained_by: [a C04 maintainer, a Poderator]
reviewed_by:
reviewed_on:
learning_outcome: Open a branch, make a pull request, review a teammate's, and merge it, without help.
timing: [before-attempt, when-stuck]
learner_stage: [dependent, interested]
support_fades: The mentor drives the first pull request on screen, the team does the second with the mentor watching, and the third alone.
maps_to: Version control and code review (agile)
time: 60 minutes
prerequisites: [A GitHub account, Connected Claude to GitHub once]
scope: general
validated: GitHub training is validated by the Labs as needed to join the ecosystem.
tags: [github, git, team-setup]
formed_from: [2026-11-02-github-connector-wont-see-repo, 2026-11-04-push-rejected-to-main, 2026-11-06-who-merges]
private_way_in: Try the first pull request in a practice repo of your own before the session. Nobody sees it.
way_out: If you're stuck for more than fifteen minutes, post in your team channel or pair with the mentor. Being stuck here is normal.
thumbnail:
---

Made-up example for the prototype, formed from made-up situation logs. Not reviewed.

## Overview

Most people meet GitHub alone: one person, one copy, pushing straight to main. A team can't work that way, because two people changing the same file at once overwrite each other. A team works through **branches** (a separate line of changes), **pull requests** (asking the team to take your changes) and **review** (someone else reads them first).

Three things trip people up most often:

- The GitHub app for Claude has to be installed on the team's organization, not only on your own account.
- Pushes to main can be blocked on purpose. That's the team protecting the shared copy, not something you broke.
- A pull request nobody merges is as stuck as no pull request. Teams need a rule for who merges.

## Exercises

1. Alone: in a practice repo, make a branch, change one line of the README, open a pull request and merge it yourself.
2. With others: each teammate opens a pull request to the team repo. Review someone else's, leave one comment, and merge it.
3. With others: write your team's rule for who reviews and merges, and put it in the README.

## For facilitators

Ask each person what they expect to happen before each step, then let them do it. Don't take the keyboard. When a push is rejected, ask what the message says before explaining it. Most of the session is waiting while people try, and that's the point.

## Resources

- GitHub's own guide to pull requests
- The team setup notes in your Cycle's dashboard
