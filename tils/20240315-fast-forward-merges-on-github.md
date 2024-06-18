---
title: Fast-forward merges on GitHub
date: 20240315
...

# Fast-forward merges on GitHub

Pull requests cannot be fast-forward merged using the GitHub user interface. The
only possible options for merging are a rebase merge, a squash merge, or a merge
commit.

It is however possible to do a fast-forward merge manually as long as branch
protection rules were satisfied.

Create a pull request and wait for status checks to pass and the required number
of approvals. Then do a fast-forward merge of your branch locally and push your
main branch to GitHub.

Without a pull request, this would be rejected, but because all branch
protection rules were met, this push actually works. Your pull request will
automatically be closed and if set up, the remote branch will also be deleted.

