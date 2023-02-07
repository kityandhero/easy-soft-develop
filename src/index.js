const { clean } = require('./tools/clean');
const { commitRefresh } = require('./tools/commit.refresh');
const { createCleanScriptFile, createPackageCheckSpecialVersionScriptFile, createInstallGlobalDevDependenceScriptFile, createDevelopScriptFiles } = require('./tools/develop.assist');
const { configEnvironment } = require('./tools/config.environment');
const { prettierAllPackageJson, prettierCurrentPackageJson } = require('./tools/prettier.package.json');
const { prettierAllFile, prettierChangeFile } = require('./tools/prettier.file');
const { installGlobalDevDependencePackages } = require('./tools/package.init.global.dependence.dev');
const { loopPackage } = require('./tools/package.tools');
const { checkAllPackageVersion, updateSpecialPackageVersion, updateAllPackageVersion } = require('./tools/package.update');
const { exec } = require('./tools/shell');
const { sleep } = require('./tools/sleep');

module.exports = {
  clean,
  commitRefresh,
  configEnvironment,
  installGlobalDevDependencePackages,
  loopPackage,
  checkAllPackageVersion,
  updateSpecialPackageVersion,
  updateAllPackageVersion,
  exec,
  sleep,
  createCleanScriptFile,
  createPackageCheckSpecialVersionScriptFile,
  createInstallGlobalDevDependenceScriptFile,
  createDevelopScriptFiles,
  prettierAllFile,
  prettierChangeFile,
  prettierAllPackageJson,
  prettierCurrentPackageJson,
};
