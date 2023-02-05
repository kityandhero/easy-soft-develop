/* eslint-disable import/no-commonjs */

const { loopPackage } = require('./package.tools');
const { exec } = require('./shell');

function adjustMainPackageJson(cmd) {
  exec(cmd);
}

function adjustChildrenPackageJson(cmd) {
  loopPackage(({ name }) => {
    exec(`cd ./packages/${name} && ${cmd}`);
  });
}

function updateSpecialPackageVersion(packageList) {
  const ncuCommand = `npx ncu -u ${packageList.join(
    ' ',
  )} --packageFile package.json`;

  console.log(`${packageList.join()} will check update`);
  console.log('');

  adjustMainPackageJson(ncuCommand);

  adjustChildrenPackageJson(ncuCommand);

  console.log('update success');
}

function updateAllPackageVersion() {
  const ncuCommand = `npx ncu -u --packageFile package.json`;

  console.log(`all packages will update`);
  console.log('');

  adjustMainPackageJson(ncuCommand);

  adjustChildrenPackageJson(ncuCommand);

  console.log('update success');
}

function checkAllPackageVersion() {
  const ncuCommand = `npx ncu -u --packageFile package.json`;

  console.log(`all packages will check update`);
  console.log('');

  adjustMainPackageJson(ncuCommand);

  adjustChildrenPackageJson(ncuCommand);

  console.log('update success');
}

module.exports = {
  checkAllPackageVersion,
  updateSpecialPackageVersion,
  updateAllPackageVersion,
};
