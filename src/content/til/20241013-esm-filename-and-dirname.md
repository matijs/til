---
title: __filename and __dirname in Node.js using ESM
date: 2024-10-13
---

# `__filename` and `__dirname` in Node.js using ESM

Both `__filename` and `__dirname` don't exist when using ESM in Node.js but a
good solution is to recreate them so that other code can stay pretty much the
same.

```js
import { fileURLToPath } from 'node:url';
import {
```
