---
title: Map capslock to escape on Windows 11
date: 2026-01-13
---

# Map capslock to escape on Windows 11

```powershell
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Keyboard Layout" /v "Scancode Map" /t REG_BINARY /d 00000000000000000200000001003A0000000000
```

## Breakdown of `00000000000000000200000001003A0000000000`

```
00 00 00 00 ; Header: Version information, (0x00000000)
00 00 00 00 ; Header: Flags, (0x00000000)
02 00 00 00 ; Header: Number of mappings, (0x00000002)
01 00 3A 00 ; Map Capslock (0x003A) to Escape (0x0001)
00 00 00 00 ; Null Terminator (0x00000000)
```
