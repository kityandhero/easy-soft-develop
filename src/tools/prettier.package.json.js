const { promptInfo, promptNewLine } = require('./meta');
const { exec } = require('./shell');

function prettierAllPackageJson() {
  promptInfo('will format all package.json');
  promptNewLine();

  exec('npx prettier --write ./**/package.json');
}

function prettierCurrentPackageJson() {
  promptInfo('will format current package.json');
  promptNewLine();

  exec('npx prettier --write ./package.json');
}

module.exports = { prettierAllPackageJson, prettierCurrentPackageJson };
