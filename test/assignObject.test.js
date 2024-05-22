const {
  assignObject,
  promptEmptyLine,
  promptInfo,
  promptLine,
  promptTip,
  promptBlack,
  promptBackgroundBlack,
  promptBackgroundRed,
  promptRed,
  promptBackgroundGreen,
  promptGreen,
  promptMessage,
} = require('../src/tools/meta');

const term = require('terminal-kit').terminal;

const s = assignObject({}, { a: 1 }, { b: 2 }, { c: 3 }, { a: 4 });

promptInfo(JSON.stringify(s));

const s1 = assignObject({}, { a: 1 });

promptInfo(JSON.stringify(s1));

promptLine();

term.gray('term.gray');

promptEmptyLine();

term.bold('term.bold');

promptEmptyLine();

term.bold.underline.red('term.bold.underline.red');

promptEmptyLine();

term.green('term.green');

promptEmptyLine();

term('My name is ').red('Jack')(" and I'm ").green('32\n');

promptEmptyLine();

term.red.bgBlue.bold.italic('Hello world!');

promptEmptyLine();

promptTip('title', 'message');

promptEmptyLine();

promptMessage(
  'promptMessage',
  {
    bold: true,
    dim: true,
    underline: true,
    italic: true,
    blink: true,
    inverse: true,
    strike: true,
  },
  true,
);

promptBlack('promptBlack', false);
promptBackgroundBlack('promptBlack');
promptRed('promptBlack', false);
promptBackgroundRed('promptBlack');
promptGreen('promptBlack', false);
promptBackgroundGreen('promptBlack');

promptLine();
