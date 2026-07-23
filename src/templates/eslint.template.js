const {
  getDevelopSubPathVersionNcuConfig,
} = require('../config/develop.subPath.version.ncu');
const { fileGlobalHeader } = require('./template.config');
const { isArray } = require('../tools/meta');

const folderPath = './develop/config/eslint';

const contentFileContent = `${fileGlobalHeader}
const mainContent = \`${fileGlobalHeader}
import { defineConfig } from 'eslint/config';

import { configCollection } from './develop/config/eslint/config/index.mjs';

export default defineConfig(configCollection);
\`;

const packageContent = \`${fileGlobalHeader}
import { defineConfig } from 'eslint/config';

import { configCollection } from '../../develop/config/eslint/config/index.mjs';

export default defineConfig(configCollection);
\`;

module.exports = {
  mainContent,
  packageContent,
};`;

const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.js',
  coverFile: true,
  fileContent: contentFileContent,
};

const configFileContent = `${fileGlobalHeader}
import babelParser from '@babel/eslint-parser';
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';
import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import pluginPromise from 'eslint-plugin-promise';

import { rules } from './items/rules/index.mjs';
import { parserJsOptions, parserTsOptions } from './items/parser/index.mjs';
import { pluginCollection } from './items/plugins/index.mjs';
import { extendCollection } from './items/extends/index.mjs';
import { settings } from './items/settings/index.mjs';
import { ignoreCollection } from './items/ignores/index.mjs';

const configJs = {
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
  },
  plugins: {
    ...pluginCollection,
  },
  rules: rules,
  settings: settings,
  ignores: [...ignoreCollection],
};

const configTs = {
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
  },
  plugins: {
    ...pluginCollection,
  },
  rules: rules,
  settings: settings,
  ignores: [...ignoreCollection],
};

export const configCollection = [
  globalIgnores(ignoreCollection),
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  unicorn.configs.recommended,
  pluginPromise.configs['flat/recommended'],
  configJs,
  configTs,
  eslintPluginPrettierRecommended,
];
`;

const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: configFileContent,
};

const ruleEmbedFileContent = `${fileGlobalHeader}
const coreRules = {
  camelias: 0,
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
  'sort-imports': 0,
  'jsx-quotes': ['error', 'prefer-double'],
};

const reactRules = {
  'react/sort-comp': 0,
  'react/jsx-uses-react': 2,
  'react/react-in-jsx-scope': 'off',
  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  'react/jsx-wrap-multilines': 0,
  'react/prop-types': 0,
  'react/forbid-prop-types': 0,
  'react/jsx-one-expression-per-line': 0,
  'react/jsx-props-no-spreading': 0,
};

const jsxRules = {
  'jsx-a11y/no-noninteractive-element-interactions': 0,
  'jsx-a11y/click-events-have-key-events': 0,
  'jsx-a11y/no-static-element-interactions': 0,
  'jsx-a11y/anchor-is-valid': 0,
};

const typescriptRules = {
  '@typescript-eslint/no-this-alias': ['off'],
  '@typescript-eslint/no-unused-vars': 0,
  '@typescript-eslint/no-invalid-this': 0,
};

const unicornRules = {
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        kebabCase: true,
        camelCase: true,
        pascalCase: true,
        snakeCase: true,
      },
    },
  ],
  'unicorn/no-null': 0,
  'unicorn/no-this-assignment': 0,
};

const compatRules = {
  'compat/compat': 0,
};

const importRules = {
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
  'import/order': 0,
};

const simpleImportSortRules = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        [
          '^(?!taro-fast-)(?!antd-management-fast-)(?!easy-soft-)[a-zA-Z0-9]',
          '^@(?!/)',
        ],
        ['^(?!@/)(?!easy-soft-)(?!.)'],
        ['^easy-soft-'],
        ['^(?!@/)(?!antd-management-fast-)(?!.)'],
        ['^antd-management-fast-'],
        ['^(?!@/)(?!taro-fast-)(?!.)'],
        ['^taro-fast-'],
        ['^((@/).*|$)'],
        [String.raw\`^\u0000\`],
        [String.raw\`^\\.\\.(?!/?$)\`, String.raw\`^\\.\\./?$\`],
        [
          String.raw\`^\\./(?=.*/)(?!/?$)\`,
          String.raw\`^\\.(?!/?$)\`,
          String.raw\`^\\./?$\`,
        ],
        [
          String.raw\`^.+\\.s?less$\`,
          String.raw\`^.+\\.s?scss$\`,
          String.raw\`^.+\\.s?css$\`,
        ],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};

export const rules = {
  ...coreRules,
  ...reactRules,
  ...jsxRules,
  ...typescriptRules,
  ...unicornRules,
  ...compatRules,
  ...importRules,
  ...simpleImportSortRules,
};
`;

const ruleEmbedFile = {
  folderPath: `${folderPath}/config/items/rules`,
  fileName: 'embed.mjs',
  coverFile: true,
  fileContent: ruleEmbedFileContent,
};

const ruleCustomFileContent = `${fileGlobalHeader}
const customRules = {};

export const rules = {
  ...customRules,
};
`;

const ruleCustomFile = {
  folderPath: `${folderPath}/config/items/rules`,
  fileName: 'custom.mjs',
  coverFile: false,
  fileContent: ruleCustomFileContent,
};

const ruleFileContent = `${fileGlobalHeader}
import { rules as embedRules } from './embed.mjs';
import { rules as customRules } from './custom.mjs';

export const rules = {
  ...embedRules,
  ...customRules,
};
`;

const ruleFile = {
  folderPath: `${folderPath}/config/items/rules`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: ruleFileContent,
};

const developSubPathVersionNcuConfig = getDevelopSubPathVersionNcuConfig();

const { paths = [] } = {
  paths: [],
  ...developSubPathVersionNcuConfig,
};

const settingEmbedFileContent = `${fileGlobalHeader}
const items = {
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
      directory: ['./tsconfig.json'${
        !isArray(paths)
          ? ''
          : paths.length === 0
            ? ''
            : `, ${paths
                .map((o) => {
                  return `'./${o}/*/tsconfig.json'`;
                })
                .join(',')}`
      }],
    },
  },
};

export const settings = {
  ...items,
};
`;

const settingEmbedFile = {
  folderPath: `${folderPath}/config/items/settings`,
  fileName: 'embed.mjs',
  coverFile: true,
  fileContent: settingEmbedFileContent,
};

const settingCustomFileContent = `${fileGlobalHeader}
const items = {};

export const settings = {
  ...items,
};
`;

const settingCustomFile = {
  folderPath: `${folderPath}/config/items/settings`,
  fileName: 'custom.mjs',
  coverFile: false,
  fileContent: settingCustomFileContent,
};

const settingFileContent = `${fileGlobalHeader}
import { settings as embedSettings } from './embed.mjs';
import { settings as customSettings } from './custom.mjs';

export const settings = {
  ...embedSettings,
  ...customSettings,
};
`;

const settingFile = {
  folderPath: `${folderPath}/config/items/settings`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: settingFileContent,
};

const extendEmbedFileContent = `${fileGlobalHeader}
export const extendCollection = [];
`;

const extendEmbedFile = {
  folderPath: `${folderPath}/config/items/extends`,
  fileName: 'embed.mjs',
  coverFile: true,
  fileContent: extendEmbedFileContent,
};

const extendCustomFileContent = `${fileGlobalHeader}
export const extendCollection = [];
`;

const extendCustomFile = {
  folderPath: `${folderPath}/config/items/extends`,
  fileName: 'custom.mjs',
  coverFile: false,
  fileContent: extendCustomFileContent,
};

const extendFileContent = `${fileGlobalHeader}
import { extendCollection as extendEmbedPlugins } from './embed.mjs';
import { extendCollection as extendCustomPlugins } from './custom.mjs';

export const extendCollection = [...extendEmbedPlugins, ...extendCustomPlugins];
`;

const extendFile = {
  folderPath: `${folderPath}/config/items/extends`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: extendFileContent,
};

const pluginEmbedFileContent = `${fileGlobalHeader}
import { fixupPluginRules } from '@eslint/compat';
import reactPlugin from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginImport from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

export const pluginCollection = {
  react: fixupPluginRules(reactPlugin),
  unicorn,
  'simple-import-sort': simpleImportSort,
  import: eslintPluginImport,
  prettier,
};
`;

const pluginEmbedFile = {
  folderPath: `${folderPath}/config/items/plugins`,
  fileName: 'embed.mjs',
  coverFile: true,
  fileContent: pluginEmbedFileContent,
};

const pluginCustomFileContent = `${fileGlobalHeader}
export const pluginCollection = {};
`;

const pluginCustomFile = {
  folderPath: `${folderPath}/config/items/plugins`,
  fileName: 'custom.mjs',
  coverFile: false,
  fileContent: pluginCustomFileContent,
};

const pluginFileContent = `${fileGlobalHeader}
import { pluginCollection as embedPlugins } from './embed.mjs';
import { pluginCollection as customPlugins } from './custom.mjs';

export const pluginCollection = { ...embedPlugins, ...customPlugins };
`;

const pluginFile = {
  folderPath: `${folderPath}/config/items/plugins`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: pluginFileContent,
};

const parserEmbedFileContent = `${fileGlobalHeader}
export const parserJsOptions = {
  requireConfigFile: false,
  babelOptions: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      '@babel/preset-env',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
      ['@babel/plugin-transform-class-properties', { loose: true }],
    ],
  },
};

export const parserTsOptions = {
  ecmaFeatures: {
    jsx: true,
  },
};
`;

const parserEmbedFile = {
  folderPath: `${folderPath}/config/items/parser`,
  fileName: 'embed.mjs',
  coverFile: true,
  fileContent: parserEmbedFileContent,
};

const parserCustomFileContent = `${fileGlobalHeader}
export const parserJsOptions = {};

export const parserTsOptions = {};
`;

const parserCustomFile = {
  folderPath: `${folderPath}/config/items/parser`,
  fileName: 'custom.mjs',
  coverFile: false,
  fileContent: parserCustomFileContent,
};

const parserFileContent = `${fileGlobalHeader}
import {
  parserJsOptions as embedParserJsOptions,
  parserTsOptions as embedParserTsOptions,
} from './embed.mjs';
import {
  parserJsOptions as customParserJsOptions,
  parserTsOptions as customParserTsOptions,
} from './custom.mjs';

export const parserJsOptions = {
  ...embedParserJsOptions,
  ...customParserJsOptions,
};

export const parserTsOptions = {
  ...embedParserTsOptions,
  ...customParserTsOptions,
};
`;

const parserFile = {
  folderPath: `${folderPath}/config/items/parser`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: parserFileContent,
};

const ignoreEmbedFileContent = `${fileGlobalHeader}
export const ignoreCollection = [
  '**/public',
  '**/lib',
  '**/es',
  '**/docs',
  '**/coverage',
  '**/.history',
  '**/.vs',
  '**/.swc',
  '**/docs',
  '**/*.d.ts',
  '**/*.log',
  '**/*.zip',
  '**/*.txt',
  '**/*.7z',
  '**/*.min.js',
  '**/rollup.config-*.cjs',
  '**/.ncurc.js',
  '**/.prettierrc.js',
  '**/.stylelintrc.js',
  '**/.lintstagedrc',
];
`;

const ignoreEmbedFile = {
  folderPath: `${folderPath}/config/items/ignores`,
  fileName: 'embed.mjs',
  coverFile: true,
  fileContent: ignoreEmbedFileContent,
};

const ignoreCustomFileContent = `${fileGlobalHeader}
export const ignoreCollection = [];
`;

const ignoreCustomFile = {
  folderPath: `${folderPath}/config/items/ignores`,
  fileName: 'custom.mjs',
  coverFile: false,
  fileContent: ignoreCustomFileContent,
};

const ignoreFileContent = `${fileGlobalHeader}
import { ignoreCollection as ignoreEmbedPlugins } from './embed.mjs';
import { ignoreCollection as ignoreCustomPlugins } from './custom.mjs';

export const ignoreCollection = [...ignoreEmbedPlugins, ...ignoreCustomPlugins];
`;

const ignoreFile = {
  folderPath: `${folderPath}/config/items/ignores`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: ignoreFileContent,
};

module.exports = {
  contentFile,
  ruleEmbedFile,
  ruleCustomFile,
  ruleFile,
  configFile,
  extendEmbedFile,
  extendCustomFile,
  extendFile,
  pluginEmbedFile,
  pluginCustomFile,
  pluginFile,
  parserEmbedFile,
  parserCustomFile,
  parserFile,
  settingEmbedFile,
  settingCustomFile,
  settingFile,
  ignoreFile,
  ignoreEmbedFile,
  ignoreCustomFile,
};
