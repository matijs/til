---
title: git pathspecs
date: 20241017
...

# git pathspecs

From the [glossary][1] on pathspec in the git handbook, the term is defined as
follows:

> Pathspecs are used on the command line of "git ls-files", "git ls-tree", "git
> add", "git grep", "git diff", "git checkout", and many other commands to limit
> the scope of operations to some subset of the tree or working tree.

The most straightforward example of a pathspec is something like
`git add path/to/some/file` where `path/to/some/file` is the pathspec. Even the
dot in `git add .` is a pathspec.

Beyond these basic pathspecs there are also special ones. I've been using a
special pathspec —without knowing it exactly for what it was— to exclude
lockfiles from cluttering my git diffs like this:

```shell
$ git diff -- ':(exclude)pnpm-lock.yaml'
```

This long form starts the pathspec with `:` followed by the ‘magic word’
`exclude` between `()`. The remainder of the pathspec is the pattern
`pnpm-lock.yaml` to match against.

It is possible to write this more tersely using the so-called ‘magic signature’
`!`:

```shell
$ git diff -- ':!pnpm-lock.yaml'
```

Because of the `!`, this command still requires quotes. Using the synonymous
‘magic signature’ `^`, the quotes are no longer needed and it becomes even
shorter:

```shell
$ git diff -- :^pnpm-lock.yaml
```

To exclude more than one file from a diff, simply use multiple pathspecs:

```shell
$ git diff -- :^pnpm-lock.yaml :^package.json
```

Or globs:

```shell
$ git diff -- ':(glob,exclude)**/package.json'
```

This example uses the long form again and it combines the two ‘magic words’
`glob` and `exclude`.

[1]:
  https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefpathspecapathspec
