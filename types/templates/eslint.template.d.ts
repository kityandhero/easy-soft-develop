export namespace ignoreFile {
  export let folderPath: string;
  export let fileName: string;
  export let coverFile: boolean;
  export { ignoreFileContent as fileContent };
}
export namespace contentFile {
  let folderPath_1: string;
  export { folderPath_1 as folderPath };
  let fileName_1: string;
  export { fileName_1 as fileName };
  let coverFile_1: boolean;
  export { coverFile_1 as coverFile };
  export { contentFileContent as fileContent };
}
export namespace ruleEmbedFile {
  let folderPath_2: string;
  export { folderPath_2 as folderPath };
  let fileName_2: string;
  export { fileName_2 as fileName };
  let coverFile_2: boolean;
  export { coverFile_2 as coverFile };
  export { ruleEmbedFileContent as fileContent };
}
export namespace ruleCustomFile {
  let folderPath_3: string;
  export { folderPath_3 as folderPath };
  let fileName_3: string;
  export { fileName_3 as fileName };
  let coverFile_3: boolean;
  export { coverFile_3 as coverFile };
  export { ruleCustomFileContent as fileContent };
}
export namespace ruleFile {
  let folderPath_4: string;
  export { folderPath_4 as folderPath };
  let fileName_4: string;
  export { fileName_4 as fileName };
  let coverFile_4: boolean;
  export { coverFile_4 as coverFile };
  export { ruleFileContent as fileContent };
}
export namespace configFile {
  let folderPath_5: string;
  export { folderPath_5 as folderPath };
  let fileName_5: string;
  export { fileName_5 as fileName };
  let coverFile_5: boolean;
  export { coverFile_5 as coverFile };
  export { configFileContent as fileContent };
}
export namespace extendEmbedFile {
  let folderPath_6: string;
  export { folderPath_6 as folderPath };
  let fileName_6: string;
  export { fileName_6 as fileName };
  let coverFile_6: boolean;
  export { coverFile_6 as coverFile };
  export { extendEmbedFileContent as fileContent };
}
export namespace extendCustomFile {
  let folderPath_7: string;
  export { folderPath_7 as folderPath };
  let fileName_7: string;
  export { fileName_7 as fileName };
  let coverFile_7: boolean;
  export { coverFile_7 as coverFile };
  export { extendCustomFileContent as fileContent };
}
export namespace extendFile {
  let folderPath_8: string;
  export { folderPath_8 as folderPath };
  let fileName_8: string;
  export { fileName_8 as fileName };
  let coverFile_8: boolean;
  export { coverFile_8 as coverFile };
  export { extendFileContent as fileContent };
}
export namespace pluginEmbedFile {
  let folderPath_9: string;
  export { folderPath_9 as folderPath };
  let fileName_9: string;
  export { fileName_9 as fileName };
  let coverFile_9: boolean;
  export { coverFile_9 as coverFile };
  export { pluginEmbedFileContent as fileContent };
}
export namespace pluginCustomFile {
  let folderPath_10: string;
  export { folderPath_10 as folderPath };
  let fileName_10: string;
  export { fileName_10 as fileName };
  let coverFile_10: boolean;
  export { coverFile_10 as coverFile };
  export { pluginCustomFileContent as fileContent };
}
export namespace pluginFile {
  let folderPath_11: string;
  export { folderPath_11 as folderPath };
  let fileName_11: string;
  export { fileName_11 as fileName };
  let coverFile_11: boolean;
  export { coverFile_11 as coverFile };
  export { pluginFileContent as fileContent };
}
export namespace parserEmbedFile {
  let folderPath_12: string;
  export { folderPath_12 as folderPath };
  let fileName_12: string;
  export { fileName_12 as fileName };
  let coverFile_12: boolean;
  export { coverFile_12 as coverFile };
  export { parserEmbedFileContent as fileContent };
}
export namespace parserCustomFile {
  let folderPath_13: string;
  export { folderPath_13 as folderPath };
  let fileName_13: string;
  export { fileName_13 as fileName };
  let coverFile_13: boolean;
  export { coverFile_13 as coverFile };
  export { parserCustomFileContent as fileContent };
}
export namespace parserFile {
  let folderPath_14: string;
  export { folderPath_14 as folderPath };
  let fileName_14: string;
  export { fileName_14 as fileName };
  let coverFile_14: boolean;
  export { coverFile_14 as coverFile };
  export { parserFileContent as fileContent };
}
export namespace settingEmbedFile {
  let folderPath_15: string;
  export { folderPath_15 as folderPath };
  let fileName_15: string;
  export { fileName_15 as fileName };
  let coverFile_15: boolean;
  export { coverFile_15 as coverFile };
  export { settingEmbedFileContent as fileContent };
}
export namespace settingCustomFile {
  let folderPath_16: string;
  export { folderPath_16 as folderPath };
  let fileName_16: string;
  export { fileName_16 as fileName };
  let coverFile_16: boolean;
  export { coverFile_16 as coverFile };
  export { settingCustomFileContent as fileContent };
}
export namespace settingFile {
  let folderPath_17: string;
  export { folderPath_17 as folderPath };
  let fileName_17: string;
  export { fileName_17 as fileName };
  let coverFile_17: boolean;
  export { coverFile_17 as coverFile };
  export { settingFileContent as fileContent };
}
declare const ignoreFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst content = `#\n**/public\n**/lib\n**/es\n**/docs\n**/coverage\n**/.history\n**/.vs\n**/.swc\n**/docs\n\n*.d.ts\n*.log\n*.zip\n*.txt\n*.7z\n*.min.js\nrollup.config-*.cjs\n\n.eslintrc.js\n.prettierrc.js\n.stylelintrc.js\n.lintstagedrc\n`;\n\nmodule.exports = {\n  content,\n};\n';
declare const contentFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst mainContent = `/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { generalConfig } = require('./develop/config/eslint/config');\n\nmodule.exports = generalConfig;\n`;\n\nconst packageContent = `/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { generalConfig } = require('../../develop/config/eslint/config');\n\nmodule.exports = generalConfig;\n`;\n\nmodule.exports = {\n  mainContent,\n  packageContent,\n};";
declare const ruleEmbedFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst coreRules = {\n  camelias: 0,\n  'no-bitwise': 0,\n  'linebreak-style': 0,\n  'generator-star-spacing': 0,\n  'operator-linebreak': 0,\n  'object-curly-newline': 0,\n  'no-use-before-define': 0,\n  'no-nested-ternary': 0,\n  'no-spaced-func': 2,\n  'no-this-before-super': 0,\n  'no-var': 1,\n  'sort-imports': 0,\n  'jsx-quotes': ['error', 'prefer-double'],\n};\n\nconst reactRules = {\n  'react/sort-comp': 0,\n  'react/jsx-uses-react': 2,\n  'react/react-in-jsx-scope': 'off',\n  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],\n  'react/jsx-wrap-multilines': 0,\n  'react/prop-types': 0,\n  'react/forbid-prop-types': 0,\n  'react/jsx-one-expression-per-line': 0,\n  'react/jsx-props-no-spreading': 0,\n};\n\nconst jsxRules = {\n  'jsx-a11y/no-noninteractive-element-interactions': 0,\n  'jsx-a11y/click-events-have-key-events': 0,\n  'jsx-a11y/no-static-element-interactions': 0,\n  'jsx-a11y/anchor-is-valid': 0,\n};\n\nconst typescriptRules = {\n  '@typescript-eslint/no-this-alias': ['off'],\n  '@typescript-eslint/no-unused-vars': 0,\n  '@typescript-eslint/no-invalid-this': 0,\n};\n\nconst unicornRules = {\n  'unicorn/filename-case': [\n    'error',\n    {\n      cases: {\n        kebabCase: true,\n        camelCase: true,\n        pascalCase: true,\n        snakeCase: true,\n      },\n    },\n  ],\n  'unicorn/no-null': 0,\n  'unicorn/no-this-assignment': 0,\n};\n\nconst compatRules = {\n  'compat/compat': 0,\n};\n\nconst importRules = {\n  'import/export': 'error',\n  'import/first': 'error',\n  'import/named': 'error',\n  'import/newline-after-import': 'error',\n  'import/no-absolute-path': 'error',\n  // 开启将会极大增加检测执行时间\n  'import/no-cycle': 0,\n  'import/no-deprecated': 'error',\n  'import/no-duplicates': 'error',\n  'import/no-unresolved': 'error',\n  'import/no-useless-path-segments': 'error',\n  'import/no-unused-modules': 'error',\n  'import/order': 0,\n};\n\nconst simpleImportSortRules = {\n  'simple-import-sort/imports': [\n    'error',\n    {\n      groups: [\n        [\n          '^(?!taro-fast-)(?!antd-management-fast-)(?!easy-soft-)[a-zA-Z0-9]',\n          '^@(?!/)',\n        ],\n        ['^(?!@/)(?!easy-soft-)(?!.)'],\n        ['^easy-soft-'],\n        ['^(?!@/)(?!antd-management-fast-)(?!.)'],\n        ['^antd-management-fast-'],\n        ['^(?!@/)(?!taro-fast-)(?!.)'],\n        ['^taro-fast-'],\n        ['^((@/).*|$)'],\n        ['^\\\\u0000'],\n        ['^\\\\.\\\\.(?!/?$)', '^\\\\.\\\\./?$'],\n        ['^\\\\./(?=.*/)(?!/?$)', '^\\\\.(?!/?$)', '^\\\\./?$'],\n        ['^.+\\\\.s?less$', '^.+\\\\.s?scss$', '^.+\\\\.s?css$'],\n      ],\n    },\n  ],\n  'simple-import-sort/exports': 'error',\n};\n\nmodule.exports = {\n  rules: {\n    ...coreRules,\n    ...reactRules,\n    ...jsxRules,\n    ...typescriptRules,\n    ...unicornRules,\n    ...compatRules,\n    ...importRules,\n    ...simpleImportSortRules,\n  },\n};\n";
declare const ruleCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst customRules = {};\n\nmodule.exports = {\n  rules: {\n    ...customRules,\n  },\n};\n';
declare const ruleFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { rules: embedRules } = require('./embed');\nconst { rules: customRules } = require('./custom');\n\nmodule.exports = {\n  rules: {\n    ...embedRules,\n    ...customRules,\n  },\n};\n";
declare const configFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { rules } = require('./items/rules');\nconst { parserJsOptions, parserTsOptions } = require('./items/parser');\nconst { pluginCollection } = require('./items/plugins');\nconst { extendCollection } = require('./items/extends');\nconst { settings } = require('./items/settings');\n\nmodule.exports = {\n  generalConfig: {\n    extends: [\n      ...extendCollection,\n    ],\n    env: {\n      es6: true,\n      browser: true,\n      commonjs: true,\n      jest: true,\n      worker: true,\n      shelljs: true,\n      node: true,\n    },\n    plugins: [...pluginCollection],\n    parser: '@babel/eslint-parser',\n    parserOptions: parserJsOptions,\n    overrides: [\n      {\n        files: ['*.ts', '*.tsx'],\n        parser: '@typescript-eslint/parser',\n        parserOptions: parserTsOptions,\n      },\n    ],\n    rules: rules,\n    settings: settings,\n  },\n};\n";
declare const extendEmbedFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst extendCollection = [\n  'eslint:recommended',\n  'plugin:react/recommended',\n  'plugin:unicorn/recommended',\n  'plugin:promise/recommended',\n  'prettier',\n];\n\nmodule.exports = {\n  extendCollection: [...extendCollection],\n};\n";
declare const extendCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst extendCollection = [];\n\nmodule.exports = {\n  extendCollection: [...extendCollection],\n};\n';
declare const extendFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { extendCollection: extendEmbedPlugins } = require('./embed');\nconst { extendCollection: extendCustomPlugins } = require('./custom');\n\nmodule.exports = {\n  extendCollection: [...extendEmbedPlugins, ...extendCustomPlugins],\n};\n";
declare const pluginEmbedFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst plugins = [\n  'unicorn',\n  'simple-import-sort',\n  'import',\n  'prettier',\n];\n\nmodule.exports = {\n  pluginCollection: [...plugins],\n};\n";
declare const pluginCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst plugins = [];\n\nmodule.exports = {\n  pluginCollection: [...plugins],\n};\n';
declare const pluginFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { pluginCollection: embedPlugins } = require('./embed');\nconst { pluginCollection: customPlugins } = require('./custom');\n\nmodule.exports = {\n  pluginCollection: [...embedPlugins, ...customPlugins],\n};\n";
declare const parserEmbedFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst parserJsOptions = {\n  requireConfigFile: false,\n  babelOptions: {\n    presets: [\n      [\n        '@babel/preset-react',\n        {\n          runtime: 'automatic',\n        },\n      ],\n      '@babel/preset-env',\n    ],\n    plugins: [\n      ['@babel/plugin-proposal-decorators', { legacy: true }],\n      ['@babel/plugin-transform-class-properties', { loose: true }],\n    ],\n  },\n};\n\nconst parserTsOptions = {\n  ecmaFeatures: {\n    jsx: true,\n  },\n};\n\nmodule.exports = {\n  parserJsOptions: { ...parserJsOptions },\n  parserTsOptions: { ...parserTsOptions },\n};\n";
declare const parserCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst parserJsOptions = {};\n\nconst parserTsOptions = {};\n\nmodule.exports = {\n  parserJsOptions: { ...parserJsOptions },\n  parserTsOptions: { ...parserTsOptions },\n};\n';
declare const parserFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst {\n  parserJsOptions: embedParserJsOptions,\n  parserTsOptions: embedParserTsOptions,\n} = require('./embed');\nconst {\n  parserJsOptions: customParserJsOptions,\n  parserTsOptions: customParserTsOptions,\n} = require('./custom');\n\nmodule.exports = {\n  parserJsOptions: { ...embedParserJsOptions, ...customParserJsOptions },\n  parserTsOptions: { ...embedParserTsOptions, ...customParserTsOptions },\n};\n";
declare const settingEmbedFileContent: string;
declare const settingCustomFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst items = {};\n\nmodule.exports = {\n  settings: {\n    ...items,\n  },\n};\n';
declare const settingFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { settings: embedSettings } = require('./embed');\nconst { settings: customSettings } = require('./custom');\n\nmodule.exports = {\n  settings: {\n    ...embedSettings,\n    ...customSettings,\n  },\n};\n";
export {};
