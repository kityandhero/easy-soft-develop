import fs from 'node:fs';

import { resolvePath, existDirectorySync, isArray } from './meta.js';

/**
 * loop all package
 */
export function loopPackage(
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

  for (const pathItem of paths) {
    if (!existDirectorySync(resolvePath(pathItem))) {
      continue;
    }

    const pathItemAdjust = resolvePath(pathItem);

    const files = fs.readdirSync(pathItem);

    for (const file of files) {
      const itemPath = `${pathItemAdjust}/${file}`;

      if (file && fs.lstatSync(itemPath).isDirectory()) {
        callback({
          name: file,
          path: pathItem,
          absolutePath: itemPath,
          relativePath: `./${pathItem}/${file}`,
        });
      }
    }
  }
}
