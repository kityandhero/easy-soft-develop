const download = require('download');
const agent = require('hpagent');
const zip = require('cross-zip');

const {
  promptSuccess,
  promptLine,
  promptError,
  promptWarn,
  exit,
  resolvePath,
  checkStringIsEmpty,
  promptInfo,
  exec,
  copyFileSync,
  copyFolderSync,
  promptTip,
} = require('./meta');

const {
  getDevelopUpdateProjectFromRepositoryConfig,
} = require('../config/develop.update.project.from.repository');

const { HttpsProxyAgent } = agent;

const zipFileName = 'repositorySource';

function clearResource() {
  const removeSourceFolderCmd = `rimraf ${resolvePath(`./temp/source/`)}`;

  promptInfo(`remove folder: "./temp/source/"`);

  exec(removeSourceFolderCmd);

  const removeZipFolderCmd = `rimraf ${resolvePath(`./temp/zip/`)}`;

  promptInfo(`remove folder: "./temp/zip/"`);

  exec(removeZipFolderCmd);
}

function handlePackage({
  projectPath,
  zipPath,
  sourcePath,
  targetPath,
  folders,
  files,
}) {
  const unzipPath = resolvePath(`./temp/source/`);

  zip.unzip(zipPath, unzipPath, () => {
    promptSuccess(`unzip success.`);

    promptTip('repository zip file unzip to path', unzipPath);

    const projectPathAdjust = resolvePath(projectPath);

    promptInfo(`target project path: "${projectPathAdjust}".`);

    const sourceMainPath = `./temp/source/${sourcePath}`;
    const targetMainPath = `${projectPath}/${targetPath}`;

    promptLine();

    for (const itemFolder of folders) {
      copyFolderSync({
        sourceMainPath,
        targetMainPath,
        filepath: itemFolder,
      });
    }

    for (const itemFile of files) {
      copyFileSync({
        sourceMainPath,
        targetMainPath,
        filepath: itemFile,
      });
    }

    clearResource();
  });
}

async function handleTempPackagePath({ agent, packageUrl, repo }) {
  let zipPath = '';

  let agentInfo = '';

  if (checkStringIsEmpty(agent)) {
    agentInfo = `download with none agent`;
  } else {
    agentInfo = `download with agent "${agent}"`;
  }

  promptInfo(
    `try master management template ${repo} repository, ${agentInfo}.`,
  );

  if (agent) {
    promptSuccess(`agent: ${agent}`);
  }

  promptInfo(`${repo} repository: "${packageUrl}".`);

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
    filename: `${zipFileName}.zip`,
  });

  promptSuccess(`download zip from ${repo} repository success!`);

  zipPath = resolvePath(`./temp/zip/${zipFileName}.zip`);

  promptInfo(`master template zip file Path: "${zipPath}".`);

  return zipPath;
}

async function updateProjectFromRepository({ projectPath = '.', agent }) {
  clearResource();

  const {
    repository = '',
    sourcePath = '',
    targetPath = '',
    folders = [],
    files = [],
  } = {
    repository: '',
    sourcePath: '',
    targetPath: '',
    folders: [],
    files: [],
    ...getDevelopUpdateProjectFromRepositoryConfig(),
  };

  const repositoryRemoteUrl = repository;

  if (checkStringIsEmpty(repositoryRemoteUrl)) {
    promptError('please input primary remote package.json url');

    exit();
  }

  let zipPath = '';

  promptSuccess(`prepare to update from master template: `);

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

  handlePackage({
    projectPath,
    zipPath,
    sourcePath,
    targetPath,
    folders,
    files,
  });
}

module.exports = { updateProjectFromRepository };
