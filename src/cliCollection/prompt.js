const {
  promptInfo,
  checkStringIsEmpty,
  promptEmptyLine,
  promptSuccess,
  promptWarn,
  promptError,
  promptLine,
} = require('../tools/meta');

exports.run = function (s, o) {
  const {
    _optionValues: { message = '', type = 'info', blankLine = '0' },
  } = o;

  if (checkStringIsEmpty(message)) {
    promptEmptyLine();
  }

  if (blankLine !== '0') {
    promptEmptyLine();
  }

  switch (type) {
    case 'info':
      promptInfo(message);

      break;

    case 'success':
      promptSuccess(message);

      break;

    case 'warn':
      promptWarn(message);

      break;

    case 'error':
      promptError(message);

      break;

    case 'line':
      promptLine(message);

      break;

    default:
      promptInfo(message);
  }
};
