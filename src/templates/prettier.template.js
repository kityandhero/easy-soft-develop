const config = `/* eslint-disable import/no-commonjs */

module.exports = {
  generalConfig: {
    pluginSearchDirs: false,
    printWidth: 80,
    singleQuote: true,
    trailingComma: 'all',
    proseWrap: 'never',
    semi: true,
    overrides: [
      {
        files: '.prettierrc',
        options: {
          parser: 'json',
        },
      },
    ],
    plugins: [
      // 'prettier-plugin-organize-imports',
      'prettier-plugin-packagejson',
    ],
  },
};
`

const content=`/* eslint-disable import/no-commonjs */

const mainContent = \`/* eslint-disable import/no-commonjs */
let { generalConfig } = require('./develop/config/prettier/config');

module.exports = generalConfig;
\`;

const packageContent = \`/* eslint-disable import/no-commonjs */
var { generalConfig } = require("../../develop/config/prettier/config");

module.exports = generalConfig;
\`;

module.exports = {
  mainContent,
  packageContent,
};
`

const ignore = `/* eslint-disable import/no-commonjs */

const content = \`# ignore dir
**/node_modules/**
**/templates/**
**/lib/**
**/dist/**
**/es/**
**/.umi/**
**/.umi-production/**
**/.idea/**
**/.ga/**
**/.history/**
**/.husky/**
**/.vs/**

# ignore file
*.png
*.jpg
*.jpeg
*.rar
*.zip
*.7z
*.ico
*.gif
*.toml
*.lock
*.tar.gz
*.log
*.txt
*.text
*.ejs
*.svg
*.min.js

# ignore special
.prettierrc.js
.eslintignore
.stylelintignore
.gitattributes
.browserslistrc
.dockerignore
.gitignore
.prettierignore
.eslintcache
.npmrc
.editorconfig
.czrc
.ga
rollup.config-*.cjs
pnpm-lock.yaml
CNAME
LICENSE
\`;

module.exports = {
  content,
};
`

module.exports = { ignore, content, config };
