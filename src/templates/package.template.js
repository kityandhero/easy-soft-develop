const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/package';

const globalChildPackageFileContent = `${fileGlobalHeader}
const commitScript = {
  precommit: 'npm run z:lint:staged:quiet',
};

const documentationScript = {
  'prez:documentation:generate': 'npx rimraf ./docs && npm run z:documentation:lint',
  'z:documentation:generate': 'npx documentation build src/** -f html --github -o docs',
  'z:documentation:lint': 'npx documentation lint src/**',
};

const lintScript = {
  'z:lint:file:all': 'npm run z:lint:script:all && npm run z:lint:style:all',
  'z:lint:file:all:fix': 'npm run z:lint:script:all:fix && npm run z:lint:style:all:fix',
  'z:lint:file:change': 'npm run z:lint:script:change && npm run z:lint:style:all',
  'z:lint:file:change:fix': 'npm run z:lint:script:change:fix && npm run z:lint:style:all:fix',
  'z:lint:script:all': 'npx eslint --ext .js,.jsx,.ts,.tsx ./src',
  'z:lint:script:all:fix': 'npx eslint --fix --ext .js,.jsx,.ts,.tsx ./src',
  'postz:lint:script:all:fix': 'npm run z:prettier:format:all',
  'z:lint:script:change': 'npx eslint --cache --ext .js,.jsx,.ts,.tsx ./src',
  'z:lint:script:change:fix': 'npx eslint --fix --cache --ext .js,.jsx,.ts,.tsx ./src',
  'postz:lint:script:change:fix': 'npm run z:prettier:format:change',
  'z:lint:staged': 'npx lint-staged',
  'z:lint:staged:quiet': 'npx lint-staged --quiet',
  'z:lint:style:all': 'npx stylelint --allow-empty-input "./src/**/*.{css,scss,less}"',
  'z:lint:style:all:fix': 'npx stylelint --allow-empty-input --fix "./src/**/*.{css,scss,less}"',
  'postz:lint:style:all:fix': 'npm run z:prettier:format:all',
  'z:lint:style:change': 'npx stylelint --allow-empty-input --cache "./src/**/*.{css,scss,less}"',
  'z:lint:style:change:fix': 'npx stylelint --allow-empty-input --cache --fix "./src/**/*.{css,scss,less}"',
  'postz:lint:style:change:fix': 'npm run z:prettier:format:change',
};

const prettierScript = {
  'z:prettier:format:all': 'npx prettier --write .',
  'z:prettier:format:change': 'npx prettier --cache --write .',
  'z:prettier:package.json': 'npx prettier --write ./package.json',
};

const tscScript = {
  'z:tsc:build': 'echo show tsc version and create declaration file && tsc -v && tsc -p ./tsconfig.types.json && echo declaration file generate complete',
};

const jestScript = {
  'z:test': 'cross-env NODE_ENV=test jest',
};

module.exports = {
  ...commitScript,
  ...documentationScript,
  ...lintScript,
  ...prettierScript,
  ...tscScript,
  ...jestScript,
};
`;

const globalChildPackageFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'children.content.js',
  coverFile: true,
  fileContent: globalChildPackageFileContent,
};

const globalMainPackageFileContent = `${fileGlobalHeader}
const lintScript = {
  'z:lint:staged': 'npx lint-staged',
  'z:lint:staged:quiet': 'npx lint-staged --quiet',
};

const prepareScript = {
  prepare: 'npm run z:husky:install && echo do other prepare work with here',
  'z:husky:install':'npx husky install'
};

const toolsScript = {
  postinstall: 'npm run z:initial:environment && echo do other postinstall work with here',
  'z:show:info':
    'echo node version && node --version && echo npm version && npm --version && echo ------------ && npx lerna ls -a -l',
  "z:show:package": "npx lerna ls -a -l",
  "z:sleep": "npx easy-soft-develop sleep --second 2 --showInfo false",
  "z:create:assist-scripts": "npx easy-soft-develop create-assist-scripts",
  "z:update:package-from-package": "node ./develop/assists/update-package-from-package.js",
};

const publishScript = {
  changelog:
    'lerna version --conventional-commits --no-push --no-git-tag-version',
  'prez:publish:lerna': 'npm run z:change:npm:registry:npm',
  'z:publish:lerna': 'lerna updated && npm run z:lerna:publish',
  'postz:publish:lerna': 'npm run z:change:npm:registry:local && npm run z:publish:npm-all',
  'prez:publish:build': 'npm run z:install && npm run cz && npm run z:build:all',
  'z:publish:build': 'npm run z:publish:lerna',
};

const cleanScript = {
  "z:clean": "node ./develop/assists/clean.js",
};

const environmentScript = {
  "prez:initial:environment": "npm run z:create:assist-scripts",
  "z:initial:environment": "node ./develop/assists/initial.environment.js",
};

const lernaScript = {
  'z:lerna:publish': 'lerna publish --yes',
  'z:lerna:bootstrap':
    'npm run z:clean && npm run z:husky:install && git pull && npm run z:install',
};

const installScript = {
  "z:reinstall": 'npm run z:lerna:bootstrap',
  "postinstall": "npm run z:initial:environment",
  "prez:install.global.develop.dependence": "npm run z:change:npm:registry:local",
  "z:install.global.develop.dependence": "node ./develop/assists/install.global.develop.dependence",
  "postz:install.global.develop.dependence": "npm run z:install",
  "prez:install": "npm run z:change:npm:registry:local",
  "z:install": "pnpm install",
};

const nrmScript = {
  "z:change:npm:registry:local": "nrm use local",
  "z:change:npm:registry:npm": "nrm use npm",
};

const commitScript = {
  commitlint: 'npx commitlint --edit',
  precz: 'npm run z:commit:refresh && git stage -A',
  cz: 'cz',
  postcz: 'git push && npm run z:test',
  precommit: 'npm run z:lint:staged:quiet',
  "z:commit:refresh": "npx easy-soft-develop commit-refresh",
};

const prettierScript = {
  "z:prettier:format:all": "npx prettier --write .",
  "z:prettier:format:change": "npx prettier --cache --write .",
  "z:prettier:package.json:all": "npx prettier --write ./**/package.json",
  "z:prettier:package.json:current": "npx prettier --write ./package.json",
};

const ncuScript = {
  'z:check:all-package-version': 'easy-soft-develop check-all-package-version',
  'z:update:all-package-version': 'easy-soft-develop update-all-package-version',
  'postz:update:all-package-version': 'npm run z:install',
  'z:update:special-package-version': 'node ./develop/assists/package.update.special.version.js',
  'postz:update:special-package-version': 'npm run z:install',
};

module.exports = {
  ...lintScript,
  ...prettierScript,
  ...prepareScript,
  ...toolsScript,
  ...publishScript,
  ...cleanScript,
  ...environmentScript,
  ...lernaScript,
  ...installScript,
  ...nrmScript,
  ...commitScript,
  ...ncuScript,
};
`;

const globalMainPackageFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'main.content.js',
  coverFile: true,
  fileContent: globalMainPackageFileContent,
};

const customMainPackageFileContent = `${fileGlobalHeader}
const scripts = {};

module.exports = {
  ...scripts,
};
`;

const customMainPackageFile = {
  folderPath: `${folderPath}/custom`,
  fileName: 'main.content.js',
  coverFile: false,
  fileContent: customMainPackageFileContent,
};

const customChildPackageFileContent = `${fileGlobalHeader}
const scripts = {};

module.exports = {
  ...scripts,
};
`;

const customChildPackageFile = {
  folderPath: `${folderPath}/custom`,
  fileName: 'children.content.js',
  coverFile: false,
  fileContent: customChildPackageFileContent,
};

module.exports = {
  globalChildPackageFile,
  globalMainPackageFile,
  customMainPackageFile,
  customChildPackageFile,
};
