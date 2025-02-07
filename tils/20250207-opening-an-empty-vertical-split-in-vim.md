---
title: Opening an empty vertical split in vim
date: 20250207
...

# Opening an empty vertical split in vim

In short: `:vsplit +enew`

## Explanation

When editing a file in vim, you can execute the `:vsplit` command to create a
vertial split. When using `:vsplit` on its own, the spit will show the same
buffer in both windows.

To open a different file in the split, you can use `:vsplit path/to/other/file`.

However, if you want to open an empty split, you can use `:vsplit +enew`. This
will split the window and execute the `enew` command in the new window, creating
a new, unnamed buffer.

