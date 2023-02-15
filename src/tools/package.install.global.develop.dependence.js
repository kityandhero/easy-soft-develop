const {
  promptSuccess,
  promptInfo,
  readJsonFileSync,
  assignObject,
  isArray,
  checkStringIsEmpty,
  writeJsonFileSync,
  exec,
} = require('./meta');
const { getGlobalPackages } = require('./package.script');
const { loopPackage } = require('./package.tools');
const { updateSpecialPackageVersion } = require('./package.update');
const { prettierAllPackageJson } = require('./prettier.package.json');

function buildPackageObject(packageList) {
  if (!isArray(packageList) || packageList.length <= 0) {
    return {};
  }

  const o = {};

  packageList.forEach((one) => {
    if (checkStringIsEmpty(one)) {
      return;
    }

    o[one] = '^0.0.1';
  });

  return o;
}

function adjustMainPackageJson(packageList) {
  if (!isArray(packageList) || packageList.length <= 0) {
    return;
  }

  const o = buildPackageObject(packageList);

  const packageJson = readJsonFileSync('./package.json');

  packageJson.devDependencies = assignObject(
    o,
    packageJson.devDependencies || {},
  );

  writeJsonFileSync('./package.json', packageJson, { coverFile: true });
}

function adjustChildrenPackageJson(packageList, specialPackageList) {
  if (
    !(
      (isArray(packageList) && packageList.length > 0) ||
      (isArray(specialPackageList) && specialPackageList.length > 0)
    )
  ) {
    return;
  }

  const o = buildPackageObject(packageList);

  loopPackage(({ name, relativePath }) => {
    const packageJson = readJsonFileSync(`${relativePath}/package.json`);

    let specials = {};

    specialPackageList.forEach((o) => {
      if (o.name === name) {
        specials = {
          ...specials,
          ...buildPackageObject(o.packages),
        };
      }
    });

    packageJson.devDependencies = assignObject(
      o,
      specials,
      packageJson.devDependencies || {},
    );

    writeJsonFileSync(`${relativePath}/package.json`, packageJson, {
      coverFile: true,
    });
  });
}

function installDevelopDependencePackages({
  globalDevelopPackageList,
  mainDevelopPackageList = [],
  childrenDevelopPackageList = [],
  childrenSpecialDevelopPackageList = [],
}) {
  const packages = getGlobalPackages().concat(globalDevelopPackageList);

  promptInfo(`${packages.join()} will install`);

  adjustChildrenPackageJson(
    packages.concat(
      isArray(childrenDevelopPackageList) ? childrenDevelopPackageList : [],
    ),
    isArray(childrenSpecialDevelopPackageList)
      ? childrenSpecialDevelopPackageList
      : [],
  );

  adjustMainPackageJson(
    packages.concat(
      isArray(mainDevelopPackageList) ? mainDevelopPackageList : [],
    ),
  );

  prettierAllPackageJson();

  let packageListAll = [
    ...packages,
    ...mainDevelopPackageList,
    ...childrenDevelopPackageList,
  ];

  childrenSpecialDevelopPackageList.forEach((o) => {
    if (isArray(o.packages)) {
      packageListAll = [...packageListAll, ...o.packages];
    }
  });

  packageListAll = [...new Set(packageListAll)];

  updateSpecialPackageVersion(packageListAll);

  exec('npm run z:install');

  promptSuccess('install success');
}

module.exports = {
  installDevelopDependencePackages,
};
