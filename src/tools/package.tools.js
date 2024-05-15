const fs = require('fs');

const { resolvePath, existDirectorySync, isArray } = require('./meta');

/**
 * loop all package
 */
function loopPackage(
  paths = [],
  // eslint-disable-next-line no-unused-vars
  callback = ({ name, path, absolutePath, relativePath }) => {},
) {
  if (!isArray(paths)) {
    return;
  }

  if (paths.length === 0) {
    return;
  }

  for (let index = 0; index < paths.length; index++) {
    const pathItem = paths[index];

    if (!existDirectorySync(resolvePath(pathItem))) {
      continue;
    }

    const pathItemAdjust = resolvePath(pathItem);

    const files = fs.readdirSync(pathItem);

    files.forEach((file) => {
      const itemPath = `${pathItemAdjust}/${file}`;

      if (file && fs.lstatSync(itemPath).isDirectory()) {
        callback({
          name: file,
          path: pathItem,
          absolutePath: itemPath,
          relativePath: `./${pathItem}/${file}`,
        });
      }
    });
  }
}

module.exports = { loopPackage };
