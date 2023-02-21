const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/lint-staged';

const contentFileContent = `${fileGlobalHeader}
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

module.exports = {
  content,
};
`;

const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.js',
  coverFile: false,
  fileContent: contentFileContent,
};

module.exports = { contentFile };
