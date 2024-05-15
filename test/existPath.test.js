const { existPathSync, promptLine, promptInfo } = require('../src/tools/meta');

promptLine();

const result = existPathSync('./testPath');

promptInfo(`check path exist result: ${result}`);
