---
title: Corepack prepare
date: 2024-04-24
---

# Corepack prepare

I keep forgetting how to upgrade to the latest version of a package manager
using corepack. So here goes:

```shell
$ corepack prepare pnpm@latest --activate
```

The `prepare` command is what I keep forgetting and that's because it is not
documented by corepack itself somehow!

The only commands mention when invoking `core-pack --help` are:

`cache clean`, `disable`, `enable`, `install`, `pack`, `up`, and `use`.
`prepare` is nowhere to be found.
