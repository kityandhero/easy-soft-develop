/* eslint-disable import/no-commonjs */

const { exec } = require('./shell');

function clean(preCmd, ...targets) {
  try {
    const { loopPackage } = require('./package.assist');

    const list = targets.push('node_modules');

    const command = list
      .map((o) => {
        if (o) {
          return `npx rimraf ./${o}`;
        }
        return '';
      })
      .join(' && ');

    function adjustMainPackageJson() {
      exec(command);
    }

    function adjustChildrenPackageJson() {
      loopPackage(({ name }) => {
        exec(`cd ./packages/${name} && ${command}`);
      });
    }

    console.log(`clean start`);
    console.log('');

    if (preCmd) {
      exec(preCmd);
    }

    adjustChildrenPackageJson();

    adjustMainPackageJson();

    console.log('clean success');
  } catch {}
}

module.exports = { clean };
