import { fileBuilderHeader } from './template.config.js';

const folderPath = './develop/config/prettier';

const configFileContent = `${fileBuilderHeader}
export const generalConfig = {
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
};
`;

export const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: configFileContent,
};

const contentFileContent = `${fileBuilderHeader}
const mainContent = \`${fileBuilderHeader}
export { generalConfig as default } from './develop/config/prettier/config/index.mjs';
\`;

const packageContent = \`${fileBuilderHeader}
export { generalConfig as default } from '../../develop/config/prettier/config/index.mjs';
\`;

export default {
  mainContent,
  packageContent,
};
`;

export const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.mjs',
  coverFile: true,
  fileContent: contentFileContent,
};

const ignoreFileContent = `${fileBuilderHeader}
export const content = \`# ignore dir
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
`;

export const ignoreFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'ignore.content.mjs',
  coverFile: false,
  fileContent: ignoreFileContent,
};
