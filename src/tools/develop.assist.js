let fs = require('fs');
const { resolve } = require('path');

const { promptSuccess, promptInfo } = require('./meta');
const { sleep } = require('./sleep');

function createScriptFile(fileName, content, flag = 'wx+') {
  const filePath = resolve('.');

  fs.mkdirSync(`${filePath}/develop/assists/`, { recursive: true });

  fs.writeFileSync(`${filePath}/develop/assists/${fileName}`, content, {
    flag: flag,
  });

  promptSuccess(`${fileName} update success`);
}

function createCleanScriptFile() {
  const content = `/* eslint-disable import/no-commonjs */

const { clean } = require('easy-soft-develop');

clean('',['yarn-error.log','yarn.lock','package-lock.json','src/.umi']);
`;

  createScriptFile('clean.js', content, 'w+');
}

function createPackageCheckSpecialVersionScriptFile() {
  const content = `/* eslint-disable import/no-commonjs */

const { updateSpecialPackageVersion } = require('easy-soft-develop');

const packageList = [];

updateSpecialPackageVersion(packageList);
`;

  try {
    createScriptFile('package.update.special.version.js', content, 'wx+');
  } catch (error) {}
}

function createInstallGlobalDevDependenceScriptFile() {
  const content = `/* eslint-disable import/no-commonjs */

const { initGlobalDevDependencePackages } = require('easy-soft-develop');

const packageList = [];

initGlobalDevDependencePackages(packageList);
`;

  try {
    createScriptFile('install.global.dev.dependence.js', content, 'wx+');
  } catch (error) {}
}

function createDevelopScriptFiles() {
  const waitLog = 'develop assist script files will update, please wait a moment';

  promptInfo(waitLog);

  createCleanScriptFile();

  createPackageCheckSpecialVersionScriptFile();

  createInstallGlobalDevDependenceScriptFile();

  const successLog = 'develop assist script files update finish';

  promptInfo(successLog);
}

module.exports = {
  createCleanScriptFile,
  createPackageCheckSpecialVersionScriptFile,
  createInstallGlobalDevDependenceScriptFile,
  createDevelopScriptFiles,
};
