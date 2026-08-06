import { fileBuilderHeader } from './template.config.js';

const folderPath = './develop/config/stylelint';

const configFileContent = `${fileBuilderHeader}
export default {
  generalConfig: {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-css-modules',
    ],
    plugins: ['stylelint-declaration-block-no-ignored-properties', 'stylelint-order'],
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
    customSyntax: 'postcss-less',
    rules: {
      'function-url-quotes': 'always',
      'selector-attribute-quotes': 'always',
      'font-family-no-missing-generic-family-keyword': null,
      'plugin/declaration-block-no-ignored-properties': true,
      'selector-type-no-unknown': null,
      'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
      'no-descending-specificity': null,
      'selector-class-pattern': null,
      'value-no-vendor-prefix': null,
      'color-function-notation': null,
      'function-no-unknown': null,
    },
  },
};
`;

export const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: configFileContent,
};

const contentFileContent = `${fileBuilderHeader}
export const mainContent = \`${fileBuilderHeader}
import { generalConfig } from './develop/config/stylelint/config';

export default generalConfig;
\`;

export const packageContent = \`${fileBuilderHeader}
import { generalConfig } from '../../develop/config/stylelint/config';

export default generalConfig;
\`;
`;

export const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.mjs',
  coverFile: true,
  fileContent: contentFileContent,
};

const ignoreFileContent = `${fileBuilderHeader}
const content = \`# ignore dir
**/coverage/**
**/docs/**
\`;

export default { content };
`;

export const ignoreFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'ignore.content.mjs',
  coverFile: false,
  fileContent: ignoreFileContent,
};
