const { prompt: promptAssist } = require('enquirer');

const { loopPackage } = require('../tools/package.tools');
const {
  exit,
  exec,
  promptInfo,
  promptSuccess,
  promptError,
  cd,
  checkStringIsEmpty,
  checkInCollection,
  promptEmptyLine,
} = require('../tools/meta');

function publishToNpm(packages, o, useOpt, opt) {
  if (checkStringIsEmpty(packages)) {
    exit();
  }

  const packageList = packages.split(',');

  promptInfo('publish public packages to npm');

  loopPackage(({ name, absolutePath }) => {
    if (checkInCollection(packageList, name)) {
      cd(absolutePath);

      try {
        promptInfo(
          `package ${name}: npm publish --registry https://registry.npmjs.org/${
            useOpt ? ` --opt ${opt}` : ''
          }`,
        );

        exec(
          `npm publish --registry https://registry.npmjs.org/${
            useOpt ? ` --opt ${opt}` : ''
          }`,
        );

        promptEmptyLine();
      } catch (error) {
        promptError(error);
      }
    }
  });

  promptSuccess('publish complete');

  exit();
}

exports.run = async function (s, o) {
  const { packages, opt: useOpt } = s;

  const useOptAdjust = !!useOpt;

  if (!useOptAdjust) {
    publishToNpm(packages, o, useOptAdjust, '');

    return;
  }

  const { opt } = await promptAssist({
    type: 'input',
    name: 'opt',
    message: 'input npm one-time password',
  });

  publishToNpm(packages, o, useOptAdjust, opt);
};
