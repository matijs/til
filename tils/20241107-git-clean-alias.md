---
title: Git clean alias
date: 20241107
...

# Git clean alias

Quickly clean a Git repo to a pristine state.

```shell
git clean -Xdf -- :/
```

`-X` means that Git will remove stuff that is ignored.

`-d` to remove directories such as `node_modules` as well, includig nested ones in
mono repos.

`-f` is always needed to make `git-clean` do anything useful at all unless the
config variable `clean.requireForce` is set to false.

Pathspec `:/` (meh?) to make it work from anywhere in the repo.

## More info

From the `git-clean` man page:

> Cleans the working tree by recursively removing files that are not under
> version control, starting from the current directory.

Normally Git clean only removes files that are unknown to Git. This means:

1. files that are tracked by Git
2. new files that have been staged
3. files
