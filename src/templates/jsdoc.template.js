const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/jsdoc';

const configFileContent = `${fileGlobalHeader}
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

const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.js',
  coverFile: false,
  fileContent: configFileContent,
};

const contentFileContent = `${fileGlobalHeader}
const packageContent = \`${fileGlobalHeader}
const { generalConfig } = require("../../develop/config/jsdoc/config");

module.exports = generalConfig;
\`;

module.exports = {
  packageContent,
};
`;

const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.js',
  coverFile: true,
  fileContent: contentFileContent,
};

module.exports = {
  configFile,
  contentFile,
};
