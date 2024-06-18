---
title: Special characters in Vim
date: 20240616
...

# Special characters in Vim

To enter accented (diacritic) or otherwise special characters in Vim use
`Ctrl+k` followed by two other characters. The character under the cursor will
first change to a `?` and Vim will try to combine the next two key strokes to
create a single character if possible. Checkout `:help digraphs-use` for more
information.

## A few  examples

Some of the combinations are quite obvious, some a bit more obscure.

- e with an accute (é): `e'`
- e with a grave (è): `e!` (or `` e` ``)
- e with a circumflex (ê): `e>` (or the more obvious  `e^`)
- a with two overdots, or umlaut or diaeresis, (ä): `a:` (or `a"`)
- n with a tilde (ñ): `n?` (`n~` also works, but `a~` for `ã` does not while
  `a?` does)
- c with a cedilla (ç):  `c,`
- horizontal ellipsis (…): `,.`
- vertical ellipsis (⋮): `:3`
- plus-minus sign (±): `+-`
- em dash (—): `M-`
- en dash (–): `N-`
- opening guillemet («): `<<`
- closing guillemet (»): `>>`
- opening single guillemet (‹): `<1`
- closing single guillemet (›): `>1`
- inverted question mark (¿): `?I`
- euro sign (€): `=e` (or `Eu`)

Mind that the order of keystrokes does sometimes matter. `+-` results in a
plus-minus sign but `-+` is a minus-plus sign (∓), which is apparently a chess
thing.

For lots more about digraphs and accented characters in vim, checkout `:help
digraph`.
