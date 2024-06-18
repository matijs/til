---
title: Using Vim for long commands in bash
date: 20240426
...

# Using vim for long command-line commands in bash

If a command-line command becomes too long or unwieldy, hitting
<kbd>Ctrl-x</kbd> <kbd>Ctrl-e</kbd> will open `$EDITOR` with the command. The
command can be edited in the comfort of the editor and upon saving and closing
the editor it will be executed by bash.

For example:

```shell
$ podman <C-x> <C-e>
# editor opens
```
Type the full command, save and exit the editor, the editor will close, the
command will be echoed and executed. For example:

```shell
$ podman
podman run \
  --rm \
  --detach \
  --name nginx \
  --publish 8080:80 \
  --volume "$(pwd):/usr/share/nginx" \
  nginx:latest
aa38e28946807dc0ce0f5d8097fd94816d8a3ef50cd4faa7f248fadc06d65010
$ 
```
