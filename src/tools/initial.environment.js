import { getDevelopInitialEnvironmentConfig } from '../config/develop.initial.environment.js';

import { checkInCollection, checkStringIsEmpty, mkdirSync } from './meta.js';
import {
  promptSuccess,
  writeFileSync,
  assignObject,
  readJsonFileSync,
  writeJsonFileSync,
  resolvePath,
  promptEmptyLine,
} from './meta.js';
import { globalScript } from './package.script.js';

import { loopPackage } from './package.tools.js';
import { prettierAllPackageJson } from './prettier.package.json.js';

import { getDevelopSubPathVersionNcuConfig } from '../config/develop.subPath.version.ncu.js';
import { getDevelopSubPathPublishConfig } from '../config/develop.subPath.publish.js';
import { getDevelopUpdateProjectFromRepositoryConfig } from '../config/develop.update.project.from.repository.js';

function createMainFile(fileWithContentCollection) {
  if (!Array.isArray(fileWithContentCollection)) {
    return;
  }

  for (const o of fileWithContentCollection) {
    const { name, content, coverFile } = o;

    writeFileSync(name, content, { coverFile });
  }

  const log = `main files [${fileWithContentCollection
    .map((o) => {
      const { name } = o;
      return name;
    })
    .join(',')}] refresh success`;

  promptSuccess(log);
  promptEmptyLine();
}

function createPackageFile(fileWithContentCollection) {
  const { paths = [] } = {
    paths: [],
    ...getDevelopSubPathVersionNcuConfig(),
  };

  loopPackage(paths, ({ absolutePath }) => {
    const itemPath = absolutePath;

    if (!Array.isArray(fileWithContentCollection)) {
      return;
    }

    for (const o of fileWithContentCollection) {
      const { name, relativePath = '', content, coverFile } = o;

      if (!checkStringIsEmpty(relativePath)) {
        mkdirSync(`${itemPath}/${relativePath}`);
      }

      writeFileSync(
        `${itemPath}${
          checkStringIsEmpty(relativePath) ? '' : `/${relativePath}`
        }/${name}`,
        content,
        {
          coverFile,
        },
      );
    }
  });

  const log = `package files [${fileWithContentCollection
    .map((o) => {
      const { name } = o;
      return name;
    })
    .join(',')}] refresh success`;

  promptSuccess(log);
  promptEmptyLine();
}

function adjustMainPackageJsonScript({ scripts }) {
  const mainProjectPath = resolvePath(`./package.json`);

  const packageJson = readJsonFileSync(mainProjectPath);

  const originalScript = packageJson.scripts;

  const ignoreDeleteScript = ['z:build:all', 'z:publish:npm-all'];

  for (const o of Object.keys(originalScript)) {
    if (checkInCollection(ignoreDeleteScript, o)) {
      continue;
    }

    if (o.startsWith('z:') || o.startsWith('prez:') || o.startsWith('postz:')) {
      delete originalScript[o];
    }
  }

  const publishPackageNameList = [];

  const autoAdjustFileScript = {};
  const autoAdjustFileAllProjects = [];

  const testScript = {};
  const testAllProjects = [];

  const { paths = [] } = {
    paths: [],
    ...getDevelopSubPathVersionNcuConfig(true),
  };

  const { paths: publishPackagePaths = [] } = {
    paths: [],
    ...getDevelopSubPathPublishConfig(true),
  };

  getDevelopUpdateProjectFromRepositoryConfig(true);

  loopPackage(paths, ({ name, path }) => {
    autoAdjustFileScript[`z:auto:adjust:file:${name}`] =
      `cd ${path}/${name} && npm run z:auto:adjust:file`;

    autoAdjustFileAllProjects.push(`npm run z:auto:adjust:file:${name}`);

    testScript[`test:${name}`] = `cd ${path}/${name} && npm run z:test`;

    testAllProjects.push(`npm run test:${name}`);
  });

  loopPackage(publishPackagePaths, ({ name }) => {
    publishPackageNameList.push(name);
  });

  const developInitialEnvironmentConfig = getDevelopInitialEnvironmentConfig();

  const publishWithOtp =
    developInitialEnvironmentConfig.publishWithOtp || false;

  const publishItemCollection = {};
  let publishItemScript = [];

  for (const o of publishPackageNameList) {
    const scriptItem = `npx easy-soft-develop publish --packages ${o}${publishWithOtp ? ' --otp true' : ''}`;

    publishItemScript.push(scriptItem);

    publishItemCollection[`z:publish:npm-${o}`] = scriptItem;
  }

  packageJson.scripts = assignObject(
    {
      'z:build:all': 'echo please supplement build all packages commend',
    },
    globalScript,
    originalScript || {},
    scripts,
    publishItemCollection,
    {
      'z:publish:npm-all': publishItemScript.join(' && '),
    },
    testScript,
    autoAdjustFileScript,
    {
      'z:auto:adjust:file:all': autoAdjustFileAllProjects.join(' && '),
      'z:test': testAllProjects.join(' && '),
    },
  );

  writeJsonFileSync(mainProjectPath, packageJson, { coverFile: true });

  promptSuccess('adjust main package.json success');
  promptEmptyLine();
}

function adjustChildrenPackageJsonScript({ scripts }) {
  const { paths = [] } = {
    paths: [],
    ...getDevelopSubPathVersionNcuConfig(),
  };

  loopPackage(paths, ({ name, absolutePath }) => {
    const itemPath = absolutePath;

    const childPackageJsonPath = `${itemPath}/package.json`;

    const packageJson = readJsonFileSync(childPackageJsonPath);

    const originalScript = packageJson.scripts;

    const ignoreDeleteScript = ['z:auto:adjust:file'];

    for (const o of Object.keys(originalScript)) {
      if (checkInCollection(ignoreDeleteScript, o)) {
        continue;
      }

      if (
        o.startsWith('z:') ||
        o.startsWith('prez:') ||
        o.startsWith('postz:')
      ) {
        delete originalScript[o];
      }
    }

    packageJson.scripts = assignObject(
      {
        'z:auto:adjust:file':
          'echo can exec some file adjust command with here',
      },
      originalScript || {},
      scripts,
    );

    writeJsonFileSync(childPackageJsonPath, packageJson, { coverFile: true });

    promptSuccess(`adjust ${name} package.json success`);
    promptEmptyLine();
  });
}

export function initialEnvironment({
  mainFileContentList = [],
  packageFileContentList = [],
  mainScripts = {},
  childScripts = {},
}) {
  createMainFile(mainFileContentList || []);

  createPackageFile(packageFileContentList || []);

  adjustMainPackageJsonScript({ scripts: mainScripts || {} });

  adjustChildrenPackageJsonScript({ scripts: childScripts || {} });

  prettierAllPackageJson();
}
