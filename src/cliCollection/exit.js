const { exit, promptInfo } = require('../tools/meta');

exports.run = function () {
  promptInfo('exit process');

  exit();
};
