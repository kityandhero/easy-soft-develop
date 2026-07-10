/* eslint-disable no-undef */
/* eslint-disable import/no-commonjs */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable no-useless-escape */

import babelParser from '@babel/eslint-parser';
import typescriptParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { rules } from './items/rules';
import { parserJsOptions, parserTsOptions } from './items/parser';
import { pluginCollection } from './items/plugins';
import { extendCollection } from './items/extends';
import { settings } from './items/settings';
import { ignoreCollection } from './items/ignores';

export const configCollection = [
  {
    files: ['**/*.js', '**/*.jsx'],
    extends: [...extendCollection],
    languageOptions: {
      globals: {
        ...globals.es2015,
        ...globals.browser,
        ...globals.commonjs,
        ...globals.jest,
        ...globals.worker,
        ...globals.node,
      },
      parser: babelParser,
      parserOptions: parserJsOptions,
      plugins: {
        ...extendCollection,
      },
      rules: rules,
      settings: settings,
      ignores: [...ignoreCollection],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [...extendCollection],
    languageOptions: {
      globals: {
        ...globals.es2015,
        ...globals.browser,
        ...globals.commonjs,
        ...globals.jest,
        ...globals.worker,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: parserTsOptions,
      plugins: {
        ...extendCollection,
      },
      rules: rules,
      settings: settings,
      ignores: [...ignoreCollection],
    },
  },
];
