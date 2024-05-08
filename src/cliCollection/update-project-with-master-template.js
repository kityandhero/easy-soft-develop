const download = require('download');
const agent = require('hpagent');
const fs = require('fs');
const unzipper = require('unzipper');

const {
  promptSuccess,
  promptLine,
  promptError,
  promptWarn,
  exit,
  // readJsonFileSync,
  resolvePath,
  // writeJsonFileSync,
  checkStringIsEmpty,
} = require('../tools/meta');

const { HttpsProxyAgent } = agent;

function handlePackage(zipPath) {
  const unzipPath = resolvePath(`./temp/source/`);

  fs.createReadStream(zipPath).pipe(unzipper.Extract({ path: unzipPath }));

  return;

  // promptSuccess(`referential package.json :${packageTempPath}`);

  // const packageProjectPath = resolvePath(packageFilePath);

  // const packageJsonTemp = readJsonFileSync(packageTempPath);

  // const packageJsonTarget = readJsonFileSync(packageProjectPath);

  // const dependencies = packageJsonTemp.dependencies;
  // const devDependencies = packageJsonTemp.devDependencies;

  // packageJsonTarget.dependencies = dependencies;
  // packageJsonTarget.devDependencies = devDependencies;

  // writeJsonFileSync(packageProjectPath, packageJsonTarget, { coverFile: true });

  // promptSuccess(`update package.json success!`);

  // promptLine();

  // exit();
}

async function handleTempPackagePath({ agent, packageUrl, repo }) {
  let zipPath = '';

  promptSuccess(`try ${repo} repo`);

  if (agent) {
    promptSuccess(`agent: ${agent}`);
  }

  promptSuccess(`${repo} repo: ${packageUrl}`);

  await download(packageUrl, resolvePath(`./temp/zip`), {
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

  zipPath = resolvePath(
    `./temp/zip/mono-antd-management-fast-master-template-main.zip`,
  );

  promptSuccess(`packageTempPath: ${zipPath}`);

  return zipPath;
}

async function updatePackageFromRepository({ agent }) {
  const repositoryRemoteUrl =
    'https://codeload.github.com/kityandhero/mono-antd-management-fast-master-template/zip/refs/heads/main';

  if (checkStringIsEmpty(repositoryRemoteUrl)) {
    promptError('please input primary remote package.json url');

    exit();
  }

  let zipPath = '';

  promptSuccess(`prepare to update package.json: `);

  promptLine();

  try {
    zipPath = await handleTempPackagePath({
      agent,
      packageUrl: repositoryRemoteUrl,
      repo: 'github',
    });
  } catch (error) {
    if (checkStringIsEmpty(repositoryRemoteUrl)) {
      promptError('please input repository remote url');

      exit();
    }

    promptLine();

    promptWarn(`use github repository failure! `);

    promptLine();
  }

  handlePackage(zipPath);
}

module.exports = { updatePackageFromRepository };
