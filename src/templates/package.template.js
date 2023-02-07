const childPackage = `/* eslint-disable import/no-commonjs */

const lintScript = {
  precommit: 'npm run z:lint:staged',
  'z:lint:file:all': 'npm run lint:script:all && npm run lint:style:all',
  'z:lint:file:all:fix': 'npm run lint:script:all:fix && npm run lint:style:all:fix',
  'z:lint:file:change': 'npm run lint:script:change && npm run lint:style:all',
  'z:lint:file:change:fix': 'npm run lint:script:change:fix && npm run lint:style:all:fix',
  'z:lint:script:all': 'npx eslint --ext .js,.jsx,.ts,.tsx ./src',
  'z:lint:script:all:fix': 'npx eslint --fix --ext .js,.jsx,.ts,.tsx ./src',
  'postz:lint:script:all:fix': 'npm run prettier:format:all',
  'z:lint:script:change': 'npx eslint --cache --ext .js,.jsx,.ts,.tsx ./src',
  'z:lint:script:change:fix': 'npx eslint --fix --cache --ext .js,.jsx,.ts,.tsx ./src && npm run lint:style:fix',
  'postz:lint:script:change:fix': 'npm run prettier:format:change',
  'z:lint:staged': 'npx lint-staged --quiet',
  'z:lint:style:all': 'npx stylelint "./src/**/*.less"',
  'z:lint:style:all:fix': 'npx stylelint --fix "./src/**/*.less"',
  'postz:lint:style:all:fix': 'npm run prettier:format:all',
  'z:lint:style:change': 'npx stylelint --cache "./src/**/*.less"',
  'z:lint:style:change:fix': 'npx stylelint --cache --fix "./src/**/*.less"',
  'postz:lint:style:change:fix': 'npm run prettier:format:change',
  'z:tsc:build': 'echo show tsc version and create declaration file && tsc -v && tsc -p ./tsconfig.types.json && echo declaration file generate complete',
};

const prettierScript = {
  'z:prettier:format:all': 'npx prettier --write .',
  'z:prettier:format:change': 'npx prettier --cache --write .',
  'z:prettier:package.json': 'npx prettier --write ./package.json',
};

module.exports = {
  ...lintScript,
  ...prettierScript,
};
`;

const mainPackage = `/* eslint-disable import/no-commonjs */

const lintScript = {
  'z:lint:staged': 'npx lint-staged',
};

const prepareScript = {
  prepare: 'npm run z:husky:install && echo do other prepare work with here',
  'z:husky:install':'npx husky install'
};

const toolsScript = {
  postinstall: 'npm run z:initial:environment && echo do other postinstall work with here',
  'z:show:info':
    'echo node version && node --version && echo npm version && npm --version && echo ------------ && npx lerna ls -a -l',
  "z:sleep": "npx easy-soft-develop sleep --second 2 --showInfo false",
  "z:create:assist-scripts": "npx easy-soft-develop create-assist-scripts",
};

const publishScript = {
  changelog:
    'lerna version --conventional-commits --no-push --no-git-tag-version',
  'z:publish:npm-all': 'echo please supplement publish to npm commend',
  'prez:publish-npm-all': 'npm run z:change:nrm:npm',
  'z:publish-npm-all': 'npm run z:publish:npm-all',
  'postz:publish-npm-all': 'npm run z:change:nrm:local',
  'prez:publish:lerna': 'npm run z:change:nrm:npm',
  'z:publish:lerna': 'lerna updated && npm run z:lerna:publish',
  'postz:publish:lerna': 'npm run z:change:nrm:local && npm run publish-npm-all',
  'prez:publish:build': 'npm run z:install && npm run cz && npm run z:build:all',
  'z:publish:build': 'npm run z:publish:lerna',
};

const cleanScript = {
  "z:clean": "node ./develop/assists/clean.js",
};

const environmentScript = {
  "z:initial:environment": "node ./develop/assists/config.environment.js",
};

const lernaScript = {
  'z:lerna:publish': 'lerna publish --yes',
  'prez:lerna:bootstrap': 'npm run z:change:nrm:local',
  'z:lerna:bootstrap':
    'npm run z:clean && npm run z:husky:install && git pull && npm run z:install',
};

const installScript = {
  "z:reinstall": 'npm run z:lerna:bootstrap',
  "postinstall": "npm run z:initial:environment",
  "z:install.global.dev.dependence": "node ./develop/assists/install.global.dev.dependence",
  "postz:install.global.dev.dependence": "npm run z:install",
  "z:install": "pnpm install",
};

const nrmScript = {
  "z:change:nrm:local": "nrm use local",
  "z:change:nrm:npm": "nrm use npm",
};

const commitScript = {
  commitlint: 'npx commitlint --edit',
  precz: 'npm run z:commit:refresh && git stage -A',
  cz: 'cz',
  postcz: 'git push',
  precommit: 'npm run z:lint:staged',
  "z:commit:refresh": "npx easy-soft-develop commit-refresh",
};

const prettierScript = {
  "z:prettier:format:all": "npx prettier --write .",
  "z:prettier:format:change": "npx prettier --cache --write .",
  "z:prettier:package.json:all": "npx prettier --write ./**/package.json",
  "z:prettier:package.json:current": "npx prettier --write ./package.json",
};

const ncuScript = {
  'z:check:all-package-version': 'npx easy-soft-develop check-all-package-version',
  'z:update:all-package-version': 'npx easy-soft-develop update-all-package-version',
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

const customPackage = `/* eslint-disable import/no-commonjs */

const scripts = {};

module.exports = {
  ...scripts,
};
`;

module.exports = { childPackage, mainPackage, customPackage };
