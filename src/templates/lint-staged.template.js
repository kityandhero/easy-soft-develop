const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/lint-staged';

const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.js',
  coverFile: false,
  fileContent: `${fileGlobalHeader}
  const content = \`{
    "*.{md,json}": ["npx prettier --cache --write"],
    "*.{js,jsx}": [
      "npx eslint --ext .js,.jsx,.ts,.tsx",
      "npx prettier --cache --write"
    ],
    "*.{css,less,scss}": [
      "stylelint",
      "npx prettier --cache --write"
    ],
    "*.{ts,tsx}": [
      "npx eslint --ext .js,.jsx,.ts,.tsx",
      "npx prettier --cache --parser=typescript --write"
    ]
  }
  \`;

  module.exports = {
    content,
  };
  `,
};

module.exports = { contentFile };
