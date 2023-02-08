const { exec } = require('./meta');

function prettierAllFile() {
  exec('npx prettier --cache --write .');
}

function prettierChangeFile() {
  exec('npx prettier --cache --write ./package.json');
}

module.exports = { prettierAllFile, prettierChangeFile };
