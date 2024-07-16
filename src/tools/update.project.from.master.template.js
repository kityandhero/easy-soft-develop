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
} = require('./meta');

const { HttpsProxyAgent } = agent;

function clearResource() {
  const removeSourceFolderCmd = `rimraf ${resolvePath(`./temp/source/`)}`;

  promptInfo(`remove folder: "./temp/source/"`);

  exec(removeSourceFolderCmd);

  const removeZipFolderCmd = `rimraf ${resolvePath(`./temp/zip/`)}`;

  promptInfo(`remove folder: "./temp/zip/"`);

  exec(removeZipFolderCmd);
}

function handlePackage(projectPath, zipPath) {
  const unzipPath = resolvePath(`./temp/source/`);

  zip.unzip(zipPath, unzipPath, () => {
    promptSuccess(`unzip success.`);

    promptInfo(
      `master template zip unzip to path: "${resolvePath(`./temp/source/mono-antd-management-fast-master-template-main`)}".`,
    );

    const projectPathAdjust = resolvePath(projectPath);

    promptInfo(`target project path: "${projectPathAdjust}".`);

    const sourceMainPath = `./temp/source/mono-antd-management-fast-master-template-main/packages/master-management/`;
    const targetMainPath = `${projectPath}/packages/master-management/`;

    promptLine();

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'config/router.master.template.config.js',
    });

    copyFolderSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'generatorConfig/general/',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/commonAssist/Action/actionGeneral.js',
    });

    copyFolderSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/components/PageLoading/',
    });

    copyFolderSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/customConfig/general/',
    });

    copyFolderSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/customSpecialComponents/BaseUpdateRoleModal/',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/customSpecialComponents/CustomAssembly/menuHeader.js',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/customSpecialComponents/CustomAssembly/timeAndOperator.js',
    });

    copyFolderSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/customSpecialComponents/UpdateModuleModalBase/',
    });

    copyFolderSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/pages/',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/utils/init.js',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/utils/tools.jsx',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/access.js',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/app.jsx',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/global.less',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'src/overrides.less',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'plugin.ts',
    });

    copyFileSync({
      sourceMainPath,
      targetMainPath,
      filepath: 'tsconfig.json',
    });

    clearResource();

    // copyFile({
    //   sourceMainPath,
    //   targetMainPath,
    //   filepath: 'config/router.master.template.config.js',
    //   callback: () => {
    //     copyFile({
    //       sourceMainPath,
    //       targetMainPath,
    //       filepath: 'generatorConfig/general/',
    //       callback: () => {
    //         copyFile({
    //           sourceMainPath,
    //           targetMainPath,
    //           filepath: 'src/commonAssist/Action/actionGeneral.js',
    //           callback: () => {
    //             copyFolder({
    //               sourceMainPath,
    //               targetMainPath,
    //               filepath: 'src/components/PageLoading/',
    //               callback: () => {
    //                 copyFolder({
    //                   sourceMainPath,
    //                   targetMainPath,
    //                   filepath: 'src/customConfig/general/',
    //                   callback: () => {
    //                     copyFolder({
    //                       sourceMainPath,
    //                       targetMainPath,
    //                       filepath:
    //                         'src/customSpecialComponents/BaseUpdateRoleModal/',
    //                       callback: () => {
    //                         copyFile({
    //                           sourceMainPath,
    //                           targetMainPath,
    //                           filepath:
    //                             'src/customSpecialComponents/CustomAssembly/menuHeader.js',
    //                           callback: () => {
    //                             copyFolder({
    //                               sourceMainPath,
    //                               targetMainPath,
    //                               filepath:
    //                                 'src/customSpecialComponents/UpdateModuleModalBase/',
    //                               callback: () => {
    //                                 copyFolder({
    //                                   sourceMainPath,
    //                                   targetMainPath,
    //                                   filepath: 'src/pages/',
    //                                   callback: () => {
    //                                     copyFile({
    //                                       sourceMainPath,
    //                                       targetMainPath,
    //                                       filepath: 'src/utils/init.js',
    //                                       callback: () => {
    //                                         copyFile({
    //                                           sourceMainPath,
    //                                           targetMainPath,
    //                                           filepath: 'src/utils/tools.jsx',
    //                                           callback: () => {
    //                                             copyFile({
    //                                               sourceMainPath,
    //                                               targetMainPath,
    //                                               filepath: 'src/access.js',
    //                                               callback: () => {
    //                                                 copyFile({
    //                                                   sourceMainPath,
    //                                                   targetMainPath,
    //                                                   filepath: 'src/app.jsx',
    //                                                   callback: () => {
    //                                                     copyFile({
    //                                                       sourceMainPath,
    //                                                       targetMainPath,
    //                                                       filepath:
    //                                                         'src/global.less',
    //                                                       callback: () => {
    //                                                         copyFile({
    //                                                           sourceMainPath,
    //                                                           targetMainPath,
    //                                                           filepath:
    //                                                             'src/overrides.less',
    //                                                           callback: () => {
    //                                                             copyFile({
    //                                                               sourceMainPath,
    //                                                               targetMainPath,
    //                                                               filepath:
    //                                                                 'plugin.ts',
    //                                                               callback:
    //                                                                 () => {
    //                                                                   copyFile({
    //                                                                     sourceMainPath,
    //                                                                     targetMainPath,
    //                                                                     filepath:
    //                                                                       'tsconfig.json',
    //                                                                     callback:
    //                                                                       () => {
    //                                                                         clearResource();
    //                                                                       },
    //                                                                   });
    //                                                                 },
    //                                                             });
    //                                                           },
    //                                                         });
    //                                                       },
    //                                                     });
    //                                                   },
    //                                                 });
    //                                               },
    //                                             });
    //                                           },
    //                                         });
    //                                       },
    //                                     });
    //                                   },
    //                                 });
    //                               },
    //                             });
    //                           },
    //                         });
    //                       },
    //                     });
    //                   },
    //                 });
    //               },
    //             });
    //           },
    //         });
    //       },
    //     });
    //   },
    // });
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
  });

  promptSuccess(`download zip from ${repo} repository success!`);

  zipPath = resolvePath(
    `./temp/zip/mono-antd-management-fast-master-template-main.zip`,
  );

  promptInfo(`master template zip file Path: "${zipPath}".`);

  return zipPath;
}

async function updateProjectFromRepository({ projectPath = '.', agent }) {
  clearResource();

  const repositoryRemoteUrl =
    'https://codeload.github.com/kityandhero/mono-antd-management-fast-master-template/zip/refs/heads/main';

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

  handlePackage(projectPath, zipPath);
}

module.exports = { updateProjectFromRepository };
