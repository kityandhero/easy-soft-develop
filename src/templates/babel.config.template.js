import { isArray } from '../tools/meta.js';

import { getDevelopSubPathVersionNcuConfig } from '../config/develop.subPath.version.ncu.js';
import { fileBuilderHeader } from './template.config.js';

const folderPath = '.';

const developSubPathVersionNcuConfig = getDevelopSubPathVersionNcuConfig();

const { paths = [] } = {
  paths: [],
  ...developSubPathVersionNcuConfig,
};

const contentFileContent = `${fileBuilderHeader}
export default function buildConfig(api) {
  api.cache(true);

  return {
    babelrcRoots: ['.'${
      isArray(paths)
        ? paths.length === 0
          ? ''
          : `, ${paths
              .map((o) => {
                return `'${o}/*'`;
              })
              .join(',')}`
        : ''
    }],
  };
}
`;

export const contentFile = {
  folderPath: folderPath,
  fileName: 'babel.config.mjs',
  coverFile: true,
  fileContent: contentFileContent,
};
