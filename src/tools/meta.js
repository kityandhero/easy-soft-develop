const fs = require('fs');
const term = require('terminal-kit').terminal;

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

module.exports = {
  fileExistsSync,
  writeFileSync,
  checkStringIsEmpty,
  promptSuccess,
  promptInfo,
  isObject,
  assignObject,
};
