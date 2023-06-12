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

exports.run = function (s, o) {
  const {
    _optionValues: { packages, opt },
  } = o;

  if (checkStringIsEmpty(packages)) {
    exit();
  }

  const useOpt = !!opt;

  const packageList = packages.split(',');

  promptInfo('publish public packages to npm');

  loopPackage(({ name, absolutePath }) => {
    if (checkInCollection(packageList, name)) {
      cd(absolutePath);

      try {
        promptInfo(
          `package ${name}: npm publish --registry https://registry.npmjs.org/${
            useOpt ? ' --opt' : ''
          }`,
        );

        exec(
          `npm publish --registry https://registry.npmjs.org/${
            useOpt ? ' --opt' : ''
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
};
