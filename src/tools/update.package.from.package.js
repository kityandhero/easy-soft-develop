const download = require('download');
const agent = require('hpagent');

const {
  promptSuccess,
  promptLine,
  promptError,
  promptWarn,
  exit,
  readJsonFileSync,
  resolvePath,
  writeJsonFileSync,
  checkStringIsEmpty,
} = require('../tools/meta');

const { HttpsProxyAgent } = agent;

function handlePackage({ packageFilePath, packageTempPath }) {
  promptSuccess(`referential package.json :${packageTempPath}`);

  const packageProjectPath = resolvePath(packageFilePath);

  const packageJsonTemp = readJsonFileSync(packageTempPath);

  const packageJsonTarget = readJsonFileSync(packageProjectPath);

  const dependencies = packageJsonTemp.dependencies;
  const devDependencies = packageJsonTemp.devDependencies;

  packageJsonTarget.dependencies = dependencies;
  packageJsonTarget.devDependencies = devDependencies;

  writeJsonFileSync(packageProjectPath, packageJsonTarget, { coverFile: true });

  promptSuccess(`update package.json success!`);

  promptLine();

  exit();
}

async function handleTempPackagePath({ agent, localFile, packageUrl, repo }) {
  let packageTempPath = '';

  if (localFile) {
    promptSuccess(`use local referential package.json`);

    promptSuccess(`file path: ${localFile}`);

    promptLine();

    packageTempPath = resolvePath(localFile);
  } else {
    promptSuccess(`try ${repo} repo`);

    if (agent) {
      promptSuccess(`agent: ${agent}`);
    }

    promptSuccess(`${repo} repo: ${packageUrl}`);

    await download(packageUrl, resolvePath(`./temp`), {
      ...(agent
        ? {
            agent: {
              https: new HttpsProxyAgent({
                keepAlive: true,
                keepAliveMsecs: 1000,
                maxSockets: 256,
                maxFreeSockets: 256,
                scheduling: 'lifo',
                proxy: agent,
              }),
            },
          }
        : {}),
    });

    promptSuccess(`use ${repo} repo success!`);

    packageTempPath = resolvePath(`./temp/package.json`);

    promptSuccess(`packageTempPath: ${packageTempPath}`);
  }

  return packageTempPath;
}

async function updatePackageFromPackage({
  path,
  primaryRemoteUrl,
  spareRemoteUrl,
  agent,
  localFile,
}) {
  if (checkStringIsEmpty(primaryRemoteUrl)) {
    promptError('please input primary remote package.json url');

    exit();
  }

  let packageTempPath = '';

  promptSuccess(`prepare to update package.json: `);

  promptLine();

  try {
    packageTempPath = await handleTempPackagePath({
      agent,
      localFile,
      packageUrl: primaryRemoteUrl,
      repo: 'github',
    });
  } catch (error) {
    if (checkStringIsEmpty(primaryRemoteUrl)) {
      promptError('please input spare remote package.json url');

      exit();
    }

    promptLine();

    promptWarn(
      `use github repo failure! switch to gitee, gitee repo possible update delay.`,
    );

    promptLine();

    try {
      packageTempPath = await handleTempPackagePath({
        agent: '',
        localFile,
        packageUrl: spareRemoteUrl,
        repo: 'gitee',
      });
    } catch (error) {
      promptLine();

      promptError(error);

      promptLine();

      promptWarn('download error, please check network');

      exit();
    }
  }

  handlePackage(path, packageTempPath);
}

module.exports = { updatePackageFromPackage };
