const config = `/* eslint-disable import/no-commonjs */

module.exports = {
  generalConfig: {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-css-modules',
      'stylelint-config-prettier',
    ],
    plugins: ['stylelint-declaration-block-no-ignored-properties'],
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
    customSyntax: 'postcss-less',
    rules: {
      'function-url-quotes': 'always',
      'selector-attribute-quotes': 'always',
      'font-family-no-missing-generic-family-keyword': null,
      'plugin/declaration-block-no-ignored-properties': true,
      'selector-type-no-unknown': null,
      'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
      'unicode-bom': 'never',
      'no-descending-specificity': null,
      'selector-class-pattern': null,
      'value-no-vendor-prefix': null,
      'color-function-notation': null,
    },
  },
};
`

const content=`/* eslint-disable import/no-commonjs */

const mainContent = \`/* eslint-disable import/no-commonjs */
let { generalConfig } = require('./develop/config/stylelint/config');

module.exports = generalConfig;
\`;

const packageContent = \`/* eslint-disable import/no-commonjs */
let { generalConfig } = require('../../develop/config/stylelint/config');

module.exports = generalConfig;
\`;

module.exports = {
  mainContent,
  packageContent,
};
`

const ignore=`/* eslint-disable import/no-commonjs */

const content = \`\`;

module.exports = {
  content,
};
`

module.exports = { ignore, content, config };
