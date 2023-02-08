const { fileGlobalHeader } = require('./template.config');

const folderPath = '.';

const contentFileContent = `${fileGlobalHeader}
module.exports = function (api) {
  api.cache(true);
  return {
    babelrcRoots: ['.', 'packages/*'],
  };
};
`;

const contentFile = {
  folderPath: `${folderPath}`,
  fileName: 'babel.config.js',
  coverFile: true,
  fileContent: contentFileContent,
};

module.exports = { contentFile };
