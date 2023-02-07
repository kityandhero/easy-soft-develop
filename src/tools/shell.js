const shell = require('shelljs');

function exec(cmd) {
  shell.exec(cmd);
}

// function cd(path) {
//   return shell.cd(path);
// }

function cd(path) {
  // eslint-disable-next-line no-undef
  process.chdir(path);
}

module.exports = { exec, cd };
