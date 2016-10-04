# eslint-config-cleerio

[![npm version](https://badge.fury.io/js/eslint-config-cleerio.svg)](http://badge.fury.io/js/eslint-config-cleerio)

This package provides Cleerio's .eslintrc as an extensible shared config. It was forked from eslint-config-airbnb.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-cleerio

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-cleerio eslint-plugin-react eslint`
2. add `"extends": "cleerio"` to your .eslintrc

### eslint-config-cleerio/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-cleerio eslint`
2. add `"extends": "cleerio/base"` to your .eslintrc

### eslint-config-cleerio/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-cleerio eslint`
2. add `"extends": "cleerio/legacy"` to your .eslintrc

See [Cleerio's Javascript styleguide](https://github.com/cleerio/eslint-config-cleerio) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
