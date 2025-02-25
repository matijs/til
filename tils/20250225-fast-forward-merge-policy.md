---
title: git strict fast-forward merges
date: 20250225
...

# git strict fast-forward merges

```shell
git branch --set-upstream-to=origin/main main
```

This is only really necessary if `main` is not already set up to track
`origin/main`.

```shell
git config set [--global] merge.ff only
```

This is the bread and butter of this merge policy. It enforces a strict
fast-forward-only merge policy.

```shell
git config set [--global] pull.ff only
```


