import { promptInfo, promptSuccess, exec, promptEmptyLine } from './meta.js';
import { loopPackage } from './package.tools.js';
import { getDevelopSubPathVersionNcuConfig } from '../config/develop.subPath.version.ncu.js';

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
export function updateSpecialPackageVersion(packageList) {
  exec('npm run z:initial:environment');

  const packages = packageList.join(' ');

  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.mjs --packageFile package.json --registry https://registry.npmjs.org -u ${packages}`;

  promptInfo(`${packageList.join(',')} will check update`);

  adjustMainPackageJsonByCommand(ncuCommand);

  adjustChildrenPackageJsonByCommand(ncuCommand);

  promptSuccess('check success');
}

export function updateAllPackageVersion({ autoInstall = true }) {
  exec('npm run z:initial:environment');

  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.mjs --packageFile package.json --registry https://registry.npmjs.org --workspaces --root -u`;

  promptInfo(`all packages version will update with command: ${ncuCommand}`);

  adjustMainPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');

  if (autoInstall) {
    exec('npm run z:install');
  }
}

export function updateEveryPackageVersion({ autoInstall = true }) {
  exec('npm run z:initial:environment');

  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.mjs --packageFile package.json --registry https://registry.npmjs.org -u`;

  promptInfo(`all packages version will update with command: ${ncuCommand}`);

  adjustMainPackageJsonByCommand(ncuCommand);

  adjustChildrenPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');

  if (autoInstall) {
    exec('npm run z:install');
  }
}

export function checkAllPackageVersion() {
  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.mjs --packageFile package.json --registry https://registry.npmjs.org --workspaces --root`;

  promptEmptyLine();

  promptInfo(
    `all packages version will check update with command: ${ncuCommand}`,
  );

  adjustMainPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');
}

export function checkEveryPackageVersion() {
  const ncuCommand = `npx npm-check-updates --configFilePath ./.ncurc.mjs --packageFile package.json --registry https://registry.npmjs.org`;

  promptEmptyLine();

  promptInfo(
    `all packages version will check update with command: ${ncuCommand}`,
  );

  adjustMainPackageJsonByCommand(ncuCommand);

  adjustChildrenPackageJsonByCommand(ncuCommand);

  promptSuccess('update success, exec install with z:install');
}
