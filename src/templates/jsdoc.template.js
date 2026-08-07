import { fileBuilderHeader } from './template.config.js';

const folderPath = './develop/config/jsdoc';

const configFileContent = `${fileBuilderHeader}
module.exports = {
  generalConfig: {
    tags: {
      allowUnknownTags: false,
      dictionaries: ['jsdoc', 'closure'],
    },
    source: {
      include: './src',
    },
    plugins: ['plugins/markdown'],
    opts: {
      template: 'node_modules/docdash',
      encoding: 'utf8',
      destination: 'docs/',
      recurse: true,
      verbose: true,
    },
    templates: {
      cleverLinks: false,
      monospaceLinks: false,
    },
  },
};
`;

export const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.js',
  coverFile: false,
  fileContent: configFileContent,
};

const contentFileContent = `${fileBuilderHeader}
const packageContent = \`${fileBuilderHeader}
/* eslint-disable unicorn/prefer-module */

const { generalConfig } = require('../../develop/config/jsdoc/config');

module.exports = generalConfig;
\`;

export default { packageContent };
`;

export const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.mjs',
  coverFile: true,
  fileContent: contentFileContent,
};
