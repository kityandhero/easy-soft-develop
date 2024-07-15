const { updateEveryPackageVersion } = require('../tools/package.update');

exports.run = function () {
  updateEveryPackageVersion();
};
