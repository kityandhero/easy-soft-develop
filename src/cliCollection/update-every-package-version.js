const { updateEveryPackageVersion } = require('../tools/package.update');

exports.run = function (s, o) {
  const {
    _optionValues: { autoInstall = true },
  } = o;

  updateEveryPackageVersion({ autoInstall: autoInstall || false });
};
