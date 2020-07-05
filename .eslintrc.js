// cannot use import
const pJson = require('./package.json');

const { alias } = pJson;
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
  settings: {
    'import/resolver': {
      parcel: {
        rootDir: 'public',
      },
      alias: {
        map: Object.entries(alias),
        extensions: ['.ts', '.js', '.jsx', '.json', '.png'],
      },
    },
  },
};
