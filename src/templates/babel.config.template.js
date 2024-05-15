const { fileGlobalHeader } = require('./template.config');

const folderPath = '.';

const contentFileContent = `${fileGlobalHeader}
function buildConfig(api) {
  api.cache(true);

  return {
    babelrcRoots: ['.', 'packages/*'],
  };
}

module.exports = buildConfig;
`;

const contentFile = {
  folderPath: `${folderPath}`,
  fileName: 'babel.config.js',
  coverFile: true,
  fileContent: contentFileContent,
};

module.exports = { contentFile };
