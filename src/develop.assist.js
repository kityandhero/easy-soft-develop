let fs = require('fs');
const { resolve } = require('path');

const content = `/* eslint-disable import/no-commonjs */

const { clean } = require('easy-soft-develop');

clean('',['yarn-error.log','yarn.lock','package-lock.json','src/.umi']);
`;

function createCleanScriptFile() {
  const filePath = resolve('.');

  fs.mkdirSync(`${filePath}/develop/assists/`, { recursive: true });

  fs.writeFileSync(`${filePath}/develop/assists/clean.js`, content, {
    flag: 'w',
  });
}

module.exports = { createCleanScriptFile };
