const { checkAllPackageVersion } = require('../tools/package.update');

exports.run = function () {
  checkAllPackageVersion();
};
