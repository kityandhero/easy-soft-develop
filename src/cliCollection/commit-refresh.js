const { commitRefresh } = require('../tools/commit.refresh');

exports.run = function (s, o) {
  const {
    _optionValues: {
      fileName = 'commit.flag.json',
      relativeFolder = 'develop/flags',
    },
  } = o;

  commitRefresh(fileName, relativeFolder);
};
