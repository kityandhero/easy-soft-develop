const { isArray } = require('../tools/meta');
const {
  getDevelopSubPathVersionNcuConfig,
} = require('../config/develop.subPath.version.ncu');
const { fileGlobalHeader } = require('./template.config');

const folderPath = '.';

const developSubPathVersionNcuConfig = getDevelopSubPathVersionNcuConfig();

const { paths = [] } = {
  paths: [],
  ...developSubPathVersionNcuConfig,
};

const contentFileContent = `${fileGlobalHeader}
function buildConfig(api) {
  api.cache(true);

  return {
    babelrcRoots: ['.'${
      !isArray(paths)
        ? ''
        : paths.length === 0
          ? ''
          : `, ${paths
              .map((o) => {
                return `${o}/*`;
              })
              .join(',')}`
    }],
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
