---
title: git check-ignore
date: 20250614
...

# git check-ignore

To debug gitignore/exclude files, git has a plumbing command `check-ignore`.

Use `git check-ignore <pathname>` to query if a file is ignored by git.

The command also takes a `-v`/`--verbose` argument that shows where and why a
file is ignored.

```shell
$ git check-ignore --verbose node_modules

.gitignore:1:node_modules/      node_modules/
```

This means that `node_modules` is being ignored by the exclude pattern
`node_modules/` on line 1 of the local file `.gitignore`.
