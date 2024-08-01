const { copyContentSync } = require('../tools/meta');

exports.run = function (s, o) {
  const {
    _optionValues: { source = '', target = '' },
  } = o;

  copyContentSync({
    sourcePath: source,
    targetPath: target,
  });
};
