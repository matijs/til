---
title: ESLint config file extension
date: 2024-08-28
---

# ESLint config file extension

Using `eslint.config.mjs` always means the config file is a module that uses
`import`/`export`.

Using `eslint.config.cjs` always means the config file is a CommonJS file that
uses `module.exports`.

Using `eslint.config.js` is considered a module that uses `import`/`export` when
the nearest `package.json` contains `"type": "module"`.

Using `eslint.config.js`is considered a CommonJS file that uses `module.exports`
when the nearest `package.json` does not contain `"type": "module"`.
