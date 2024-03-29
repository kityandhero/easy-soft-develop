const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/stylelint';

const configFileContent = `${fileGlobalHeader}
module.exports = {
  generalConfig: {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-css-modules',
    ],
    plugins: ['stylelint-declaration-block-no-ignored-properties', 'stylelint-order'],
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
    customSyntax: 'postcss-less',
    rules: {
      'function-url-quotes': 'always',
      'selector-attribute-quotes': 'always',
      'font-family-no-missing-generic-family-keyword': null,
      'plugin/declaration-block-no-ignored-properties': true,
      'selector-type-no-unknown': null,
      'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
      'no-descending-specificity': null,
      'selector-class-pattern': null,
      'value-no-vendor-prefix': null,
      'color-function-notation': null,
      'function-no-unknown': null,
    },
  },
};
`;

const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.js',
  coverFile: true,
  fileContent: configFileContent,
};

const contentFileContent = `${fileGlobalHeader}
const mainContent = \`${fileGlobalHeader}
const { generalConfig } = require('./develop/config/stylelint/config');

module.exports = generalConfig;
\`;

const packageContent = \`${fileGlobalHeader}
const { generalConfig } = require('../../develop/config/stylelint/config');

module.exports = generalConfig;
\`;

module.exports = {
  mainContent,
  packageContent,
};
`;

const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.js',
  coverFile: true,
  fileContent: contentFileContent,
};

const ignoreFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'ignore.content.js',
  coverFile: false,
  fileContent: `${fileGlobalHeader}
  const content = \`# ignore dir
**/coverage/**
**/docs/**
\`;

  module.exports = {
    content,
  };
  `,
};

module.exports = { ignoreFile, contentFile, configFile };
