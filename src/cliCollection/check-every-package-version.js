const { checkEveryPackageVersion } = require('../tools/package.update');

exports.run = function () {
  checkEveryPackageVersion();
};
