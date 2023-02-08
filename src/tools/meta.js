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

function isArray(value) {
  return Array.isArray(value);
}

function checkStringIsEmpty(v) {
  v = ((v || null) == null ? '' : toString(v))
    .trim()
    .replace(/\t/g, ' ')
    .replace(/\r/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\s*/g, '');

  while (v.indexOf('  ') >= 0) {
    v = v.replace(/ {2}/g, ' ');
  }

  return !v;
}

function assignObject(source, ...mergeData) {
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

function mkdirSync(path) {
  if (checkStringIsEmpty(path)) {
    promptError('path disallow empty');

    return;
  }

  fs.mkdirSync(path, { recursive: true });
}

function writeFileSync(path, content, options = { coverFile: false }) {
  const { coverFile } = options;

  if (!coverFile) {
    if (fileExistsSync(path)) {
      promptInfo(`${path} already exist, ignore create`);

      return false;
    }

    fs.writeFileSync(path, content, { flag: 'wx' });
  } else {
    fs.writeFileSync(path, content, { flag: 'w' });
  }

  return true;
}

function writeFileWithFolderAndNameSync(
  folderPath,
  fileName,
  fileContent,
  coverFile = false,
) {
  mkdirSync(folderPath);

  return writeFileSync(`${folderPath}/${fileName}`, fileContent, {
    coverFile: coverFile,
  });
}

function writeFileWithOptionsSync({
  folderPath,
  fileName,
  fileContent,
  coverFile = false,
}) {
  return writeFileWithFolderAndNameSync(
    folderPath,
    fileName,
    fileContent,
    coverFile,
  );
}

function writeJsonFileSync(path, json, options = { coverFile: false }) {
  const { coverFile } = options;

  if (!coverFile) {
    if (fileExistsSync(path)) {
      promptInfo(`${path} exist, ignore create`);

      return false;
    }

    fsExtra.writeJsonSync(path, json, { flag: 'wx' });
  } else {
    fsExtra.writeJsonSync(path, json, { flag: 'w' });
  }

  return true;
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
  isArray,
  assignObject,
  mkdirSync,
  readJsonFileSync,
  readJsonFileRelativeSync,
  writeJsonFileSync,
  writeFileWithFolderAndNameSync,
  writeFileWithOptionsSync,
  resolvePath,
};
