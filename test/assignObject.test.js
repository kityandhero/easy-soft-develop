const { assignObject, promptInfo } = require('../src/tools/meta');

const s = assignObject({}, { a: 1 }, { b: 2 }, { c: 3 }, { a: 4 });

promptInfo(JSON.stringify(s));

const s1 = assignObject({}, { a: 1 });

promptInfo(JSON.stringify(s1));
