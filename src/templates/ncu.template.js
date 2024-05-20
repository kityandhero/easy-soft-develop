const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/ncu';

const configFileContent = `${fileGlobalHeader}
module.exports = {};
`;

const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.js',
  coverFile: false,
  fileContent: configFileContent,
};

const contentFileContent = `${fileGlobalHeader}
const mainContent = \`${fileGlobalHeader}
const { generalConfig } = require('./develop/config/ncu/config');

module.exports = generalConfig;
\`;

const packageContent = \`${fileGlobalHeader}
const { generalConfig } = require("../../develop/config/ncu/config");

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

module.exports = {
  configFile,
  contentFile,
};
