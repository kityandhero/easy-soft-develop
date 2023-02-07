const { checkStringIsEmpty, resolvePath, writeFileSync, mkdirSync, promptSuccess } = require('./meta');

function commitRefresh(fileName = '', relativeFolder = '') {
  const fileNameAdjust = checkStringIsEmpty(fileName) ? 'commit.flag.json' : fileName;
  const relativeFolderAdjust = checkStringIsEmpty(relativeFolder) ? 'develop/flags' : relativeFolder;

  const now = new Date();

  const datetime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  let content = JSON.stringify({
    datetime: datetime,
  });

  const filePath = resolvePath('.');

  mkdirSync(`${filePath}/${relativeFolderAdjust}/`, { recursive: true });

  const scriptFilePath = `${filePath}/${relativeFolderAdjust}/${fileNameAdjust}`;

  writeFileSync(scriptFilePath, content);

  const log = `${fileNameAdjust} refresh success in folder "./${relativeFolderAdjust}/"`;

  promptSuccess(log);
}

module.exports = { commitRefresh };
