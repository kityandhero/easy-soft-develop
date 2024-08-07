const fs = require('fs');
const console = require('console');
const fsExtra = require('fs-extra');
const term = require('terminal-kit').terminal;
const { resolve } = require('path');
const shell = require('shelljs');

function exec(cmd) {
  shell.exec(cmd);
}

function cd(path) {
  // eslint-disable-next-line no-undef
  process.chdir(path);
}

function resolvePath(path) {
  return resolve(path);
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

function isArray(value) {
  return Array.isArray(value);
}

function exit() {
  // eslint-disable-next-line no-undef
  return process.exit();
}

function getArgCollection() {
  // eslint-disable-next-line no-undef
  return process.argv;
}

/**
 * Check value in the collection.
 * @param {Array} collection value collection
 * @param {*} target the target value will be checked
 */
function checkInCollection(collection, target) {
  let result = false;

  if (!isArray(collection)) {
    return result;
  }

  collection.some((o) => {
    if (o === target) {
      result = true;

      return true;
    }

    return false;
  });

  return result;
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

/**
 * Prompt line
 */
function promptLine() {
  term.gray('----------------------------------------\r\n');
}

function promptEmptyLine() {
  console.log('');
}

function promptSuccess(message, emptyLine = true) {
  term.green(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptTip(title, message, emptyLine = true) {
  term.red(`${title}: `).white(message);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptWarn(message, emptyLine = true) {
  term.magenta(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptInfo(message, emptyLine = true) {
  term.white(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptError(error, emptyLine = true) {
  console.error(error);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptMessage(message, config, emptyLine = true) {
  let o = term;

  const { bold, dim, italic, underline, blink, inverse, strike } = {
    bold: false,
    dim: false,
    italic: false,
    underline: false,
    blink: false,
    inverse: false,
    strike: false,
    ...config,
  };

  if (bold) {
    o = o.bold;
  }

  if (dim) {
    o = o.dim;
  }

  if (italic) {
    o = o.italic;
  }

  if (underline) {
    o = o.underline;
  }

  if (blink) {
    o = o.blink;
  }

  if (inverse) {
    o = o.inverse;
  }

  if (strike) {
    o = o.strike;
  }

  o(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptBlack(message, emptyLine = true) {
  term.black(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptBackgroundBlack(message, emptyLine = true) {
  term.bgBlack(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptRed(message, emptyLine = true) {
  term.red(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptBackgroundRed(message, emptyLine = true) {
  term.bgRed(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptGreen(message, emptyLine = true) {
  term.green(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function promptBackgroundGreen(message, emptyLine = true) {
  term.bgGreen(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

function existPathSync(path) {
  if (!path || typeof path !== 'string') {
    throw new TypeError('file path not allow empty');
  }

  try {
    fs.accessSync(path, fs.F_OK);
  } catch (error) {
    return false;
  }

  return true;
}

function existFileSync(path) {
  if (!path || typeof path !== 'string') {
    throw new TypeError('file path not allow empty');
  }

  try {
    fs.accessSync(path, fs.F_OK);
  } catch (error) {
    return false;
  }

  const p = resolvePath(path);

  const state = fs.statSync(p);

  return state.isFile();
}

function existDirectorySync(path) {
  if (!path || typeof path !== 'string') {
    throw new TypeError('directory path not allow empty');
  }

  try {
    fs.accessSync(path, fs.F_OK);
  } catch (error) {
    return false;
  }

  const p = resolvePath(path);

  const state = fs.statSync(p);

  return state.isDirectory();
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
    if (existFileSync(path)) {
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
  relativePath,
  fileName,
  fileContent,
  coverFile = false,
) {
  mkdirSync(folderPath);

  if (!checkStringIsEmpty(relativePath)) {
    mkdirSync(`${folderPath}/${relativePath}`);
  }

  return writeFileSync(
    `${folderPath}${
      checkStringIsEmpty(relativePath) ? '' : `/${relativePath}`
    }/${fileName}`,
    fileContent,
    {
      coverFile: coverFile,
    },
  );
}

function writeFileWithOptionsSync({
  folderPath,
  relativePath = '',
  fileName,
  fileContent,
  coverFile = false,
}) {
  return writeFileWithFolderAndNameSync(
    folderPath,
    relativePath,
    fileName,
    fileContent,
    coverFile,
  );
}

function writeJsonFileSync(path, json, options = { coverFile: false }) {
  const { coverFile } = options;

  if (!coverFile) {
    if (existFileSync(path)) {
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

function rimraf(path) {
  if (checkStringIsEmpty(path)) {
    promptWarn(`path is empty: ${path}`);

    return;
  }

  if (!existPathSync(path)) {
    promptWarn(`path not exist: "${path}"`);

    return;
  }

  const cmd = `rimraf ${resolvePath(path)}`;

  promptInfo(
    `remove target by use rimraf package, make sure rimraf installed with global mode.`,
  );

  exec(cmd);

  promptSuccess(`remove path success, path: "${path}"`);
}

function copyFile({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback = null,
}) {
  promptInfo(`copy file: "${filepath}".`);

  fs.cp(
    resolvePath(`${sourceMainPath}${filepath}`),
    resolvePath(`${targetMainPath}${filepath}`),
    {
      force: true,
      recursive: true,
    },
    (error) => {
      if (error) {
        promptError(error);
      } else {
        if (callback != null) {
          callback();
        }
      }
    },
  );
}

function copyFileSync({ sourceMainPath, targetMainPath, filepath }) {
  promptInfo(`copy file: "${filepath}".`);

  fs.cpSync(
    resolvePath(`${sourceMainPath}${filepath}`),
    resolvePath(`${targetMainPath}${filepath}`),
    {
      force: true,
      recursive: true,
    },
  );
}

function copyFolder({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback = null,
}) {
  promptInfo(`copy folder: "${filepath}".`);

  fs.cp(
    resolvePath(`${sourceMainPath}${filepath}`),
    resolvePath(`${targetMainPath}${filepath}`),
    {
      force: true,
      recursive: true,
    },
    (error) => {
      if (error) {
        promptError(error);
      } else {
        if (callback != null) {
          callback();
        }
      }
    },
  );
}

function copyFolderSync({ sourceMainPath, targetMainPath, filepath }) {
  promptInfo(`copy folder: "${filepath}".`);

  fs.cpSync(
    resolvePath(`${sourceMainPath}${filepath}`),
    resolvePath(`${targetMainPath}${filepath}`),
    {
      force: true,
      recursive: true,
    },
  );
}

function touchSync({ path }) {
  if (checkStringIsEmpty(path)) {
    promptError('touchSync params error: path not allow empty');

    return;
  }

  const pathAdjust = resolvePath(path);

  if (!existPathSync(pathAdjust)) {
    promptInfo(`touch file: "${pathAdjust}" not exist, will create it.`);
  }

  fsExtra.ensureFileSync(pathAdjust);

  // try {
  //   const time = new Date();

  //   fs.utimesSync(pathAdjust, time, time);
  // } catch (e) {
  //   promptInfo(`"${pathAdjust}" not exist, will create it.`);

  //   let fd = fs.openSync(pathAdjust, 'a');

  //   fs.closeSync(fd);
  // }
}

function copyContentSync({ sourcePath, targetPath }) {
  if (checkStringIsEmpty(sourcePath)) {
    promptError('copyContentSync params error: sourcePath not allow empty');

    return;
  }

  if (checkStringIsEmpty(targetPath)) {
    promptError('copyContentSync params error: targetMainPath not allow empty');

    return;
  }

  const sourcePathAdjust = resolvePath(sourcePath);
  const targetPathAdjust = resolvePath(targetPath);

  touchSync({ path: targetPath });

  promptTip('copy content', `"${sourcePath}" -> "${targetPath}".`);
  promptTip('source absolute path', sourcePathAdjust);
  promptTip('target absolute path', targetPathAdjust);

  const content = fs.readFileSync(sourcePathAdjust);

  writeFileSync(targetPathAdjust, content, { coverFile: true });
}

module.exports = {
  assignObject,
  cd,
  checkInCollection,
  checkStringIsEmpty,
  copyContentSync,
  copyFile,
  copyFileSync,
  copyFolder,
  copyFolderSync,
  exec,
  existDirectorySync,
  existFileSync,
  existPathSync,
  exit,
  getArgCollection,
  isArray,
  isObject,
  mkdirSync,
  promptBackgroundBlack,
  promptBackgroundGreen,
  promptBackgroundRed,
  promptBlack,
  promptEmptyLine,
  promptError,
  promptGreen,
  promptInfo,
  promptLine,
  promptMessage,
  promptRed,
  promptSuccess,
  promptTip,
  promptWarn,
  readJsonFileSync,
  resolvePath,
  rimraf,
  touchSync,
  writeFileSync,
  writeFileWithFolderAndNameSync,
  writeFileWithOptionsSync,
  writeJsonFileSync,
};
