const { promptInfo, promptEmptyLine, exec } = require('./meta');

function prettierAllPackageJson() {
  promptInfo('will format all package.json');
  promptEmptyLine();

  exec('npx prettier --write ./**/package.json');
}

function prettierCurrentPackageJson() {
  promptInfo('will format current package.json');
  promptEmptyLine();

  exec('npx prettier --write ./package.json');
}

module.exports = { prettierAllPackageJson, prettierCurrentPackageJson };
