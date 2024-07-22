const { updateAllPackageVersion } = require('../tools/package.update');

exports.run = function (s, o) {
  const {
    _optionValues: { autoInstall = true },
  } = o;

  updateAllPackageVersion({ autoInstall: autoInstall || false });
};
