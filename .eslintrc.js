module.exports = {
  parser: "babel-eslint",
  extends: 'airbnb-base',
  rules: {
    "indent": ["error", 2],
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'guard-for-in': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    customElements: true,
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  }
};
