---
title: Unicode characters in vim
date: 20250210
...

# Unicode characters in vim

Inserting a Unicode character by using a codepoint in vim is done using
<kbd>ctrl</kbd>+<kbd>v</kbd> followed by:

- A lowercase `u` followed by a four-digit hex code.
- An uppercase `U` followed by an eight-digit hex code.

Pro tip: No need for extra zeroes in the eight-digit code, just hit space and
you're good to go.

## Examples

- EURO SIGN U+20AC (€): <kbd>ctrl</kbd>+<kbd>v</kbd> followed by `u20ac`
- GRINNING FACE WITH STAR EYES U+1F929 (🤩): <kbd>ctrl</kbd>+<kbd>v</kbd>
  followed by `U0001f929` or `U1f929` followed by space.
