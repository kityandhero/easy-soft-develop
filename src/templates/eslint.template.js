const {
  getDevelopSubPathVersionNcuConfig,
} = require('../config/develop.subPath.version.ncu');
const { fileGlobalHeader } = require('./template.config');
const { isArray } = require('../tools/meta');

const folderPath = './develop/config/eslint';

const ignoreFileContent = `${fileGlobalHeader}
const content = \`#
**/public
**/lib
**/es
**/docs
**/coverage
**/.history
**/.vs
**/.swc
**/docs

*.d.ts
*.log
*.zip
*.txt
*.7z
*.min.js
rollup.config-*.cjs

.eslintrc.js
.ncurc.js
.prettierrc.js
.stylelintrc.js
.lintstagedrc
\`;

module.exports = {
  content,
};
`;

const ignoreFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'ignore.content.js',
  coverFile: false,
  fileContent: ignoreFileContent,
};

const contentFileContent = `${fileGlobalHeader}
const mainContent = \`${fileGlobalHeader}
const { generalConfig } = require('./develop/config/eslint/config');

module.exports = generalConfig;
\`;

const packageContent = \`${fileGlobalHeader}
const { generalConfig } = require('../../develop/config/eslint/config');

module.exports = generalConfig;
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
const { rules } = require('./items/rules');
const { parserJsOptions, parserTsOptions } = require('./items/parser');
const { pluginCollection } = require('./items/plugins');
const { extendCollection } = require('./items/extends');
const { settings } = require('./items/settings');

module.exports = {
  generalConfig: {
    extends: [
      ...extendCollection,
    ],
    env: {
      es6: true,
      browser: true,
      commonjs: true,
      jest: true,
      worker: true,
      shelljs: true,
      node: true,
    },
    plugins: [...pluginCollection],
    parser: '@babel/eslint-parser',
    parserOptions: parserJsOptions,
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: parserTsOptions,
      },
    ],
    rules: rules,
    settings: settings,
  },
};
`;

const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.js',
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
        ['^\\\\u0000'],
        ['^\\\\.\\\\.(?!/?$)', '^\\\\.\\\\./?$'],
        ['^\\\\./(?=.*/)(?!/?$)', '^\\\\.(?!/?$)', '^\\\\./?$'],
        ['^.+\\\\.s?less$', '^.+\\\\.s?scss$', '^.+\\\\.s?css$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};

module.exports = {
  rules: {
    ...coreRules,
    ...reactRules,
    ...jsxRules,
    ...typescriptRules,
    ...unicornRules,
    ...compatRules,
    ...importRules,
    ...simpleImportSortRules,
  },
};
`;

const ruleEmbedFile = {
  folderPath: `${folderPath}/config/items/rules`,
  fileName: 'embed.js',
  coverFile: true,
  fileContent: ruleEmbedFileContent,
};

const ruleCustomFileContent = `${fileGlobalHeader}
const customRules = {};

module.exports = {
  rules: {
    ...customRules,
  },
};
`;

const ruleCustomFile = {
  folderPath: `${folderPath}/config/items/rules`,
  fileName: 'custom.js',
  coverFile: false,
  fileContent: ruleCustomFileContent,
};

const ruleFileContent = `${fileGlobalHeader}
const { rules: embedRules } = require('./embed');
const { rules: customRules } = require('./custom');

module.exports = {
  rules: {
    ...embedRules,
    ...customRules,
  },
};
`;

const ruleFile = {
  folderPath: `${folderPath}/config/items/rules`,
  fileName: 'index.js',
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

module.exports = {
  settings: {
    ...items,
  },
};
`;

const settingEmbedFile = {
  folderPath: `${folderPath}/config/items/settings`,
  fileName: 'embed.js',
  coverFile: true,
  fileContent: settingEmbedFileContent,
};

const settingCustomFileContent = `${fileGlobalHeader}
const items = {};

module.exports = {
  settings: {
    ...items,
  },
};
`;

const settingCustomFile = {
  folderPath: `${folderPath}/config/items/settings`,
  fileName: 'custom.js',
  coverFile: false,
  fileContent: settingCustomFileContent,
};

const settingFileContent = `${fileGlobalHeader}
const { settings: embedSettings } = require('./embed');
const { settings: customSettings } = require('./custom');

module.exports = {
  settings: {
    ...embedSettings,
    ...customSettings,
  },
};
`;

const settingFile = {
  folderPath: `${folderPath}/config/items/settings`,
  fileName: 'index.js',
  coverFile: true,
  fileContent: settingFileContent,
};

const extendEmbedFileContent = `${fileGlobalHeader}
const extendCollection = [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:unicorn/recommended',
  'plugin:promise/recommended',
  'prettier',
];

module.exports = {
  extendCollection: [...extendCollection],
};
`;

const extendEmbedFile = {
  folderPath: `${folderPath}/config/items/extends`,
  fileName: 'embed.js',
  coverFile: true,
  fileContent: extendEmbedFileContent,
};

const extendCustomFileContent = `${fileGlobalHeader}
const extendCollection = [];

module.exports = {
  extendCollection: [...extendCollection],
};
`;

const extendCustomFile = {
  folderPath: `${folderPath}/config/items/extends`,
  fileName: 'custom.js',
  coverFile: false,
  fileContent: extendCustomFileContent,
};

const extendFileContent = `${fileGlobalHeader}
const { extendCollection: extendEmbedPlugins } = require('./embed');
const { extendCollection: extendCustomPlugins } = require('./custom');

module.exports = {
  extendCollection: [...extendEmbedPlugins, ...extendCustomPlugins],
};
`;

const extendFile = {
  folderPath: `${folderPath}/config/items/extends`,
  fileName: 'index.js',
  coverFile: true,
  fileContent: extendFileContent,
};

const pluginEmbedFileContent = `${fileGlobalHeader}
const plugins = [
  'unicorn',
  'simple-import-sort',
  'import',
  'prettier',
];

module.exports = {
  pluginCollection: [...plugins],
};
`;

const pluginEmbedFile = {
  folderPath: `${folderPath}/config/items/plugins`,
  fileName: 'embed.js',
  coverFile: true,
  fileContent: pluginEmbedFileContent,
};

const pluginCustomFileContent = `${fileGlobalHeader}
const plugins = [];

module.exports = {
  pluginCollection: [...plugins],
};
`;

const pluginCustomFile = {
  folderPath: `${folderPath}/config/items/plugins`,
  fileName: 'custom.js',
  coverFile: false,
  fileContent: pluginCustomFileContent,
};

const pluginFileContent = `${fileGlobalHeader}
const { pluginCollection: embedPlugins } = require('./embed');
const { pluginCollection: customPlugins } = require('./custom');

module.exports = {
  pluginCollection: [...embedPlugins, ...customPlugins],
};
`;

const pluginFile = {
  folderPath: `${folderPath}/config/items/plugins`,
  fileName: 'index.js',
  coverFile: true,
  fileContent: pluginFileContent,
};

const parserEmbedFileContent = `${fileGlobalHeader}
const parserJsOptions = {
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
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-transform-class-properties', { loose: true }],
    ],
  },
};

const parserTsOptions = {
  ecmaFeatures: {
    jsx: true,
  },
};

module.exports = {
  parserJsOptions: { ...parserJsOptions },
  parserTsOptions: { ...parserTsOptions },
};
`;

const parserEmbedFile = {
  folderPath: `${folderPath}/config/items/parser`,
  fileName: 'embed.js',
  coverFile: true,
  fileContent: parserEmbedFileContent,
};

const parserCustomFileContent = `${fileGlobalHeader}
const parserJsOptions = {};

const parserTsOptions = {};

module.exports = {
  parserJsOptions: { ...parserJsOptions },
  parserTsOptions: { ...parserTsOptions },
};
`;

const parserCustomFile = {
  folderPath: `${folderPath}/config/items/parser`,
  fileName: 'custom.js',
  coverFile: false,
  fileContent: parserCustomFileContent,
};

const parserFileContent = `${fileGlobalHeader}
const {
  parserJsOptions: embedParserJsOptions,
  parserTsOptions: embedParserTsOptions,
} = require('./embed');
const {
  parserJsOptions: customParserJsOptions,
  parserTsOptions: customParserTsOptions,
} = require('./custom');

module.exports = {
  parserJsOptions: { ...embedParserJsOptions, ...customParserJsOptions },
  parserTsOptions: { ...embedParserTsOptions, ...customParserTsOptions },
};
`;

const parserFile = {
  folderPath: `${folderPath}/config/items/parser`,
  fileName: 'index.js',
  coverFile: true,
  fileContent: parserFileContent,
};

module.exports = {
  ignoreFile,
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
};
