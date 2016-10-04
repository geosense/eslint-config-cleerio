module.exports = {
  extends: [
    'eslint-config-cleerio/rules/best-practices',
    'eslint-config-cleerio/rules/errors',
    'eslint-config-cleerio/rules/legacy',
    'eslint-config-cleerio/rules/node',
    'eslint-config-cleerio/rules/style',
    'eslint-config-cleerio/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
