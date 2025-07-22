---
title: Bash previous command arguments
date: 2025-07-22
---

# Bash previous command arguments

Sometimes muscle memory is annoying. Consider the following example.

```
git pr create --title "A descriptive title" --body ""
```

This command should have been run with **gh** and not with **git**. Having to
re-type the entire command is tedious but thankfully Bash provides a handy dandy
shortcut:

```
gh !*
```

The `!*` itself is shorthand for `!!:*`. The whole thing expands to **all the
arguments** (`*`) of the **previous command** (`!!`).

To use the argument of a different command that you know the history number of,
use `!<history number>:*` instead. For example `!123:*`.
