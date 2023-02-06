const { promptSuccess, promptInfo } = require('./meta');
const { loopPackage } = require('./package.tools');
const { exec } = require('./shell');

function initGlobalDevDependencePackages(packageList) {
  const command = `pnpm install -save-dev ${packageList.join(' ')}`;

  function adjustMainPackageJson() {
    exec(command);
  }

  function adjustChildrenPackageJson() {
    loopPackage(({ name }) => {
      exec(`cd ./packages/${name} && ${command}`);
    });
  }

  promptInfo(`${packageList.join()} will install`);

  adjustChildrenPackageJson();

  adjustMainPackageJson();

  promptSuccess('install success');
}

module.exports = { initGlobalDevDependencePackages };
