export namespace contentFile {
  export let folderPath: string;
  export let fileName: string;
  export let coverFile: boolean;
  export { contentFileContent as fileContent };
}
export namespace ruleEmbedFile {
  let folderPath_1: string;
  export { folderPath_1 as folderPath };
  let fileName_1: string;
  export { fileName_1 as fileName };
  let coverFile_1: boolean;
  export { coverFile_1 as coverFile };
  export { ruleEmbedFileContent as fileContent };
}
export namespace ruleCustomFile {
  let folderPath_2: string;
  export { folderPath_2 as folderPath };
  let fileName_2: string;
  export { fileName_2 as fileName };
  let coverFile_2: boolean;
  export { coverFile_2 as coverFile };
  export { ruleCustomFileContent as fileContent };
}
export namespace ruleFile {
  let folderPath_3: string;
  export { folderPath_3 as folderPath };
  let fileName_3: string;
  export { fileName_3 as fileName };
  let coverFile_3: boolean;
  export { coverFile_3 as coverFile };
  export { ruleFileContent as fileContent };
}
export namespace configFile {
  let folderPath_4: string;
  export { folderPath_4 as folderPath };
  let fileName_4: string;
  export { fileName_4 as fileName };
  let coverFile_4: boolean;
  export { coverFile_4 as coverFile };
  export { configFileContent as fileContent };
}
export namespace extendEmbedFile {
  let folderPath_5: string;
  export { folderPath_5 as folderPath };
  let fileName_5: string;
  export { fileName_5 as fileName };
  let coverFile_5: boolean;
  export { coverFile_5 as coverFile };
  export { extendEmbedFileContent as fileContent };
}
export namespace extendCustomFile {
  let folderPath_6: string;
  export { folderPath_6 as folderPath };
  let fileName_6: string;
  export { fileName_6 as fileName };
  let coverFile_6: boolean;
  export { coverFile_6 as coverFile };
  export { extendCustomFileContent as fileContent };
}
export namespace extendFile {
  let folderPath_7: string;
  export { folderPath_7 as folderPath };
  let fileName_7: string;
  export { fileName_7 as fileName };
  let coverFile_7: boolean;
  export { coverFile_7 as coverFile };
  export { extendFileContent as fileContent };
}
export namespace pluginEmbedFile {
  let folderPath_8: string;
  export { folderPath_8 as folderPath };
  let fileName_8: string;
  export { fileName_8 as fileName };
  let coverFile_8: boolean;
  export { coverFile_8 as coverFile };
  export { pluginEmbedFileContent as fileContent };
}
export namespace pluginCustomFile {
  let folderPath_9: string;
  export { folderPath_9 as folderPath };
  let fileName_9: string;
  export { fileName_9 as fileName };
  let coverFile_9: boolean;
  export { coverFile_9 as coverFile };
  export { pluginCustomFileContent as fileContent };
}
export namespace pluginFile {
  let folderPath_10: string;
  export { folderPath_10 as folderPath };
  let fileName_10: string;
  export { fileName_10 as fileName };
  let coverFile_10: boolean;
  export { coverFile_10 as coverFile };
  export { pluginFileContent as fileContent };
}
export namespace parserEmbedFile {
  let folderPath_11: string;
  export { folderPath_11 as folderPath };
  let fileName_11: string;
  export { fileName_11 as fileName };
  let coverFile_11: boolean;
  export { coverFile_11 as coverFile };
  export { parserEmbedFileContent as fileContent };
}
export namespace parserCustomFile {
  let folderPath_12: string;
  export { folderPath_12 as folderPath };
  let fileName_12: string;
  export { fileName_12 as fileName };
  let coverFile_12: boolean;
  export { coverFile_12 as coverFile };
  export { parserCustomFileContent as fileContent };
}
export namespace parserFile {
  let folderPath_13: string;
  export { folderPath_13 as folderPath };
  let fileName_13: string;
  export { fileName_13 as fileName };
  let coverFile_13: boolean;
  export { coverFile_13 as coverFile };
  export { parserFileContent as fileContent };
}
export namespace settingEmbedFile {
  let folderPath_14: string;
  export { folderPath_14 as folderPath };
  let fileName_14: string;
  export { fileName_14 as fileName };
  let coverFile_14: boolean;
  export { coverFile_14 as coverFile };
  export { settingEmbedFileContent as fileContent };
}
export namespace settingCustomFile {
  let folderPath_15: string;
  export { folderPath_15 as folderPath };
  let fileName_15: string;
  export { fileName_15 as fileName };
  let coverFile_15: boolean;
  export { coverFile_15 as coverFile };
  export { settingCustomFileContent as fileContent };
}
export namespace settingFile {
  let folderPath_16: string;
  export { folderPath_16 as folderPath };
  let fileName_16: string;
  export { fileName_16 as fileName };
  let coverFile_16: boolean;
  export { coverFile_16 as coverFile };
  export { settingFileContent as fileContent };
}
export namespace ignoreFile {
  let folderPath_17: string;
  export { folderPath_17 as folderPath };
  let fileName_17: string;
  export { fileName_17 as fileName };
  let coverFile_17: boolean;
  export { coverFile_17 as coverFile };
  export { ignoreFileContent as fileContent };
}
export namespace ignoreEmbedFile {
  let folderPath_18: string;
  export { folderPath_18 as folderPath };
  let fileName_18: string;
  export { fileName_18 as fileName };
  let coverFile_18: boolean;
  export { coverFile_18 as coverFile };
  export { ignoreEmbedFileContent as fileContent };
}
export namespace ignoreCustomFile {
  let folderPath_19: string;
  export { folderPath_19 as folderPath };
  let fileName_19: string;
  export { fileName_19 as fileName };
  let coverFile_19: boolean;
  export { coverFile_19 as coverFile };
  export { ignoreCustomFileContent as fileContent };
}
declare const contentFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst mainContent = `/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport { defineConfig } from 'eslint/config';\n\nconst { configCollection } = require('./develop/config/eslint/config');\n\nexport default defineConfig(configCollection);\n`;\n\nconst packageContent = `/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport { defineConfig } from 'eslint/config';\n\nconst { configCollection } = require('../../develop/config/eslint/config');\n\nexport default defineConfig(configCollection);\n`;\n\nmodule.exports = {\n  mainContent,\n  packageContent,\n};";
declare const ruleEmbedFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst coreRules = {\n  camelias: 0,\n  'no-bitwise': 0,\n  'linebreak-style': 0,\n  'generator-star-spacing': 0,\n  'operator-linebreak': 0,\n  'object-curly-newline': 0,\n  'no-use-before-define': 0,\n  'no-nested-ternary': 0,\n  'no-spaced-func': 2,\n  'no-this-before-super': 0,\n  'no-var': 1,\n  'sort-imports': 0,\n  'jsx-quotes': ['error', 'prefer-double'],\n};\n\nconst reactRules = {\n  'react/sort-comp': 0,\n  'react/jsx-uses-react': 2,\n  'react/react-in-jsx-scope': 'off',\n  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],\n  'react/jsx-wrap-multilines': 0,\n  'react/prop-types': 0,\n  'react/forbid-prop-types': 0,\n  'react/jsx-one-expression-per-line': 0,\n  'react/jsx-props-no-spreading': 0,\n};\n\nconst jsxRules = {\n  'jsx-a11y/no-noninteractive-element-interactions': 0,\n  'jsx-a11y/click-events-have-key-events': 0,\n  'jsx-a11y/no-static-element-interactions': 0,\n  'jsx-a11y/anchor-is-valid': 0,\n};\n\nconst typescriptRules = {\n  '@typescript-eslint/no-this-alias': ['off'],\n  '@typescript-eslint/no-unused-vars': 0,\n  '@typescript-eslint/no-invalid-this': 0,\n};\n\nconst unicornRules = {\n  'unicorn/filename-case': [\n    'error',\n    {\n      cases: {\n        kebabCase: true,\n        camelCase: true,\n        pascalCase: true,\n        snakeCase: true,\n      },\n    },\n  ],\n  'unicorn/no-null': 0,\n  'unicorn/no-this-assignment': 0,\n};\n\nconst compatRules = {\n  'compat/compat': 0,\n};\n\nconst importRules = {\n  'import/export': 'error',\n  'import/first': 'error',\n  'import/named': 'error',\n  'import/newline-after-import': 'error',\n  'import/no-absolute-path': 'error',\n  // 开启将会极大增加检测执行时间\n  'import/no-cycle': 0,\n  'import/no-deprecated': 'error',\n  'import/no-duplicates': 'error',\n  'import/no-unresolved': 'error',\n  'import/no-useless-path-segments': 'error',\n  'import/no-unused-modules': 'error',\n  'import/order': 0,\n};\n\nconst simpleImportSortRules = {\n  'simple-import-sort/imports': [\n    'error',\n    {\n      groups: [\n        [\n          '^(?!taro-fast-)(?!antd-management-fast-)(?!easy-soft-)[a-zA-Z0-9]',\n          '^@(?!/)',\n        ],\n        ['^(?!@/)(?!easy-soft-)(?!.)'],\n        ['^easy-soft-'],\n        ['^(?!@/)(?!antd-management-fast-)(?!.)'],\n        ['^antd-management-fast-'],\n        ['^(?!@/)(?!taro-fast-)(?!.)'],\n        ['^taro-fast-'],\n        ['^((@/).*|$)'],\n        [String.raw`^\0`],\n        [String.raw`^\\.\\.(?!/?$)`, String.raw`^\\.\\./?$`],\n        [\n          String.raw`^\\./(?=.*/)(?!/?$)`,\n          String.raw`^\\.(?!/?$)`,\n          String.raw`^\\./?$`,\n        ],\n        [\n          String.raw`^.+\\.s?less$`,\n          String.raw`^.+\\.s?scss$`,\n          String.raw`^.+\\.s?css$`,\n        ],\n      ],\n    },\n  ],\n  'simple-import-sort/exports': 'error',\n};\n\nexport const rules = {\n  ...coreRules,\n  ...reactRules,\n  ...jsxRules,\n  ...typescriptRules,\n  ...unicornRules,\n  ...compatRules,\n  ...importRules,\n  ...simpleImportSortRules,\n};\n";
declare const ruleCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst customRules = {};\n\nexport const rules = {\n  ...customRules,\n};\n';
declare const ruleFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport { rules as embedRules } from './embed.mjs';\nimport { rules as customRules } from './custom.mjs';\n\nexport const rules = {\n  ...embedRules,\n  ...customRules,\n};\n";
declare const configFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport babelParser from '@babel/eslint-parser';\nimport typescriptParser from '@typescript-eslint/parser';\nimport globals from 'globals';\nimport js from '@eslint/js';\nimport { globalIgnores } from 'eslint/config';\nimport eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';\nimport reactPlugin from 'eslint-plugin-react';\nimport unicorn from 'eslint-plugin-unicorn';\nimport pluginPromise from 'eslint-plugin-promise';\n\nimport { rules } from './items/rules/index.mjs';\nimport { parserJsOptions, parserTsOptions } from './items/parser/index.mjs';\nimport { pluginCollection } from './items/plugins/index.mjs';\nimport { extendCollection } from './items/extends/index.mjs';\nimport { settings } from './items/settings/index.mjs';\nimport { ignoreCollection } from './items/ignores/index.mjs';\n\nconst configJs = {\n  files: ['**/*.js', '**/*.jsx'],\n  extends: [...extendCollection],\n  languageOptions: {\n    globals: {\n      ...globals.es2015,\n      ...globals.browser,\n      ...globals.commonjs,\n      ...globals.jest,\n      ...globals.worker,\n      ...globals.node,\n    },\n    parser: babelParser,\n    parserOptions: parserJsOptions,\n  },\n  plugins: {\n    ...pluginCollection,\n  },\n  rules: rules,\n  settings: settings,\n  ignores: [...ignoreCollection],\n};\n\nconst configTs = {\n  files: ['**/*.ts', '**/*.tsx'],\n  extends: [...extendCollection],\n  languageOptions: {\n    globals: {\n      ...globals.es2015,\n      ...globals.browser,\n      ...globals.commonjs,\n      ...globals.jest,\n      ...globals.worker,\n      ...globals.node,\n    },\n    parser: typescriptParser,\n    parserOptions: parserTsOptions,\n  },\n  plugins: {\n    ...pluginCollection,\n  },\n  rules: rules,\n  settings: settings,\n  ignores: [...ignoreCollection],\n};\n\nexport const configCollection = [\n  globalIgnores(ignoreCollection),\n  js.configs.recommended,\n  reactPlugin.configs.flat.recommended,\n  reactPlugin.configs.flat['jsx-runtime'],\n  unicorn.configs.recommended,\n  pluginPromise.configs['flat/recommended'],\n  configJs,\n  configTs,\n  eslintPluginPrettierRecommended,\n];\n";
declare const extendEmbedFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nexport const extendCollection = [];\n';
declare const extendCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nexport const extendCollection = [];\n';
declare const extendFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport { extendCollection as extendEmbedPlugins } from './embed.mjs';\nimport { extendCollection as extendCustomPlugins } from './custom.mjs';\n\nexport const extendCollection = [...extendEmbedPlugins, ...extendCustomPlugins];\n";
declare const pluginEmbedFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport { fixupPluginRules } from '@eslint/compat';\nimport reactPlugin from 'eslint-plugin-react';\nimport unicorn from 'eslint-plugin-unicorn';\nimport simpleImportSort from 'eslint-plugin-simple-import-sort';\nimport eslintPluginImport from 'eslint-plugin-import';\nimport prettier from 'eslint-plugin-prettier';\n\nexport const pluginCollection = {\n  react: fixupPluginRules(reactPlugin),\n  unicorn,\n  'simple-import-sort': simpleImportSort,\n  import: eslintPluginImport,\n  prettier,\n};\n";
declare const pluginCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nexport const pluginCollection = {};\n';
declare const pluginFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport { pluginCollection as embedPlugins } from './embed.mjs';\nimport { pluginCollection as customPlugins } from './custom.mjs';\n\nexport const pluginCollection = { ...embedPlugins, ...customPlugins };\n";
declare const parserEmbedFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nexport const parserJsOptions = {\n  requireConfigFile: false,\n  babelOptions: {\n    presets: [\n      [\n        '@babel/preset-react',\n        {\n          runtime: 'automatic',\n        },\n      ],\n      '@babel/preset-env',\n    ],\n    plugins: [\n      ['@babel/plugin-proposal-decorators', { version: 'legacy' }],\n      ['@babel/plugin-transform-class-properties', { loose: true }],\n    ],\n  },\n};\n\nexport const parserTsOptions = {\n  ecmaFeatures: {\n    jsx: true,\n  },\n};\n";
declare const parserCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nexport const parserJsOptions = {};\n\nexport const parserTsOptions = {};\n';
declare const parserFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport {\n  parserJsOptions as embedParserJsOptions,\n  parserTsOptions as embedParserTsOptions,\n} from './embed.mjs';\nimport {\n  parserJsOptions as customParserJsOptions,\n  parserTsOptions as customParserTsOptions,\n} from './custom.mjs';\n\nexport const parserJsOptions = {\n  ...embedParserJsOptions,\n  ...customParserJsOptions,\n};\n\nexport const parserTsOptions = {\n  ...embedParserTsOptions,\n  ...customParserTsOptions,\n};\n";
declare const settingEmbedFileContent: string;
declare const settingCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst items = {};\n\nexport const settings = {\n  ...items,\n};\n';
declare const settingFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport { settings as embedSettings } from './embed.mjs';\nimport { settings as customSettings } from './custom.mjs';\n\nexport const settings = {\n  ...embedSettings,\n  ...customSettings,\n};\n";
declare const ignoreFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nimport { ignoreCollection as ignoreEmbedPlugins } from './embed.mjs';\nimport { ignoreCollection as ignoreCustomPlugins } from './custom.mjs';\n\nexport const ignoreCollection = [...ignoreEmbedPlugins, ...ignoreCustomPlugins];\n";
declare const ignoreEmbedFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nexport const ignoreCollection = [\n  '**/public',\n  '**/lib',\n  '**/es',\n  '**/docs',\n  '**/coverage',\n  '**/.history',\n  '**/.vs',\n  '**/.swc',\n  '**/docs',\n  '**/*.d.ts',\n  '**/*.log',\n  '**/*.zip',\n  '**/*.txt',\n  '**/*.7z',\n  '**/*.min.js',\n  '**/rollup.config-*.cjs',\n  '**/.ncurc.js',\n  '**/.prettierrc.js',\n  '**/.stylelintrc.js',\n  '**/.lintstagedrc',\n];\n";
declare const ignoreCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nexport const ignoreCollection = [];\n';
export {};
