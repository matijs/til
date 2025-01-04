---
title: Removing unused bootmanager options
date: 20250104
...

# Removing unused bootmanager options

Run `efibootmgr` to get a listing of all boot options.

To remove a specific option, run:

```shell
sudo efibootmgr --bootnum <number> --delete-bootnum
```
