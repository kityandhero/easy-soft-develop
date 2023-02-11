const globalScript = {
  'z:initial:environment': 'node ./develop/assists/initial.environment.js',
};

const packageScript = {};

function getGlobalPackages() {
  let packages = [];

  packages = packages.concat([
    '@babel/core',
    '@babel/eslint-parser',
    '@babel/plugin-external-helpers',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-decorators',
    '@babel/plugin-transform-runtime',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/runtime',
  ]);

  packages = packages.concat([
    '@commitlint/cli',
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes',
    '@commitlint/cz-commitlint',
    '@pmmmwh/react-refresh-webpack-plugin',
    'commitizen',
    'conventional-changelog-conventionalcommits',
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
    'stylelint-config-prettier',
    'stylelint-config-standard',
  ]);

  packages = packages.concat('rimraf', 'lint-staged', 'husky');

  packages = packages.concat('easy-soft-develop');

  return packages;
}

module.exports = { globalScript, packageScript, getGlobalPackages };
