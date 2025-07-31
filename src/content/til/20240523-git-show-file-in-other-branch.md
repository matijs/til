---
title: How to show the contents of a file in a different branch
date: 2024-05-23
---

# How to show the contents of a file in a different branch

It is possible to checkout a file from another branch so see its contents. But
this is annoying and not actually showing the contents of the file.

```shell
$ git checkout other/branch -- some/file
```

The following command will show the changes to a file in a different branch.
This is better, as in less annoying, but still not showing just the contents.

```shell
$ git show other/branch -- some/file
```

Thankfully it is possible using the following command:

```shell
$ git show other/branch:some/file
```
