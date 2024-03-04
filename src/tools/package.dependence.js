function getGlobalDevelopPackages() {
  let packages = [];

  packages = packages.concat([
    '@babel/core',
    '@babel/eslint-parser',
    '@babel/plugin-external-helpers',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-proposal-decorators',
    '@babel/plugin-transform-runtime',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/runtime',
  ]);

  packages = packages.concat([
    '@commitlint/cli',
    '@commitlint/config-conventional',
    '@commitlint/config-pnpm-scopes',
    '@pmmmwh/react-refresh-webpack-plugin',
    'commitizen',
    'conventional-changelog-conventionalcommits',
    'cz-git',
  ]);

  packages = packages.concat([
    'eslint',
    'eslint-config-airbnb',
    'eslint-config-airbnb-typescript',
    'eslint-config-prettier',
    'eslint-formatter-pretty',
    'eslint-import-resolver-typescript',
    'eslint-plugin-eslint-comments',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-prettier',
    'eslint-plugin-promise',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-simple-import-sort',
    'eslint-plugin-unicorn',
  ]);

  packages = packages.concat(['documentation']);

  packages = packages.concat([
    'prettier',
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
  ]);

  packages = packages.concat([
    'stylelint',
    'stylelint-config-css-modules',
    'stylelint-config-standard',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
  ]);

  packages = packages.concat(['@typescript-eslint/parser']);

  packages = packages.concat(['@types/node']);

  packages = packages.concat('cross-env', '@types/jest', 'jest', 'babel-jest');

  packages = packages.concat(
    'rimraf',
    'lint-staged',
    'husky',
    'npm-check-updates',
  );

  packages = packages.concat('easy-soft-develop');

  packages = packages.concat('@changesets/cli');

  return packages;
}

function getProjectDevelopPackages() {
  let packages = [];

  packages = packages.concat([]);

  return packages;
}

function getMainDevelopPackages() {
  let packages = [];

  packages = packages.concat(['@types/jest']);

  return packages;
}

module.exports = {
  getGlobalDevelopPackages,
  getMainDevelopPackages,
  getProjectDevelopPackages,
};
