import { fileBuilderHeader } from './template.config.js';

const folderPath = './develop/config/jsdoc';

const configFileContent = `${fileBuilderHeader}
export default {
  generalConfig: {
    tags: {
      allowUnknownTags: false,
      dictionaries: ['jsdoc', 'closure'],
    },
    source: {
      include: './src',
    },
    plugins: ['plugins/markdown'],
    opts: {
      template: 'node_modules/docdash',
      encoding: 'utf8',
      destination: 'docs/',
      recurse: true,
      verbose: true,
    },
    templates: {
      cleverLinks: false,
      monospaceLinks: false,
    },
  },
};
`;

export const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.mjs',
  coverFile: false,
  fileContent: configFileContent,
};

const contentFileContent = `${fileBuilderHeader}
export const packageContent = \`${fileBuilderHeader}
import { generalConfig } from "../../develop/config/jsdoc/config";

export default generalConfig;
\`;
`;

export const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.mjs',
  coverFile: true,
  fileContent: contentFileContent,
};
