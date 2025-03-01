---
title: Git known files
date: 20241107
...

# Git known files

From the `git-clean` man page:

> Cleans the working tree by recursively removing files that are not under
> version control, starting from the current directory.

Normally Git clean only removes files that are unknown to Git. So what does it
mean for Git to ‘know’ a file? I could think of the following categories:

1. **Tracked files**: Git actively tracks changes and history of these files.
2. **Staged files**: New files that have been added to the staging area are also
   known.
3. **Ignored files**: Git is also aware of files that you've explicitly told it
   to ignore.
