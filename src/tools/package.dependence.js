export function getGlobalDevelopPackages() {
  let packages = [];

  packages = [
    ...packages,
    '@babel/core',
    '@babel/eslint-parser',
    '@babel/plugin-external-helpers',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-proposal-decorators',
    '@babel/plugin-transform-runtime',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/runtime',
  ];

  packages = [
    ...packages,
    '@commitlint/cli',
    '@commitlint/config-conventional',
    '@commitlint/config-pnpm-scopes',
    '@pmmmwh/react-refresh-webpack-plugin',
    'commitizen',
    'conventional-changelog-conventionalcommits',
    'cz-git',
    'react-refresh',
  ];

  packages = [
    ...packages,
    '@eslint/compat',
    '@eslint/eslintrc',
    '@eslint/js',
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
    'globals',
    'semver',
  ];

  packages = [...packages, 'jsdoc', 'docdash'];

  packages = [
    ...packages,
    'prettier',
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
  ];

  packages = [
    ...packages,
    'stylelint',
    'stylelint-config-css-modules',
    'stylelint-config-standard',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
  ];

  packages = [...packages, '@typescript-eslint/parser'];

  packages = [...packages, '@types/node'];

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

export function getProjectDevelopPackages() {
  let packages = [];

  packages = [...packages];

  return packages;
}

export function getMainDevelopPackages() {
  let packages = [];

  packages = [...packages, '@types/jest'];

  return packages;
}
