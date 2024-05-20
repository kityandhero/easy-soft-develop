const {
  getDevelopInitialEnvironmentConfig,
} = require('../config/develop.initial.environment');
const { checkInCollection, checkStringIsEmpty, mkdirSync } = require('./meta');
const {
  promptSuccess,
  writeFileSync,
  assignObject,
  readJsonFileSync,
  writeJsonFileSync,
  resolvePath,
  promptEmptyLine,
} = require('./meta');
const { globalScript } = require('./package.script');

const { loopPackage } = require('./package.tools');
const { prettierAllPackageJson } = require('./prettier.package.json');

const {
  getDevelopSubPathVersionNcuConfig,
} = require('../config/develop.subPath.version.ncu');

function createMainFile(fileWithContentCollection) {
  if (!Array.isArray(fileWithContentCollection)) {
    return;
  }

  fileWithContentCollection.forEach((o) => {
    const { name, content, coverFile } = o;

    writeFileSync(name, content, { coverFile });
  });

  const log = `main files [${fileWithContentCollection
    .map((o) => {
      const { name } = o;
      return name;
    })
    .join()}] refresh success`;

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

    fileWithContentCollection.forEach((o) => {
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
    });
  });

  const log = `package files [${fileWithContentCollection
    .map((o) => {
      const { name } = o;
      return name;
    })
    .join()}] refresh success`;

  promptSuccess(log);
  promptEmptyLine();
}

function adjustMainPackageJsonScript({ scripts }) {
  const mainProjectPath = resolvePath(`./package.json`);

  const packageJson = readJsonFileSync(mainProjectPath);

  const originalScript = packageJson.scripts;

  const ignoreDeleteScript = ['z:build:all', 'z:publish:npm-all'];

  Object.keys(originalScript).forEach((o) => {
    if (checkInCollection(ignoreDeleteScript, o)) {
      return;
    }

    if (o.startsWith('z:') || o.startsWith('prez:') || o.startsWith('postz:')) {
      delete originalScript[o];
    }
  });

  const publishPackageNameList = [];

  const autoAdjustFileScript = {};
  const autoAdjustFileAllProjects = [];

  const testScript = {};
  const testAllProjects = [];

  const { paths = [] } = {
    paths: [],
    ...getDevelopSubPathVersionNcuConfig(true),
  };

  loopPackage(paths, ({ name, path }) => {
    publishPackageNameList.push(name);

    autoAdjustFileScript[`z:auto:adjust:file:${name}`] =
      `cd ${path}/${name} && npm run z:auto:adjust:file`;

    autoAdjustFileAllProjects.push(`npm run z:auto:adjust:file:${name}`);

    testScript[`test:${name}`] = `cd ${path}/${name} && npm run z:test`;

    testAllProjects.push(`npm run test:${name}`);
  });

  const developInitialEnvironmentConfig = getDevelopInitialEnvironmentConfig();

  const publishWithOtp =
    developInitialEnvironmentConfig.publishWithOtp || false;

  const publishItemCollection = {};
  let publishItemScript = [];

  publishPackageNameList.map((o) => {
    const scriptItem = `npx easy-soft-develop publish --packages ${o}${publishWithOtp ? ' --otp true' : ''}`;

    publishItemScript = [...publishItemScript, scriptItem];

    publishItemCollection[`z:publish:npm-${o}`] = scriptItem;
  });

  packageJson.scripts = assignObject(
    publishItemCollection,
    {
      'z:build:all': 'echo please supplement build all packages commend',
      'z:publish:npm-all': publishItemScript.join(' && '),
    },
    globalScript,
    originalScript || {},
    scripts,
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

    Object.keys(originalScript).forEach((o) => {
      if (checkInCollection(ignoreDeleteScript, o)) {
        return;
      }

      if (
        o.startsWith('z:') ||
        o.startsWith('prez:') ||
        o.startsWith('postz:')
      ) {
        delete originalScript[o];
      }
    });

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

function initialEnvironment({
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

module.exports = { initialEnvironment };
