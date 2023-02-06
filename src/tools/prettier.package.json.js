const { exec } = require('./shell');

function prettierAllPackageJson() {
  exec('npx prettier --write ./**/package.json');
}

function prettierCurrentPackageJson() {
  exec('npx prettier --write ./package.json');
}

module.exports = { prettierAllPackageJson, prettierCurrentPackageJson };
