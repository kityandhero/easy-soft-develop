import fs from 'node:fs';
import console from 'node:console';
import fsExtra from 'fs-extra';
import terminalKit from 'terminal-kit';
import pathAssist from 'node:path';
import shell from 'shelljs';
import { fileURLToPath } from 'node:url';

const { terminal: term } = terminalKit;

export const fileName = fileURLToPath(import.meta.url);
export const folderName = pathAssist.dirname(fileName);

export function exec(command) {
  shell.exec(command);
}

export function cd(path) {
  process.chdir(path);
}

export function resolvePath(path) {
  return pathAssist.resolve(path);
}

export function isObject(value) {
  return value !== null && typeof value === 'object';
}

export function isArray(value) {
  return Array.isArray(value);
}

export function exit() {
  // eslint-disable-next-line unicorn/no-process-exit
  return process.exit();
}

export function getArgumentCollection() {
  return process.argv;
}

/**
 * Check value in the collection.
 * @param {Array} collection value collection
 * @param {*} target the target value will be checked
 */
export function checkInCollection(collection, target) {
  let isResult = false;

  if (!isArray(collection)) {
    return isResult;
  }

  collection.some((o) => {
    if (o === target) {
      isResult = true;

      return true;
    }

    return false;
  });

  return isResult;
}

export function checkStringIsEmpty(v) {
  v = ((v || undefined) == undefined ? '' : toString(v))
    .trim()
    .replaceAll(/[\t\r\n]/g, ' ')
    .replaceAll(/\s*/g, '');

  while (v.includes('  ')) {
    v = v.replaceAll(/ {2}/g, ' ');
  }

  return !v;
}

export function assignObject(source, ...mergeData) {
  let result = source;

  if (!Array.isArray(mergeData)) {
    if (!isObject(mergeData)) {
      return result;
    }

    return Object.assign(source, mergeData);
  }

  for (const o of mergeData) {
    if (!isObject(o)) {
      continue;
    }

    result = Object.assign(result, o);
  }

  return result;
}

/**
 * Prompt line
 */
export function promptLine() {
  term.gray('----------------------------------------\r\n');
}

export function promptEmptyLine() {
  console.log('');
}

export function promptSuccess(message, emptyLine = true) {
  term.green(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptTip(title, message, emptyLine = true) {
  term.red(`${title}: `).white(message);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptWarn(message, emptyLine = true) {
  term.magenta(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptInfo(message, emptyLine = true) {
  term.white(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptError(error, emptyLine = true) {
  console.error(error);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptMessage(message, config, emptyLine = true) {
  let o = term;

  const {
    bold = false,
    dim = false,
    italic = false,
    underline = false,
    blink = false,
    inverse = false,
    strike = false,
  } = { ...config };

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

export function promptBlack(message, emptyLine = true) {
  term.black(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptBackgroundBlack(message, emptyLine = true) {
  term.bgBlack(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptRed(message, emptyLine = true) {
  term.red(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptBackgroundRed(message, emptyLine = true) {
  term.bgRed(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptGreen(message, emptyLine = true) {
  term.green(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function promptBackgroundGreen(message, emptyLine = true) {
  term.bgGreen(`${message}\r\n`);

  if (emptyLine) {
    promptEmptyLine();
  }
}

export function existPathSync(path) {
  if (!path || typeof path !== 'string') {
    throw new TypeError('file path not allow empty');
  }

  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch {
    // promptError(error);

    return false;
  }

  return true;
}

export function existFileSync(path) {
  if (!path || typeof path !== 'string') {
    throw new TypeError('file path not allow empty');
  }

  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch {
    // promptError(error);

    return false;
  }

  const p = resolvePath(path);

  const state = fs.statSync(p);

  return state.isFile();
}

export function existDirectorySync(path) {
  if (!path || typeof path !== 'string') {
    throw new TypeError('directory path not allow empty');
  }

  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch {
    // promptError(error);

    return false;
  }

  const p = resolvePath(path);

  const state = fs.statSync(p);

  return state.isDirectory();
}

export function mkdirSync(path) {
  if (checkStringIsEmpty(path)) {
    promptError('path disallow empty');

    return;
  }

  fs.mkdirSync(path, { recursive: true });
}

export function writeFileSync(path, content, { coverFile = false }) {
  if (coverFile) {
    fs.writeFileSync(path, content, { flag: 'w' });
  } else {
    if (existFileSync(path)) {
      promptInfo(`${path} already exist, ignore create`);

      return false;
    }

    fs.writeFileSync(path, content, { flag: 'wx' });
  }

  return true;
}

export function writeFileWithFolderAndNameSync(
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

export function writeFileWithOptionsSync({
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

export function writeJsonFileSync(path, json, { coverFile = false }) {
  if (coverFile) {
    fsExtra.writeJsonSync(path, json, { flag: 'w' });
  } else {
    if (existFileSync(path)) {
      promptInfo(`${path} exist, ignore create`);

      return false;
    }

    fsExtra.writeJsonSync(path, json, { flag: 'wx' });
  }

  return true;
}

export function readJsonFileSync(path) {
  return fsExtra.readJsonSync(path);
}

export function rimraf(path) {
  if (checkStringIsEmpty(path)) {
    promptWarn(`path is empty: ${path}`);

    return;
  }

  if (!existPathSync(path)) {
    promptWarn(`path not exist: "${path}"`);

    return;
  }

  const command = `rimraf ${resolvePath(path)}`;

  promptInfo(
    `remove target by use rimraf package, make sure rimraf installed with global mode.`,
  );

  exec(command);

  promptSuccess(`remove path success, path: "${path}"`);
}

export function copyFile({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback,
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
        if (callback != undefined) {
          callback();
        }
      }
    },
  );
}

export function copyFileSync({ sourceMainPath, targetMainPath, filepath }) {
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

export function copyFolder({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback,
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
        if (callback != undefined) {
          callback();
        }
      }
    },
  );
}

export function copyFolderSync({ sourceMainPath, targetMainPath, filepath }) {
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

export function touchSync({ path }) {
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

export function copyContentSync({ sourcePath, targetPath }) {
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
