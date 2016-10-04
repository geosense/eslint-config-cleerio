module.exports = {
  extends: [
    'eslint-config-cleerio/base',
    'eslint-config-cleerio/rules/strict',
    'eslint-config-cleerio/rules/react',
  ].map(require.resolve),
  rules: {}
};
