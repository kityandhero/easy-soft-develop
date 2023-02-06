const { sleep } = require('../tools/sleep');

exports.run = function (s, o) {
  const {
    _optionValues: { second, showInfo = 'false' },
  } = o;

  sleep(second, showInfo == 'true');
};
