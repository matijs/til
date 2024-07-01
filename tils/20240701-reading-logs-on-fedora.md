---
title: Reading logs on Fedora
date: 20240701
...

# Reading logs on Fedora

To read the last five minutes of logs, use this:

```shell
$ journalctl -b --since=-5m
```

The `-b` means the current boot (session) and the `--since` argument tells
journalctl to only show the last 5 minutes in case you're not interesed in all
the log entries since boot.
