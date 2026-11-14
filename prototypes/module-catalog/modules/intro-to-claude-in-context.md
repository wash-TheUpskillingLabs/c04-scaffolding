---
title: Intro to Claude in context
summary: Give Claude your project before you ask it anything, then ask for one small change at a time and read what it did.
kind: upskilling
status: draft
output_type: workshop
output: One small change to your own project, made with Claude, that you read and accepted line by line.
stage: [during]
scale: [1:1, 1:few]
delivered_by: A participant who has used Claude on a Cycle project
maintained_by: [a C04 maintainer, a builder in residence]
reviewed_by:
reviewed_on:
learning_outcome: Set Claude up with your repo and README, ask for one change, read the diff, and undo it if it's wrong.
timing: [when-stuck, after]
learner_stage: [interested, involved]
support_fades: After the first change, the helper only asks questions. By the third, the participant works alone.
maps_to: Pair programming
time: 45 minutes
prerequisites: [GitHub, from working alone to working as a team]
scope: cohort-specific
validated:
tags: [claude, prompting]
formed_from: [2026-11-05-ask-the-ai-didnt-help, 2026-11-08-claude-rewrote-everything]
private_way_in:
way_out:
thumbnail:
---

Made-up example for the prototype, formed from made-up situation logs. Not reviewed. C04 uses Claude. Whether other coding agents are allowed is open.

## Overview

"Ask the AI" only helps once the AI knows what you're working on. A coding agent like Claude does its best work when it can see your repo and your README first, and when you ask for one small thing at a time. Big requests ("fix the page") get big answers you can't check.

## Exercises

1. Alone: open your project in Claude and ask it to explain the README back to you. Correct anything it got wrong.
2. Alone: ask for one change you could describe in a sentence. Read the diff before you accept it.
3. With others: show a teammate the change and how you'd undo it.

## For facilitators

Sit beside, not in front. If someone asks "what should I ask it," ask them what they're stuck on, and have them type that. Let a big request go wrong once, then show how to get back to the last commit.

## Resources

- Claude Code documentation
- Your Cycle's "Work with Claude" links in the pod README
