const download = require('download-git-repo');

const {
  promptError,
  exit,
  checkStringIsEmpty,
  promptWarn,
  mkdirSync,
  existDirectorySync,
  promptInfo,
  resolvePath,
  promptSuccess,
} = require('../tools/meta');

exports.run = function (s, o) {
  const {
    _optionValues: { templateUrl, folder, exampleUrl = '' },
  } = o;

  if (checkStringIsEmpty(folder)) {
    promptWarn('Please enter project folder name');

    exit();
  }

  if (checkStringIsEmpty(folder)) {
    promptWarn('project folder name not allow empty');

    exit();
  } else {
    const templateUrlAdjust = checkStringIsEmpty(templateUrl)
      ? 'kityandhero/mono-antd-management-fast-master-template'
      : templateUrl;

    const folderPath = resolvePath(`./${folder}`);

    if (existDirectorySync(folderPath)) {
      promptWarn('project folder already exist, please choose another');

      exit();
    }

    mkdirSync(folderPath);

    promptInfo(`template url:${templateUrlAdjust}`);
    promptInfo(`folder:${folder}`);
    promptInfo('download will start, please wait a moment...');

    download(templateUrlAdjust, folderPath, { clone: false }, (err) => {
      if (!err) {
        promptSuccess('download success');

        if (!checkStringIsEmpty(exampleUrl)) {
          promptInfo(`we build a example project repo is here: ${exampleUrl}`);
        }

        promptInfo('please modify info in package.json file');
      } else {
        promptError(err);
      }

      exit();
    });
  }
};
