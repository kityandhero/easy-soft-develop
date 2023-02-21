const {
  promptEmptyLine,
  promptInfo,
  promptSuccess,
  promptError,
  exec,
} = require('./meta');
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
    const list = [...targets];

    list.push('node_modules');

    const command = list
      .map((o) => {
        if (o) {
          return `npx rimraf ./${o}`;
        }
        return '';
      })
      .join(' && ');

    promptInfo(`clean start`);
    promptEmptyLine();

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
