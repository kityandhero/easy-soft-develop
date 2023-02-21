const {
  promptEmptyLine,
  promptInfo,
  promptSuccess,
  promptError,
  exec,
} = require('./meta');
const { loopPackage } = require('./package.tools');

function tryClean(cmd, tryTimes) {
  if (tryTimes > 5) {
    promptInfo(`clean fail, ignore`);

    return;
  }

  if (tryTimes > 1) {
    promptInfo(`retry time ${tryTimes}`);
  }

  try {
    exec(cmd);
  } catch (error) {
    tryTimes = tryTimes + 1;

    tryClean(cmd, tryTimes);
  }
}

function adjustMainPackageJson(command) {
  promptInfo(`clean main: ${command}`);

  let tryTimes = 1;

  tryClean(command, tryTimes);
}

function adjustChildrenPackageJson(command) {
  loopPackage(({ name, relativePath }) => {
    const cmd = `cd ${relativePath} && ${command}`;

    promptInfo(`clean package ${name}: ${cmd}`);

    let tryTimes = 1;

    tryClean(cmd, tryTimes);
  });
}

function clean(preCmd, ...targets) {
  promptInfo(
    'clean use rimraf, ensure rimraf is installed, install it use "npm install -g rimraf"',
  );

  try {
    const list = [...targets];

    list.push('node_modules');

    const command = list
      .map((o) => {
        if (o) {
          return `rimraf ./${o}`;
        }
        return '';
      })
      .join(' && ');

    promptInfo(`clean start`);
    promptEmptyLine();

    if (preCmd) {
      promptInfo(`clean by command: ${preCmd}`);

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
