---
title: Non-capturing groups in JavaScript regular expressions
date: 2026-05-04
---

# Non-capturing groups in JavaScript regular expressions

A capturing group `(...)` matches a subpattern and can be backreferenced or used
in match results.

A non-capturing group `(?:...)` also matches a subpattern but can not be
backreferenced or used in match results.

Grouping allow for disjunctions `|` or quantifiers `?, +, * {n}, {n,}, {n,m}`.

It probably does not hurt to use a capturing group, but using a non-capturing
group to make it explicit that the backreference will not be used feels cleaner.
