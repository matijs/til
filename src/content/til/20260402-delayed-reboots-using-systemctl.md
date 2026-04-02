---
title: Delayed reboots using systemctl
date: 2026-04-02
---

# Delay reboots using systemctl

Delay rebooting relative to now. For example in 10 minutes.

```shell
systemctl reboot --when=+10m
```

At a specific time.

```shell
systemctl reboot --when=21:55
```
