/* eslint-disable no-undef */

const { promptInfo } = require('./meta');

function mSleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

function sleep(n, showLog = false) {
  if (n <= 0) {
    return;
  }

  if (showLog) {
    promptInfo(`sleep ${n}s`);
  }

  mSleep(n * 1000);
}

module.exports = { sleep };
