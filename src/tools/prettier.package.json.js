const { promptInfo } = require('./meta');
const { exec } = require('./shell');

function prettierAllPackageJson() {
  console.log('');
  promptInfo('will format all package.json');
  console.log('');

  exec('npx prettier --write ./**/package.json');
}

function prettierCurrentPackageJson() {
  console.log('');
  promptInfo('will format current package.json');
  console.log('');

  exec('npx prettier --write ./package.json');
}

module.exports = { prettierAllPackageJson, prettierCurrentPackageJson };
