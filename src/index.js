const {
  assignObject,
  cd,
  checkInCollection,
  checkStringIsEmpty,
  copyFile,
  copyFileSync,
  copyFolder,
  copyFolderSync,
  exec,
  existDirectorySync,
  existFileSync,
  exit,
  getArgCollection,
  isArray,
  isObject,
  mkdirSync,
  promptBackgroundBlack,
  promptBackgroundGreen,
  promptBackgroundRed,
  promptBlack,
  promptEmptyLine,
  promptError,
  promptGreen,
  promptInfo,
  promptLine,
  promptMessage,
  promptRed,
  promptSuccess,
  promptTip,
  promptWarn,
  readJsonFileSync,
  resolvePath,
  writeFileSync,
  writeFileWithFolderAndNameSync,
  writeFileWithOptionsSync,
  writeJsonFileSync,
  copyContentSync,
  touchSync,
} = require('./tools/meta');
const { sleep } = require('./tools/sleep');
const { clean } = require('./tools/clean');
const { commitRefresh } = require('./tools/commit.refresh');
const {
  createCleanScriptFile,
  createPackageCheckSpecialVersionScriptFile,
  createInstallGlobalDevelopDependenceScriptFile,
  createDevelopFiles,
} = require('./tools/develop.file');
const { initialEnvironment } = require('./tools/initial.environment');
const {
  prettierAllPackageJson,
  prettierCurrentPackageJson,
} = require('./tools/prettier.package.json');
const {
  prettierAllFile,
  prettierChangeFile,
} = require('./tools/prettier.file');
const {
  installDevelopDependencePackages,
} = require('./tools/package.install.global.develop.dependence');
const { loopPackage } = require('./tools/package.tools');
const {
  checkAllPackageVersion,
  updateSpecialPackageVersion,
  updateAllPackageVersion,
} = require('./tools/package.update');
const {
  updatePackageFromPackage,
} = require('./tools/update.package.from.package');

module.exports = {
  assignObject,
  cd,
  checkAllPackageVersion,
  checkInCollection,
  checkStringIsEmpty,
  clean,
  commitRefresh,
  copyContentSync,
  copyFile,
  copyFileSync,
  copyFolder,
  copyFolderSync,
  createCleanScriptFile,
  createDevelopFiles,
  createInstallGlobalDevelopDependenceScriptFile,
  createPackageCheckSpecialVersionScriptFile,
  exec,
  existDirectorySync,
  existFileSync,
  exit,
  getArgCollection,
  initialEnvironment,
  installDevelopDependencePackages,
  isArray,
  isObject,
  loopPackage,
  mkdirSync,
  prettierAllFile,
  prettierAllPackageJson,
  prettierChangeFile,
  prettierCurrentPackageJson,
  promptBackgroundBlack,
  promptBackgroundGreen,
  promptBackgroundRed,
  promptBlack,
  promptEmptyLine,
  promptError,
  promptGreen,
  promptInfo,
  promptLine,
  promptMessage,
  promptRed,
  promptSuccess,
  promptTip,
  promptWarn,
  readJsonFileSync,
  resolvePath,
  sleep,
  touchSync,
  updateAllPackageVersion,
  updatePackageFromPackage,
  updateSpecialPackageVersion,
  writeFileSync,
  writeFileWithFolderAndNameSync,
  writeFileWithOptionsSync,
  writeJsonFileSync,
};
