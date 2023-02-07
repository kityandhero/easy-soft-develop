const { promptSuccess, promptInfo } = require('./meta');
const { loopPackage } = require('./package.tools');
const { exec } = require('./shell');

function installGlobalDevDependencePackages(packageList) {
  const packages = [].concat(packageList);

  const command = `pnpm install -save-dev ${packages.join(' ')}`;

  function adjustMainPackageJson() {
    exec(command);
  }

  function adjustChildrenPackageJson() {
    loopPackage(({ name }) => {
      exec(`cd ./packages/${name} && ${command}`);
    });
  }

  promptInfo(`${packages.join()} will install`);

  adjustChildrenPackageJson();

  adjustMainPackageJson();

  promptSuccess('install success');
}

module.exports = { installGlobalDevDependencePackages };
