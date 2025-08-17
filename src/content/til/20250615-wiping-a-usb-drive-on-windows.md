---
title: Wiping a misbehaving USB drive with Windows
date: 2025-06-15
---

# Wiping a misbehaving USB drive with Windows

Examples of misbehaving drives are drives that seem much smaller than their
actual size. For example, a 16GB drive that seems to only be a few hunderd
megabytes in size. Or a drive that refuses to mount or a drive that Windows
claims it can't format.

To wipe the entire drive and make it behave with Windows again, use the
`diskpart` command as an administrative user.

```
diskpart
list disk
select disk <number>
clean
create partition primary
format fs=exfat quick
assign
```
