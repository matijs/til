---
title: Map capslock to escape on Fedora with Gnome
date: 20240323
...

# Map capslock to escape on Fedora with Gnome

```shell
$ dconf write /org/gnome/desktop/input-sources/xkb-options "['caps:escape']"
```

No need to reboot or login again. This should instantly work.

To read the current mappings:

```shell
$ gsettings get org.gnome.desktop.input-sources xkb-options
```
