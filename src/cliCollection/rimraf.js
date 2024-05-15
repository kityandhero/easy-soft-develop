const { rimraf } = require('../tools/meta');

exports.run = function (s, o) {
  const {
    _optionValues: { path = '' },
  } = o;

  rimraf(path);
};
