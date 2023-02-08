const {
  createDevelopFiles,
  createCommitlintConfigFile,
  createBabelConfigFile,
  createNcuConfigFile,
  createNpmConfigFile,
} = require('./develop.file');
const {
  promptSuccess,
  writeFileSync,
  assignObject,
  readJsonFileSync,
  writeJsonFileSync,
  resolvePath,
  promptNewLine,
} = require('./meta');
const { globalScript } = require('./package.script');

const { loopPackage } = require('./package.tools');
const { prettierAllPackageJson } = require('./prettier.package.json');

function createMainFile(fileWithContentCollection) {
  if (!Array.isArray(fileWithContentCollection)) {
    return;
  }

  fileWithContentCollection.forEach((o) => {
    const { name, content } = o;

    writeFileSync(name, content);
  });

  const log = `main files [${fileWithContentCollection
    .map((o) => {
      const { name } = o;
      return name;
    })
    .join()}] refresh success`;

  promptSuccess(log);
  promptNewLine();
}

function createPackageFile(fileWithContentCollection) {
  loopPackage(({ absolutePath }) => {
    const itemPath = absolutePath;

    if (!Array.isArray(fileWithContentCollection)) {
      return;
    }

    fileWithContentCollection.forEach((o) => {
      const { name, content } = o;

      writeFileSync(`${itemPath}/${name}`, content);
    });
  });

  const log = `package files [${fileWithContentCollection
    .map((o) => {
      const { name } = o;
      return name;
    })
    .join()}] refresh success`;

  promptSuccess(log);
  promptNewLine();
}

function adjustMainPackageJson({ scripts }) {
  const mainProjectPath = resolvePath(`./package.json`);

  const packageJson = readJsonFileSync(mainProjectPath);

  packageJson.scripts = assignObject(
    {
      'z:build:all': 'echo please supplement build all packages commend',
      'z:publish:npm-all': 'echo please supplement publish to npm commend',
    },
    globalScript,
    packageJson.scripts || {},
    scripts,
  );

  writeJsonFileSync(mainProjectPath, packageJson, { coverFile: true });

  promptSuccess('adjust main package.json success');
  promptNewLine();
}

function adjustChildrenPackageJson({ scripts }) {
  loopPackage(({ absolutePath }) => {
    const itemPath = absolutePath;

    const childPackageJsonPath = `${itemPath}/package.json`;

    const packageJson = readJsonFileSync(childPackageJsonPath);

    packageJson.scripts = assignObject(packageJson.scripts || {}, scripts);

    writeJsonFileSync(childPackageJsonPath, packageJson, { coverFile: true });

    promptSuccess('adjust child package.json success');
    promptNewLine();
  });
}

function initialEnvironment({
  mainFileContentList = [],
  packageFileContentList = [],
  mainScripts = {},
  childScripts = {},
}) {
  createCommitlintConfigFile();
  createBabelConfigFile();
  createNcuConfigFile();
  createNpmConfigFile();

  createDevelopFiles(
    'develop files will update, please wait a moment',
    'develop files update finish',
  );

  createMainFile(mainFileContentList || []);

  createPackageFile(packageFileContentList || []);

  adjustMainPackageJson({ scripts: mainScripts || {} });

  adjustChildrenPackageJson({ scripts: childScripts || {} });

  prettierAllPackageJson();
}

module.exports = { initialEnvironment };
