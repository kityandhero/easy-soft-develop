const createProjectFromRepository = require('download-git-repo');

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
  promptTip,
} = require('../tools/meta');

exports.run = function (s, o) {
  const {
    _optionValues: { repository, folder, exampleUrl = '' },
  } = o;

  if (checkStringIsEmpty(folder)) {
    promptWarn('Please enter project folder name');

    exit();
  }

  if (checkStringIsEmpty(folder)) {
    promptWarn('project folder name not allow empty');

    exit();
  } else {
    if (checkStringIsEmpty(repository)) {
      promptError('repository not allow empty');

      exit();
    } else {
      const repositoryAdjust = repository;

      const folderPath = resolvePath(`./${folder}`);

      if (existDirectorySync(folderPath)) {
        promptWarn('project folder already exist, please choose another');

        exit();
      }

      mkdirSync(folderPath);

      promptTip('repository', repositoryAdjust);
      promptTip('folder', folder);

      promptInfo('download will start, please wait a moment...');

      createProjectFromRepository(
        repositoryAdjust,
        folderPath,
        { clone: false },
        (err) => {
          if (!err) {
            promptSuccess('download success');

            if (!checkStringIsEmpty(exampleUrl)) {
              promptTip('here is a example project repo', exampleUrl);
            }

            promptInfo('please modify info in package.json file');
          } else {
            promptError(err);
          }

          exit();
        },
      );
    }
  }
};
