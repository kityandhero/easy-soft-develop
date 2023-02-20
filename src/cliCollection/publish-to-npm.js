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
} = require('../tools/meta');

exports.run = function (s, o) {
  const {
    _optionValues: { packages },
  } = o;

  if (checkStringIsEmpty(packages)) {
    exit();
  }

  const packageList = packages.split(',');

  promptInfo('publish public packages to npm');

  loopPackage(({ name, absolutePath }) => {
    if (checkInCollection(packageList, name)) {
      cd(absolutePath);

      try {
        exec(`npm publish --registry https://registry.npmjs.org/`);
      } catch (error) {
        promptError(error);
      }
    }
  });

  promptSuccess('publish complete');

  exit();
};
