const { promptInfo, promptSuccess, exec, promptEmptyLine } = require('./meta');
const { loopPackage } = require('./package.tools');

function adjustMainPackageJsonByCommand(cmd) {
  promptInfo(`update main command: ${cmd}`);

  exec(cmd);
}

function adjustChildrenPackageJsonByCommand(cmd) {
  loopPackage(({ name }) => {
    const commandString = `cd ./packages/${name} && ${cmd}`;

    promptInfo(`update child command: ${commandString}`);

    exec(`cd ./packages/${name} && ${cmd}`);
  });
}

function checkEasySoftDevelopVersion() {
  promptInfo('check easy-soft-develop version');

  exec('ncu -g easy-soft-develop');
}

/**
 * update special package version
 * @param {Array} packageList
 */
function updateSpecialPackageVersion(packageList) {
  exec('npm run z:initial:environment');

  const packages = packageList.join(' ');

  const ncuCommand = `npx ncu -u ${packages} --packageFile package.json`;

  promptInfo(`${packageList.join()} will check update`);

  adjustMainPackageJsonByCommand(ncuCommand);

  adjustChildrenPackageJsonByCommand(ncuCommand);

  checkEasySoftDevelopVersion();

  promptSuccess('check success');
}

function updateAllPackageVersion() {
  exec('npm run z:initial:environment');

  const ncuCommand = `npx ncu -u --packageFile package.json`;

  promptInfo(`all packages version will update`);

  adjustMainPackageJsonByCommand(ncuCommand);

  adjustChildrenPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');

  exec('npm run z:install');

  checkEasySoftDevelopVersion();
}

function checkAllPackageVersion() {
  const ncuCommand = `npx ncu --packageFile package.json`;

  promptEmptyLine();

  promptInfo(`all packages version will check update`);

  adjustMainPackageJsonByCommand(ncuCommand);

  adjustChildrenPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');

  exec('npm run z:install');

  checkEasySoftDevelopVersion();
}

module.exports = {
  checkAllPackageVersion,
  updateSpecialPackageVersion,
  updateAllPackageVersion,
};
