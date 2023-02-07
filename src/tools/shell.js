const shell = require('shelljs');

function exec(cmd) {
  shell.exec(cmd);
}

function cd(path) {
  return shell.cd(path);
}

module.exports = { exec, cd };
