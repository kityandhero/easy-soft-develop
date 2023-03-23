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
  loopPackage(({ absolutePath }) => {
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

  loopPackage(({ name }) => {
    publishPackageNameList.push(name);

    autoAdjustFileScript[
      `z:adjust:file:${name}`
    ] = `cd packages/${name} && npm run z:adjust:file`;

    autoAdjustFileAllProjects.push(`npm run z:adjust:file:${name}`);

    testScript[`test:${name}`] = `cd packages/${name} && npm run z:test`;

    testAllProjects.push(`npm run test:${name}`);
  });

  packageJson.scripts = assignObject(
    {
      'z:build:all': 'echo please supplement build all packages commend',
      'z:publish:npm-all': `easy-soft-develop publish --packages ${publishPackageNameList.join(
        ',',
      )}`,
    },
    globalScript,
    originalScript || {},
    scripts,
    testScript,
    autoAdjustFileScript,
    {
      'z:adjust:file:all': autoAdjustFileAllProjects.join(' && '),
      'z:test': testAllProjects.join(' && '),
    },
  );

  writeJsonFileSync(mainProjectPath, packageJson, { coverFile: true });

  promptSuccess('adjust main package.json success');
  promptEmptyLine();
}

function adjustChildrenPackageJsonScript({ scripts }) {
  loopPackage(({ name, absolutePath }) => {
    const itemPath = absolutePath;

    const childPackageJsonPath = `${itemPath}/package.json`;

    const packageJson = readJsonFileSync(childPackageJsonPath);

    const originalScript = packageJson.scripts;

    const ignoreDeleteScript = ['z:adjust:file'];

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

    packageJson.scripts = assignObject(originalScript || {}, scripts);

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
