const fs = require('fs');

const { fileExistsSync, resolvePath } = require('./meta');

/**
 * loop all package
 */
// eslint-disable-next-line no-unused-vars
function loopPackage(callback = ({ name, absolutePath, relativePath }) => {}) {
  const packagesDir = './packages/';

  if (!fileExistsSync(resolvePath(packagesDir))) {
    return;
  }

  const packagesPath = resolvePath(packagesDir);

  const files = fs.readdirSync(packagesDir);

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

module.exports = { loopPackage };
