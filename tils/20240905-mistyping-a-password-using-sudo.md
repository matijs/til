---
title: Mistyping a password using sudo
date: 20240905
...

When you accidentally press a cursor key while entering a password for `sudo`,
you may end up entering a different password than intended.

Because `sudo` does not echo your input, it can be difficult to determine how
many times you need to hit backspace to correct the mistake when this happens.

The best option, therefore, is to discard the input completely. Using `sudo`,
this is as simple as hitting <kbd>ctrl</kbd>-<kbd>u</kbd>. This is ‘`readline`’
for `unix-line-discard` and seems to also work in some terminal emulators.

To visualise what actually happens when you make these kinds of typos, you can
use `read` to see what is echoed when you press a cursor key (prompt added to
make it actually feel like using `sudo`).

```bash
$ read -p "[sudo] enter password for ${USER}: "
```

For the left cursor key, this would show "^[[D". Correcting this typo would
require three backspaces instead of just one. One for the escape sequence `^[`,
one for the control sequence introducer `[`, and one for the `D`.
