const { clean } = require('./clean');
const { commitRefresh } = require('./commit.refresh');
const { createCleanScriptFile } = require('./develop.assist');
const { initEnv } = require('./init.env');
const {
  initGlobalDevDependencePackages,
} = require('./package.init.global.dependence.dev');
const { loopPackage } = require('./package.tools');
const {
  checkAllPackageVersion,
  updateSpecialPackageVersion,
  updateAllPackageVersion,
} = require('./package.update');
const { exec } = require('./shell');
const { sleep } = require('./sleep');

module.exports = {
  clean,
  commitRefresh,
  initEnv,
  initGlobalDevDependencePackages,
  loopPackage,
  checkAllPackageVersion,
  updateSpecialPackageVersion,
  updateAllPackageVersion,
  exec,
  sleep,
  createCleanScriptFile,
};
