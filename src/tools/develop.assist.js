let fs = require('fs');
const { resolve } = require('path');

const { promptSuccess, promptInfo } = require('./meta');
const { sleep } = require('./sleep');

function createScriptFile(fileName, content) {
  const filePath = resolve('.');

  fs.mkdirSync(`${filePath}/develop/assists/`, { recursive: true });

  fs.writeFileSync(`${filePath}/develop/assists/${fileName}`, content, {
    flag: 'w',
  });

  promptSuccess(`${fileName} update success`);
}

function createCleanScriptFile() {
  const content = `/* eslint-disable import/no-commonjs */

const { clean } = require('easy-soft-develop');

clean('',['yarn-error.log','yarn.lock','package-lock.json','src/.umi']);
`;

  createScriptFile('clean.js', content);
}

function createCommitRefreshScriptFile() {
  const content = `/* eslint-disable import/no-commonjs */

const { createCleanScriptFile } = require('easy-soft-develop');

createCleanScriptFile();
`;

  createScriptFile('commit.refresh.js', content);
}

function createPackageUpdateAllVersionScriptFile() {
  const content = `/* eslint-disable import/no-commonjs */

const { updateAllPackageVersion } = require('easy-soft-develop');

updateAllPackageVersion();
`;

  createScriptFile('package.update.version.js', content);
}

function createPackageCheckAllVersionScriptFile() {
  const content = `/* eslint-disable import/no-commonjs */

const { checkAllPackageVersion } = require('easy-soft-develop');

checkAllPackageVersion();
`;

  createScriptFile('package.check.version.js', content);
}

function createSleepScriptFile() {
  const content = `/* eslint-disable import/no-commonjs */

const { sleep } = require('easy-soft-develop');

sleep(2);
`;

  createScriptFile('sleep.js', content);
}

function createDevelopScriptFiles() {
  const waitLog =
    'develop assist script files will update, please wait a moment';

  promptInfo(waitLog);

  createCleanScriptFile();

  createCommitRefreshScriptFile();

  createPackageUpdateAllVersionScriptFile();

  createPackageCheckAllVersionScriptFile();

  createSleepScriptFile();

  const successLog = 'develop assist script files update finish';

  promptInfo(successLog);
}

module.exports = {
  createCleanScriptFile,
  createCommitRefreshScriptFile,
  createPackageUpdateAllVersionScriptFile,
  createPackageCheckAllVersionScriptFile,
  createSleepScriptFile,
  createDevelopScriptFiles,
};
