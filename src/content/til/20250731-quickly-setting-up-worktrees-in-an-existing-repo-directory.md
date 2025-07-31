---
title: Quickly setting up git worktrees in an existing repo directory
date: 2025-07-31
---

# Quickly setting up git worktrees in an existing repo directory

Additional git worktrees usually live next to the primary working directory.

Checking out a new worktree can be done quickly with:

```sh
git worktree add ../feature
```

This creates a new directory `feature` next to the primary working directory
―usually named after the repository itself. With a lot of worktrees this can get
quite messy really fast.

A quick way around this, without having to use intermediary directories, is
this:

```sh
shopt -s dotglob extglob
mkdir main
mv !(main) main
```

## Breaking these steps down

```sh
shopt -s dotglob extglob
```

This turns on the `dotglob` shell option in Bash to include files that start
with a dot in pathname expansion. It also turns on the `extglob` shell option
that enables additional pattern operators such as `!(pattern|…)`.

```sh
mkdir main
```

This creates a new directory `main`, named after the **main** branch.

```sh
mv !(main) main
```

This moves the contents of the primary working directory into the directory
`main`. It excludes the directory `main` itself using the pattern `!(main)`.
Because `dotglob` is set, directories like `.git/` and files like `.gitignore`
are also moved. All this, without having to create intermediary directories.
