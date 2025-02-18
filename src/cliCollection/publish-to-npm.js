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

const {
  getDevelopSubPathPublishConfig,
} = require('../config/develop.subPath.publish');

function publishToNpm(packages, o, useOtp, otp) {
  if (checkStringIsEmpty(packages)) {
    exit();
  }

  const packageList = packages.split(',');

  promptInfo('publish public packages to npm');

  const { paths = [] } = {
    paths: [],
    ...getDevelopSubPathPublishConfig(),
  };

  loopPackage(paths, ({ name, absolutePath }) => {
    if (checkInCollection(packageList, name)) {
      cd(absolutePath);

      try {
        promptInfo(
          `package ${name}: npm publish --registry https://registry.npmjs.org/${
            useOtp ? ` --otp ${otp}` : ''
          }`,
        );

        exec(
          `npm publish --registry https://registry.npmjs.org/${
            useOtp ? ` --otp ${otp}` : ''
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
  const { packages, otp: useOtp } = s;

  const useOtpAdjust = !!useOtp;

  if (!useOtpAdjust) {
    publishToNpm(packages, o, useOtpAdjust, '');

    return;
  }

  const { otp } = await promptAssist({
    type: 'input',
    name: 'otp',
    message: 'input npm one-time password',
  });

  publishToNpm(packages, o, useOtpAdjust, otp);
};
