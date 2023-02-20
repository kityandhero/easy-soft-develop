const { loopPackage } = require('../tools/package.tools');
const {
  exit,
  exec,
  promptInfo,
  promptSuccess,
  promptError,
  cd,
} = require('../tools/meta');

exports.run = function () {
  promptInfo('publish public package to npm');

  loopPackage(({ absolutePath }) => {
    cd(absolutePath);

    try {
      exec(`npm publish --registry https://registry.npmjs.org/`);
    } catch (error) {
      promptError(error);
    }
  });

  promptSuccess('publish complete');

  exit();
};
