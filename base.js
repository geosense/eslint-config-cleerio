module.exports = {
  extends: [
    'eslint-config-cleerio/legacy',
    'eslint-config-cleerio/rules/es6',
  ].map(require.resolve),
  rules: {}
};
