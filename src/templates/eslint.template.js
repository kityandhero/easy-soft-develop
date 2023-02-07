const ignore = `/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

const content = \`**/public
**/lib
**/es
**/.history
**/.vs
**/.swc

*.d.ts
*.log
*.zip
*.txt
*.7z
*.min.js
rollup.config-*.cjs
\`;

module.exports = {
  content,
};
`;

const content = `/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

const mainContent = \`/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

let { generalConfig } = require('./develop/config/eslint/config');

module.exports = generalConfig;
\`;

const packageContent = \`/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

let { generalConfig } = require('../../develop/config/eslint/config');

module.exports = generalConfig;
\`;

module.exports = {
  mainContent,
  packageContent,
};`;

const config = `/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

let { generalRules, sortRules } = require('../rules');

const rules = {
  ...generalRules,
  ...sortRules,
};

module.exports = {
  generalConfig: {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:unicorn/recommended',
      'plugin:promise/recommended',
      'prettier',
    ],
    env: { es6: true },
    plugins: ['unicorn', 'simple-import-sort', 'import', 'prettier'],
    parser: '@babel/eslint-parser',
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        presets: ['@babel/preset-react'],
      },
    },
    rules: rules,
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['src', 'node_modules'],
        },
        typescript: {
          // always try to resolve types under \`<root>@types\` directory even it doesn't contain any source code, like \`@types/unIst\`
          alwaysTryTypes: true,

          // use an array of glob patterns
          directory: ['./tsconfig.json', './packages/*/tsconfig.json'],
        },
      },
    },
  },
};
`;

const rule = `/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

module.exports = {
  generalRules: {
    camelias: 0,
    'react/sort-comp': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-bitwise': 0,
    'linebreak-style': 0,
    'generator-star-spacing': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'no-use-before-define': 0,
    'no-nested-ternary': 0,
    'no-spaced-func': 2,
    'no-this-before-super': 0,
    'no-var': 1,
    'compat/compat': 0,
    'sort-imports': 0,
    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-invalid-this': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'import/export': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    // 开启将会极大增加检测执行时间
    'import/no-cycle': 0,
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-unused-modules': 'error',
  },
  sortRules: {
    'import/order': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^(?!taro-fast-)(?!easy-soft-)[a-zA-Z0-9]', '^@(?!/)'],
          ['^(?!@/)(?!easy-soft-)(?!.)'],
          ['^easy-soft-'],
          ['^(?!@/)(?!taro-fast-)(?!.)'],
          ['^taro-fast-'],
          ['^((@/).*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?less$', '^.+\\.s?scss$', '^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'sort-imports': 0,
  },
};
`;

module.exports = {
  ignore,
  content,
  rule,
  config,
};
