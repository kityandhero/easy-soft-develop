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

function checkStringIsEmpty(v) {
  v = ((v || null) == null ? '' : toString(v))
    .trim()
    .replace(/\t/g, ' ')
    .replace(/\r/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\s*/g, '');

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

module.exports = {
  fileExistsSync,
  checkStringIsEmpty,
  promptSuccess,
  promptInfo,
};
