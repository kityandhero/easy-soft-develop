/* eslint-disable import/no-commonjs */

let fs = require('fs');
const { resolve } = require('path');

function commitRefresh(
  filename = 'commit.flag.json',
  relativeFolder = 'develop/flags',
) {
  function prompt(err) {
    if (err) {
      return console.error(err);
    }

    console.log('commit.flag.json update success');
  }

  const now = new Date();

  const datetime = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  let content = JSON.stringify({
    datetime: datetime,
  });

  const filePath = resolve('.');

  fs.mkdirSync(`${filePath}/${relativeFolder}/`, { recursive: true });

  fs.writeFile(
    `${filePath}/${relativeFolder}/${filename}`,
    content,
    { flag: 'w' },
    prompt,
  );
}

module.exports = { commitRefresh };
