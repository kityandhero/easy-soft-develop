const { fileGlobalHeader } = require('./template.config');

const folderPath = '.';

const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'babel.config.js',
  coverFile: true,
  fileContent: `${fileGlobalHeader}
  module.exports = function (api) {
    api.cache(true);
    return {
      babelrcRoots: ['.', 'packages/*'],
    };
  };
  `,
};
module.exports = { contentFile };
