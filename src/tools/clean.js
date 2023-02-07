const { exec } = require('../tools/shell');
const { promptNewLine, promptInfo, promptSuccess, promptError } = require('./meta');
const { loopPackage } = require('./package.tools');

function adjustMainPackageJson(command) {
  exec(command);
}

function adjustChildrenPackageJson(command) {
  loopPackage(({ name }) => {
    exec(`cd ./packages/${name} && ${command}`);
  });
}

function clean(preCmd, ...targets) {
  try {
    const list = targets.push('node_modules');

    const command = list
      .map((o) => {
        if (o) {
          return `npx rimraf ./${o}`;
        }
        return '';
      })
      .join(' && ');

    promptInfo(`clean start`);
    promptNewLine();

    if (preCmd) {
      exec(preCmd);
    }

    adjustChildrenPackageJson(command);

    adjustMainPackageJson(command);

    promptSuccess('clean success');
  } catch (error) {
    promptError(error);
  }
}

module.exports = { clean };
