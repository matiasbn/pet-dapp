module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    "truffle/globals": true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'truffle',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "no-use-before-define": 0
  },
};
