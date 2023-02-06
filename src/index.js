const { clean } = require('./tools/clean');
const { commitRefresh } = require('./tools/commit.refresh');
const {
  createCleanScriptFile,
  createCommitRefreshScriptFile,
  createPackageUpdateAllVersionScriptFile,
  createPackageCheckAllVersionScriptFile,
  createSleepScriptFile,
  createDevelopScriptFiles,
} = require('./tools/develop.assist');
const { initEnv } = require('./tools/init.env');
const {
  initGlobalDevDependencePackages,
} = require('./tools/package.init.global.dependence.dev');
const { loopPackage } = require('./tools/package.tools');
const {
  checkAllPackageVersion,
  updateSpecialPackageVersion,
  updateAllPackageVersion,
} = require('./tools/package.update');
const { exec } = require('./tools/shell');
const { sleep } = require('./tools/sleep');

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
  createCommitRefreshScriptFile,
  createPackageUpdateAllVersionScriptFile,
  createPackageCheckAllVersionScriptFile,
  createSleepScriptFile,
  createDevelopScriptFiles,
};
