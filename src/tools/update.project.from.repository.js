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
  existFileSync,
  promptEmptyLine,
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
  syncConfigs,
  syncFolders,
  syncFiles,
  ignoreSyncWhenExistFiles,
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

    //#region sync configs

    promptTip('*', 'sync configs.');
    promptEmptyLine();

    if (syncConfigs.length === 0) {
      promptWarn(
        'none file will force sync, if need, please set "syncConfigs" in "develop.update.project.from.repository.json".',
      );
    }

    for (const itemFile of syncConfigs) {
      copyFileSync({
        sourceMainPath,
        targetMainPath,
        filepath: itemFile,
      });
    }

    //#endregion

    //#region sync files

    promptTip('*', 'sync files.');
    promptEmptyLine();

    if (syncFiles.length === 0) {
      promptWarn(
        'none file will force sync, if need, please set "syncFiles" in "develop.update.project.from.repository.json".',
      );
    }

    for (const itemFile of syncFiles) {
      copyFileSync({
        sourceMainPath,
        targetMainPath,
        filepath: itemFile,
      });
    }

    //#endregion

    //#region sync files when not exist

    promptTip('*', 'sync files when not exist.');
    promptEmptyLine();

    if (ignoreSyncWhenExistFiles.length === 0) {
      promptWarn(
        'none file will sync when it not exist, if need, please set "ignoreSyncWhenExistFiles" in "develop.update.project.from.repository.json".',
      );
    }

    for (const itemFile of ignoreSyncWhenExistFiles) {
      if (existFileSync(`./${targetMainPath}/${itemFile}`)) {
        promptInfo(`ignore copy file: "${itemFile}".`);

        continue;
      }

      copyFileSync({
        sourceMainPath,
        targetMainPath,
        filepath: itemFile,
      });
    }

    //#endregion

    //#region sync folders

    promptTip('*', 'sync folders.');
    promptEmptyLine();

    if (syncFolders.length === 0) {
      promptWarn(
        'none folders will sync, if need, please set "syncFolders" in "develop.update.project.from.repository.json".',
      );
    }

    for (const itemFolder of syncFolders) {
      copyFolderSync({
        sourceMainPath,
        targetMainPath,
        filepath: itemFolder,
      });
    }

    //#endregion

    promptTip('*', 'clear resource.');
    promptEmptyLine();

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
    syncConfigs = [],
    syncFolders = [],
    syncFiles = [],
    ignoreSyncWhenExistFiles = [],
  } = {
    repository: '',
    sourcePath: '',
    targetPath: '',
    syncConfigs: [],
    syncFolders: [],
    syncFiles: [],
    ignoreSyncWhenExistFiles: [],
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
    syncConfigs,
    syncFolders,
    syncFiles,
    ignoreSyncWhenExistFiles,
  });
}

module.exports = { updateProjectFromRepository };
