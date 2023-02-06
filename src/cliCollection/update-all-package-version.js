const { updateAllPackageVersion } = require('../tools/package.update');

exports.run = function () {
  updateAllPackageVersion();
};
