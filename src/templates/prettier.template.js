const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/prettier';

const configFileContent = `${fileGlobalHeader}
module.exports = {
  generalConfig: {
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
`;

const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.js',
  coverFile: true,
  fileContent: configFileContent,
};

const contentFileContent = `${fileGlobalHeader}
const mainContent = \`${fileGlobalHeader}
const { generalConfig } = require('./develop/config/prettier/config');

module.exports = generalConfig;
\`;

const packageContent = \`${fileGlobalHeader}
const { generalConfig } = require("../../develop/config/prettier/config");

module.exports = generalConfig;
\`;

module.exports = {
  mainContent,
  packageContent,
};
`;

const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.js',
  coverFile: true,
  fileContent: contentFileContent,
};

const ignoreFileContent = `${fileGlobalHeader}
const content = \`# ignore dir
**/node_modules/**
**/templates/**
**/lib/**
**/dist/**
**/es/**
**/docs/**
**/coverage/**
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
*.svg
*.min.js

# ignore special
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
`;

const ignoreFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'ignore.content.js',
  coverFile: false,
  fileContent: ignoreFileContent,
};

module.exports = {
  ignoreFile,
  contentFile,
  configFile,
};
