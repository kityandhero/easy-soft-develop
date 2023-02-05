/* eslint-disable import/no-commonjs */

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

  console.log(`${packageList.join()} will install`);
  console.log('');

  adjustChildrenPackageJson();

  adjustMainPackageJson();

  console.log('install success');
}

module.exports = { initGlobalDevDependencePackages };
