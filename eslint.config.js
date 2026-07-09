const { defineConfig, globalIgnores } = require('eslint/config');

const globals = require('globals');
const prettier = require('eslint-plugin-prettier');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    extends: compat.extends('eslint:recommended', 'prettier'),

    languageOptions: {
      globals: {
        ...globals.commonjs,
        ...globals.node,
        ...globals.shelljs,
        ...globals.worker,
        ...globals.jest,
      },
    },

    plugins: {
      prettier,
    },

    rules: {
      camelias: 0,
      'compat/compat': 0,
      'generator-star-spacing': 0,
      'linebreak-style': 0,
      'no-bitwise': 0,
      'no-use-before-define': 1,
      'no-nested-ternary': 0,
      'no-spaced-func': 2,
      'no-this-before-super': 0,
      'no-var': 2,
      'no-undef': 'error',
      'operator-linebreak': 0,
      'object-curly-newline': 0,
      '@typescript-eslint/no-this-alias': ['off'],
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-invalid-this': 0,
    },
  },
  globalIgnores([
    '**/public',
    '**/lib',
    '**/es',
    '**/.history',
    '**/.vs',
    '**/.swc',
    '**/docs',
    '**/develop',
    '**/*.d.ts',
    '**/*.log',
    '**/*.zip',
    '**/*.txt',
    '**/*.7z',
    '**/*.min.js',
    '**/rollup.config-*.cjs',
  ]),
]);
