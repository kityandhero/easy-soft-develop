const { promptSuccess, promptInfo } = require('./meta');
const { loopPackage } = require('./package.tools');
const { exec } = require('./shell');

function adjustMainPackageJson(command) {
  exec(command);
}

function adjustChildrenPackageJson(command) {
  loopPackage(({ name }) => {
    exec(`cd ./packages/${name} && ${command}`);
  });
}

function installGlobalDevDependencePackages(packageList) {
  const packages = [].concat(packageList);

  const command = `pnpm install -save-dev ${packages.join(' ')}`;

  promptInfo(`${packages.join()} will install`);

  adjustChildrenPackageJson(command);

  adjustMainPackageJson(command);

  promptSuccess('install success');
}

module.exports = { installGlobalDevDependencePackages };
