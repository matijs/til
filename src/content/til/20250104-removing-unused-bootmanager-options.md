---
title: Removing unused bootmanager options
date: 2025-01-04
---

# Removing unused bootmanager options

Run `efibootmgr` to get a listing of all boot options.

To remove a specific option, run:

```shell
sudo efibootmgr --bootnum <number> --delete-bootnum
```
