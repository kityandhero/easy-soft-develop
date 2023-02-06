let fs = require('fs');
const { resolve } = require('path');
const term = require('terminal-kit').terminal;

const { checkStringIsEmpty } = require('./meta');

function commitRefresh(fileName = '', relativeFolder = '') {
  const fileNameAdjust = checkStringIsEmpty(fileName) ? 'commit.flag.json' : fileName;
  const relativeFolderAdjust = checkStringIsEmpty(relativeFolder) ? 'develop/flags' : relativeFolder;

  const now = new Date();

  const datetime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  let content = JSON.stringify({
    datetime: datetime,
  });

  const filePath = resolve('.');

  fs.mkdirSync(`${filePath}/${relativeFolderAdjust}/`, { recursive: true });

  const scriptFilePath = `${filePath}/${relativeFolderAdjust}/${fileNameAdjust}`;

  fs.writeFileSync(scriptFilePath, content, { flag: 'w' });

  const log = `${fileNameAdjust} refresh success in folder "./${relativeFolderAdjust}/"`;

  term.green(log);
}

module.exports = { commitRefresh };
