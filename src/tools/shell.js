/* eslint-disable import/no-commonjs */

const shell = require('shelljs');

function exec(cmd) {
  shell.exec(cmd);
}

module.exports = { exec };
