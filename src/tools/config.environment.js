/* eslint-disable promise/no-nesting */
/* eslint-disable promise/no-promise-in-callback */

const fsExtra = require('fs-extra');
const { resolve } = require('path');
const { createDevelopScriptFiles } = require('./develop.assist');
const { promptSuccess, writeFileSync, assignObject } = require('./meta');

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
  const mainProjectPath = resolve(`./package.json`);

  fsExtra
    .readJson(mainProjectPath)
    .then((packageJson) => {
      const globalScript = {
        prepare: 'husky install',
        postinstall: 'npm run z:initial:environment',
        commitlint: 'npx commitlint --edit',
        precz: 'npm run z:commit:refresh && git stage -A',
        cz: 'cz',
        postcz: 'git push',
        'z:initial:environment': 'node ./develop/assists/initial.environment.js',
        'z:prettier:format:all': 'npx prettier --write .',
        'z:prettier:format:change': 'npx prettier --cache --write .',
        'z:prettier:package.json:all': 'npx prettier --write ./**/package.json',
        'z:prettier:package.json:current': 'npx prettier --write ./package.json',
        'z:change-nrm-local': 'nrm use local',
        'z:change-nrm-npm': 'nrm use npm',
        'z:install': 'echo please set install cmd with here',
        'z:sleep': 'npx easy-soft-develop sleep --second 2 --showInfo false',
        'z:check-all-package-version': 'npx easy-soft-develop check-all-package-version',
        'z:update-all-package-version': 'npx easy-soft-develop update-all-package-version',
        'postz:update-all-package-version': 'npm run z:install',
        'z:update-special-package-version': 'node ./develop/assists/package.update.special.version.js',
        'postz:update-special-package-version': 'npm run z:install',
        'z:clean': 'node ./develop/assists/clean.js',
        'z:commit:refresh': 'npx easy-soft-develop commit-refresh',
        'z:create:assist:scripts': 'npx easy-soft-develop create-assist-scripts',
      };

      packageJson.scripts = assignObject(globalScript, packageJson.scripts || {}, scripts);

      fsExtra
        .writeJson(mainProjectPath, packageJson)
        .then(() => {
          promptSuccess('adjust main package.json success');

          return;
        })
        .catch((err) => {
          console.error(err);
          return;
        });

      return;
    })
    .catch((err) => {
      console.error(err);
    });
}

function adjustChildrenPackageJson({ scripts }) {
  loopPackage(({ absolutePath }) => {
    const itemPath = absolutePath;

    const childPackageJsonPath = `${itemPath}/package.json`;

    fsExtra
      .readJson(childPackageJsonPath)
      .then((packageJson) => {
        packageJson.scripts = assignObject(packageJson.scripts || {}, scripts);

        fsExtra
          .writeJson(childPackageJsonPath, packageJson)
          .then(() => {
            promptSuccess('adjust child package.json success');

            return;
          })
          .catch((e) => {
            console.error(e);

            return;
          });

        return;
      })
      .catch((res) => {
        console.error(res);

        return;
      });
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
