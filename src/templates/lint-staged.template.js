import { fileBuilderHeader } from './template.config.js';

const folderPath = './develop/config/lint-staged';

const contentFileContent = `${fileBuilderHeader}
const content = \`{
  "*.{md,json}": ["npx prettier --cache --write"],
  "*.{js,jsx}": ["npx eslint --ext .js,.jsx", "npx prettier --cache --write"],
  "*.{ts,tsx}": [
    "npx eslint --ext .ts,.tsx",
    "npx prettier --cache --parser=typescript --write"
  ],
  "*.{css,less,scss}": [
    "stylelint --allow-empty-input",
    "npx prettier --cache --write"
  ]
}
\`;

export default { content };
`;

export const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.mjs',
  coverFile: false,
  fileContent: contentFileContent,
};
