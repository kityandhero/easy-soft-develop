const globalScript = {
  'z:initial:environment': 'node ./develop/assists/config.environment.js',
};

const packageScript = {};

function getGlobalPackages() {
  let packages = [];

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
    'eslint-config-prettier',
    'eslint-formatter-pretty',
    'eslint-import-resolver-typescript',
    'eslint-plugin-eslint-comments',
    'eslint-plugin-import',
    'eslint-plugin-prettier',
    'eslint-plugin-promise',
    'eslint-plugin-simple-import-sort',
  ]);

  packages = packages.concat(['prettier', 'prettier-plugin-organize-imports', 'prettier-plugin-packagejson']);

  packages = packages.concat(['stylelint', 'stylelint-config-prettier', 'stylelint-config-standard']);

  packages = packages.concat('rimraf', 'lint-staged', 'husky', 'shelljs', 'terminal-kit');

  packages = packages.concat('easy-soft-develop');

  return packages;
}

module.exports = { globalScript, packageScript, getGlobalPackages };
