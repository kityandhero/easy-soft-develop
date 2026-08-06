import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import js from '@eslint/js';
import pluginPromise from 'eslint-plugin-promise';
import unicorn from 'eslint-plugin-unicorn';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginImport from 'eslint-plugin-import';

const ignores = [
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
];

export default defineConfig([
  globalIgnores(ignores),
  js.configs.recommended,
  unicorn.configs.recommended,
  pluginPromise.configs['flat/recommended'],
  {
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
      unicorn,
      'simple-import-sort': simpleImportSort,
      import: eslintPluginImport,
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
      'unicorn/consistent-boolean-name': 0,
      'unicorn/name-replacements': 0,
      'unicorn/no-declarations-before-early-exit': 0,
    },
  },
  eslintPluginPrettierRecommended,
]);
