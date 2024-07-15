const { promptInfo, promptSuccess, exec, promptEmptyLine } = require('./meta');
const { loopPackage } = require('./package.tools');
const {
  getDevelopSubPathVersionNcuConfig,
} = require('../config/develop.subPath.version.ncu');

function adjustMainPackageJsonByCommand(cmd) {
  promptInfo(`update main command: ${cmd}`);

  exec(cmd);
}

function adjustChildrenPackageJsonByCommand(cmd) {
  const { paths = [] } = {
    paths: [],
    ...getDevelopSubPathVersionNcuConfig(),
  };

  loopPackage(paths, ({ name, path }) => {
    const commandString = `cd ./${path}/${name} && ${cmd}`;

    promptInfo(`update child command: ${commandString}`);

    exec(`cd ./${path}/${name} && ${cmd}`);
  });
}

/**
 * update special package version
 * @param {Array} packageList
 */
function updateSpecialPackageVersion(packageList) {
  exec('npm run z:initial:environment');

  const packages = packageList.join(' ');

  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.js --packageFile package.json --registry https://registry.npmjs.org -u ${packages}`;

  promptInfo(`${packageList.join()} will check update`);

  adjustMainPackageJsonByCommand(ncuCommand);

  adjustChildrenPackageJsonByCommand(ncuCommand);

  promptSuccess('check success');
}

function updateAllPackageVersion() {
  exec('npm run z:initial:environment');

  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.js --packageFile package.json --registry https://registry.npmjs.org --workspaces --root -u`;

  promptInfo(`all packages version will update with command: ${ncuCommand}`);

  adjustMainPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');

  exec('npm run z:install');
}

function updateEveryPackageVersion() {
  exec('npm run z:initial:environment');

  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.js --packageFile package.json --registry https://registry.npmjs.org -u`;

  promptInfo(`all packages version will update with command: ${ncuCommand}`);

  adjustMainPackageJsonByCommand(ncuCommand);

  adjustChildrenPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');

  exec('npm run z:install');
}

function checkAllPackageVersion() {
  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.js --packageFile package.json --registry https://registry.npmjs.org --workspaces --root`;

  promptEmptyLine();

  promptInfo(
    `all packages version will check update with command: ${ncuCommand}`,
  );

  adjustMainPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');

  exec('npm run z:install');
}

function checkEveryPackageVersion() {
  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.js --packageFile package.json --registry https://registry.npmjs.org`;

  promptEmptyLine();

  promptInfo(
    `all packages version will check update with command: ${ncuCommand}`,
  );

  adjustMainPackageJsonByCommand(ncuCommand);

  adjustChildrenPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');

  exec('npm run z:install');
}

module.exports = {
  checkAllPackageVersion,
  checkEveryPackageVersion,
  updateAllPackageVersion,
  updateEveryPackageVersion,
  updateSpecialPackageVersion,
};
