---
title: __filename and __dirname new style
date: 2025-05-28
---

# `__filename` and `__dirname` new style

Node.js 20 deprecated `__filename` and `__dirname`, many old scripts still rely
on these two builtins existing.

It's possible to make them available again like so.

```javascript
import { fileURLToPath } from 'node:url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = fileURLToPath(new URL('.', import.meta.url));
```
