import enquirer from 'enquirer';
const { prompt: promptAssist } = enquirer;

import { loopPackage } from '../tools/package.tools.js';
import {
  exit,
  exec,
  promptInfo,
  promptSuccess,
  promptError,
  cd,
  checkStringIsEmpty,
  checkInCollection,
  promptEmptyLine,
} from '../tools/meta.js';
import { getDevelopSubPathPublishConfig } from '../config/develop.subPath.publish.js';

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
    if (!checkInCollection(packageList, name)) {
      return;
    }

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
  });

  promptSuccess('publish complete');

  exit();
}

export default async function run(s, o) {
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
}
