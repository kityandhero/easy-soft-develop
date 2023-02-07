const { createDevelopScriptFiles } = require('./develop.assist');
const { promptSuccess, writeFileSync, assignObject, readJsonFileSync, writeJsonFileSync, resolvePath, promptNewLine } = require('./meta');
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

  packageJson.scripts = assignObject(globalScript, packageJson.scripts || {}, scripts);

  writeJsonFileSync(mainProjectPath, packageJson, { autoCreate: true });

  promptSuccess('adjust main package.json success');
  promptNewLine();
}

function adjustChildrenPackageJson({ scripts }) {
  loopPackage(({ absolutePath }) => {
    const itemPath = absolutePath;

    const childPackageJsonPath = `${itemPath}/package.json`;

    const packageJson = readJsonFileSync(childPackageJsonPath);

    packageJson.scripts = assignObject(packageJson.scripts || {}, scripts);

    writeJsonFileSync(childPackageJsonPath, packageJson, { autoCreate: true });

    promptSuccess('adjust child package.json success');
    promptNewLine();
  });
}

function configEnvironment({ mainFileContentList = [], packageFileContentList = [], mainScripts = {}, childScripts = {} }) {
  createDevelopScriptFiles();

  createMainFile(mainFileContentList || []);

  createPackageFile(packageFileContentList || []);

  adjustMainPackageJson({ scripts: mainScripts || {} });

  adjustChildrenPackageJson({ scripts: childScripts || {} });

  prettierAllPackageJson();
}

module.exports = { configEnvironment };
