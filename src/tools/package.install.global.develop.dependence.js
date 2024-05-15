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
const { getGlobalDevelopPackages } = require('./package.dependence');
const { loopPackage } = require('./package.tools');
const { updateSpecialPackageVersion } = require('./package.update');
const { prettierAllPackageJson } = require('./prettier.package.json');
const {
  getDevelopSubPathVersionNcuConfig,
} = require('../config/develop.subPath.version.ncu');

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
    {},
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

  const { paths = [] } = {
    paths: [],
    ...getDevelopSubPathVersionNcuConfig(),
  };

  loopPackage(paths, ({ name, relativePath }) => {
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
      {},
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
  execInstall = true,
}) {
  const packages = getGlobalDevelopPackages().concat(globalDevelopPackageList);

  promptInfo(`${packages.join()} will install`);

  const adjustMainDevelopPackageList = isArray(mainDevelopPackageList)
    ? mainDevelopPackageList
    : [];

  const adjustChildrenDevelopPackageList = isArray(childrenDevelopPackageList)
    ? childrenDevelopPackageList
    : [];

  const adjustChildrenSpecialDevelopPackageList = isArray(
    childrenSpecialDevelopPackageList,
  )
    ? childrenSpecialDevelopPackageList
    : [];

  adjustChildrenPackageJson(
    packages.concat(adjustChildrenDevelopPackageList),
    adjustChildrenSpecialDevelopPackageList,
  );

  adjustMainPackageJson(packages.concat(adjustMainDevelopPackageList));

  prettierAllPackageJson();

  let packageListAll = [
    ...packages,
    ...adjustMainDevelopPackageList,
    ...adjustChildrenDevelopPackageList,
  ];

  adjustChildrenSpecialDevelopPackageList.forEach((o) => {
    if (isArray(o.packages)) {
      packageListAll = [...packageListAll, ...o.packages];
    }
  });

  packageListAll = [...new Set(packageListAll)];

  updateSpecialPackageVersion(packageListAll);

  promptSuccess('append to dependence collection success');

  if (execInstall) {
    exec('npm run z:install');

    promptSuccess('install success');
  }
}

module.exports = {
  installDevelopDependencePackages,
};
