const fs = require('fs');
const console = require('console');
const fsExtra = require('fs-extra');
const term = require('terminal-kit').terminal;
const { resolve } = require('path');

function resolvePath(path) {
  return resolve(path);
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

function promptNewLine() {
  console.log('');
}

function promptSuccess(message) {
  term.nextLine(1);

  term.green(`${message}\r`);
  promptNewLine();
}

function promptInfo(message) {
  term.white(`${message}\r`);
  promptNewLine();
}

function promptError(error) {
  console.error(error);

  promptNewLine();
}

//检测文件或者文件夹存在 nodeJS
function fileExistsSync(path) {
  try {
    fs.accessSync(path, fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

function writeFileSync(path, content, options = { autoCreate: false }) {
  const { autoCreate } = options;

  if (!autoCreate) {
    if (fileExistsSync(path)) {
      promptInfo(`${path} exist, ignore create`);

      return;
    }

    fs.writeFileSync(path, content, { flag: 'wx' });
  }

  fs.writeFileSync(path, content, { flag: 'w' });
}

function checkStringIsEmpty(v) {
  v = ((v || null) == null ? '' : toString(v)).trim().replace(/\t/g, ' ').replace(/\r/g, ' ').replace(/\n/g, ' ').replace(/\s*/g, '');

  while (v.indexOf('  ') >= 0) {
    v = v.replace(/ {2}/g, ' ');
  }

  return !v;
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

function mkdirSync(path) {
  if (checkStringIsEmpty(path)) {
    promptError('path disallow empty');

    return;
  }

  fs.mkdirSync(path, { recursive: true });
}

function mkdirRelativeSync(path) {
  const currentPath = resolvePath('./');

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
  const path = resolvePath(relativePath);

  writeJsonFileSync(path, json);
}

function readJsonFileSync(path) {
  return fsExtra.readJsonSync(path);
}

function readJsonFileRelativeSync(relativePath) {
  return readJsonFileSync(resolvePath(relativePath));
}

module.exports = {
  fileExistsSync,
  writeFileSync,
  checkStringIsEmpty,
  promptNewLine,
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
  resolvePath,
};
