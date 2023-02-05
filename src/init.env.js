/* eslint-disable promise/no-nesting */
/* eslint-disable promise/no-promise-in-callback */
/* eslint-disable import/no-commonjs */

const fs = require('fs');
const fsExtra = require('fs-extra');
const { resolve } = require('path');

const { loopPackage } = require('./package.tools');
const { exec } = require('./shell');

function createMainFile(fileWithContentCollection) {
  if (!Array.isArray(fileWithContentCollection)) {
    return;
  }

  fileWithContentCollection.forEach((o) => {
    const { name, content } = o;

    fs.writeFile(name, content, (error) => {
      return console.error(error);
    });
  });

  console.log(
    `main files [${fileWithContentCollection
      .map((o) => {
        const { name } = o;
        return name;
      })
      .join()}] refresh success`,
  );
}

function createPackageFile(fileWithContentCollection) {
  loopPackage(({ absolutePath }) => {
    const itemPath = absolutePath;

    if (!Array.isArray(fileWithContentCollection)) {
      return;
    }

    fileWithContentCollection.forEach((o) => {
      const { name, content } = o;

      fs.writeFile(`${itemPath}/${name}`, content, (error) => {
        return console.error(error);
      });
    });
  });

  console.log(
    `package files [${fileWithContentCollection
      .map((o) => {
        const { name } = o;
        return name;
      })
      .join()}] refresh success`,
  );
}

function adjustMainPackageJson({ scripts }) {
  const mainProjectPath = resolve(`./package.json`);

  fsExtra
    .readJson(mainProjectPath)
    .then((packageJson) => {
      packageJson.scripts = {
        ...(packageJson.scripts || {}),
        ...scripts,
      };

      fsExtra
        .writeJson(mainProjectPath, packageJson)
        .then(() => {
          console.log('adjust main package.json success');

          return null;
        })
        .catch((err) => {
          console.error(err);
          return null;
        });

      return null;
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
        packageJson.scripts = {
          ...(packageJson.scripts || {}),
          ...scripts,
        };

        fsExtra
          .writeJson(childPackageJsonPath, packageJson)
          .then(() => {
            console.log('adjust child package.json success');

            return null;
          })
          .catch((e) => {
            console.error(e);

            return null;
          });

        return null;
      })
      .catch((res) => {
        console.error(res);

        return null;
      });
  });
}

function initEnv({
  mainFileContentList,
  packageFileContentList,
  mainScripts,
  childScripts,
}) {
  createMainFile(mainFileContentList);

  createPackageFile(packageFileContentList);

  adjustMainPackageJson({ scripts: mainScripts });

  adjustChildrenPackageJson({ scripts: childScripts });

  exec('npx prettier --write ./**/package.json');
}

module.exports = { initEnv };
