---
title: git restore in one just command
date: 2024-10-07
---

# git restore in just one command

I used to restore staged files in two steps.

```bash
$ git restore --staged path/to/file
$ git restore path/to/file
```

Turns out that's only necessary if the file was renamed or moved. If only the
contents of the file changed. It can be combined into one command.

```bash
$ git restore --staged --worktree path/to/file
```

Is this worth an alias or not.
