import createProjectFromRepository from 'download-git-repo';

import {
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
} from '../tools/meta.js';

export default function run(s, o) {
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
      const repoAdjust = repository;

      const folderPath = resolvePath(`./${folder}`);

      if (existDirectorySync(folderPath)) {
        promptWarn('project folder already exist, please choose another');

        exit();
      }

      mkdirSync(folderPath);

      promptTip('repository', repoAdjust);
      promptTip('folder', folder);

      promptInfo('download will start, please wait a moment...');

      createProjectFromRepository(
        repoAdjust,
        folderPath,
        { clone: false },
        (error_) => {
          if (error_) {
            promptError(error_);
          } else {
            promptSuccess('download success');

            if (!checkStringIsEmpty(exampleUrl)) {
              promptTip('here is a example project repo', exampleUrl);
            }

            promptInfo('please modify info in package.json file');
          }

          exit();
        },
      );
    }
  }
}
