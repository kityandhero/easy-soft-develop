const { assignObject, promptInfo } = require('../src/tools/meta');

const s = assignObject({}, { a: 1 }, { b: 2 }, { c: 3 });

promptInfo(JSON.stringify(s));
