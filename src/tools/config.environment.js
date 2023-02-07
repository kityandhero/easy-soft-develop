const { createDevelopScriptFiles } = require('./develop.assist');
const { promptSuccess, writeFileSync, assignObject, readJsonFileSync, writeJsonFileSync, resolvePath } = require('./meta');
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
}

function adjustMainPackageJson({ scripts }) {
  const mainProjectPath = resolvePath(`./package.json`);

  const packageJson = readJsonFileSync(mainProjectPath);

  packageJson.scripts = assignObject(globalScript, packageJson.scripts || {}, scripts);

  writeJsonFileSync(mainProjectPath, packageJson);

  promptSuccess('adjust main package.json success');
}

function adjustChildrenPackageJson({ scripts }) {
  loopPackage(({ absolutePath }) => {
    const itemPath = absolutePath;

    const childPackageJsonPath = `${itemPath}/package.json`;

    const packageJson = readJsonFileSync(childPackageJsonPath);

    packageJson.scripts = assignObject(packageJson.scripts || {}, scripts);

    writeJsonFileSync(childPackageJsonPath, packageJson);

    promptSuccess('adjust child package.json success');
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
