const fs = require('fs');
const fsExtra = require('fs-extra');
const term = require('terminal-kit').terminal;
const { resolve } = require('path');

//检测文件或者文件夹存在 nodeJS
function fileExistsSync(path) {
  try {
    fs.accessSync(path, fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

function writeFileSync(path, content) {
  fs.writeFileSync(path, content);
}

function checkStringIsEmpty(v) {
  v = ((v || null) == null ? '' : toString(v)).trim().replace(/\t/g, ' ').replace(/\r/g, ' ').replace(/\n/g, ' ').replace(/\s*/g, '');

  while (v.indexOf('  ') >= 0) {
    v = v.replace(/  /g, ' ');
  }

  return !v;
}

function promptSuccess(message) {
  term.nextLine(1);

  term.green(`${message}\r`);
  console.log('');
}

function promptInfo(message) {
  term.white(`${message}\r`);
  console.log('');
}

function promptError(message) {
  term.red(`${message}\r`);
  console.log('');
}

function assignObject(source, mergeData) {
  let result = source;

  if (!Array.isArray(mergeData)) {
    if (!isObject(mergeData)) {
      return result;
    }

    return Object.assign(source, mergeData);
  }

  mergeData.forEach((o) => {
    if (!isObject(o)) {
      return;
    }

    result = Object.assign(result, o);
  });

  return result;
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

function mkdirSync(path) {
  if (checkStringIsEmpty(path)) {
    promptError('path disallow empty');

    return;
  }

  fs.mkdirSync(path, { recursive: true });
}

function mkdirRelativeSync(path) {
  const currentPath = resolve('./');

  if (checkStringIsEmpty(path)) {
    promptError('relative path disallow empty');

    return;
  }

  fs.mkdirSync(`${currentPath}/${path}`, { recursive: true });
}

function writeJsonFileSync(path, json) {
  fsExtra.writeJsonSync(path, json);
}

function writeJsonFileRelativeSync(relativePath, json) {
  const path = resolve(relativePath);

  writeJsonFileSync(path, json);
}

function readJsonFileSync(path) {
  return fsExtra.readJsonSync(path);
}

function readJsonFileRelativeSync(relativePath) {
  return readJsonFileSync(resolve(relativePath));
}

module.exports = {
  fileExistsSync,
  writeFileSync,
  checkStringIsEmpty,
  promptSuccess,
  promptInfo,
  promptError,
  isObject,
  assignObject,
  mkdirSync,
  mkdirRelativeSync,
  readJsonFileSync,
  readJsonFileRelativeSync,
  writeJsonFileSync,
  writeJsonFileRelativeSync,
  resolve,
};
