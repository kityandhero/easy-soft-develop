const { exec } = require('./shell');

function prettierAllFile() {
  exec('npx prettier --cache --write .');
}

function prettierChangeFile() {
  exec('npx prettier --cache --write ./package.json');
}

module.exports = { prettierAllFile, prettierChangeFile };
