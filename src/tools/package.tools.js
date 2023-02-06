const fs = require('fs');

const { resolve } = require('path');
const { fileExistsSync } = require('./meta');

/**
 * loop all package
 */
function loopPackage(callback = ({ name, absolutePath, relativePath }) => {}) {
  const packagesDir = './packages/';

  if (!fileExistsSync(resolve(packagesDir))) {
    return;
  }

  const packagesPath = resolve(packagesDir);

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
