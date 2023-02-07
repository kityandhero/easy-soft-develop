const content = `/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

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
`;

module.exports = { content };
