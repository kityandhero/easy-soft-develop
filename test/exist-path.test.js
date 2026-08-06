import { existPathSync, promptLine, promptInfo } from '../src/tools/meta.js';

promptLine();

const result = existPathSync('./testPath');

promptInfo(`check path exist result: ${result}`);
