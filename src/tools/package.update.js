const { promptInfo, promptSuccess } = require('./meta');
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
  const packages = packageList.join(' ');

  const ncuCommand = `npx ncu -u ${packages} --packageFile package.json`;

  promptInfo(`${packageList.join()} will check update`);

  adjustMainPackageJson(ncuCommand);

  adjustChildrenPackageJson(ncuCommand);

  promptSuccess('check success');
}

function updateAllPackageVersion() {
  const ncuCommand = `npx ncu -u --packageFile package.json`;

  promptInfo(`all packages version will update`);

  adjustMainPackageJson(ncuCommand);

  adjustChildrenPackageJson(ncuCommand);

  promptSuccess('update success, please exec install');
}

function checkAllPackageVersion() {
  const ncuCommand = `npx ncu --packageFile package.json`;

  promptInfo(`all packages version will check update`);

  adjustMainPackageJson(ncuCommand);

  adjustChildrenPackageJson(ncuCommand);

  promptSuccess('update success, please exec install');
}

module.exports = {
  checkAllPackageVersion,
  updateSpecialPackageVersion,
  updateAllPackageVersion,
};
