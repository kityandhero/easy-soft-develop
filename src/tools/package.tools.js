const fs = require('fs');

const { resolvePath, existDirectorySync, isArray } = require('./meta');
const {
  getDevelopSubPathVersionNcuConfig,
} = require('../config/develop.subPath.version.ncu');

/**
 * loop all package
 */
// eslint-disable-next-line no-unused-vars
function loopPackage(callback = ({ name, absolutePath, relativePath }) => {}) {
  const developSubPathVersionNcuConfig = getDevelopSubPathVersionNcuConfig();

  const { paths = [] } = {
    paths: [],
    ...developSubPathVersionNcuConfig,
  };

  if (!isArray(paths)) {
    return;
  }

  if (paths.length === 0) {
    return;
  }

  for (let index = 0; index < paths.length; index++) {
    const path = paths[index];

    if (!existDirectorySync(resolvePath(path))) {
      continue;
    }

    const packagesPath = resolvePath(path);

    const files = fs.readdirSync(path);

    files.forEach((file) => {
      const itemPath = `${packagesPath}/${file}`;

      if (file && fs.lstatSync(itemPath).isDirectory()) {
        callback({
          name: file,
          absolutePath: itemPath,
          relativePath: `./packages/${file}`,
        });
      }
    });
  }
}

module.exports = { loopPackage };
