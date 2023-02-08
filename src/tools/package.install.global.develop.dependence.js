const {
  promptSuccess,
  promptInfo,
  readJsonFileSync,
  assignObject,
  isArray,
  checkStringIsEmpty,
  writeJsonFileSync,
} = require('./meta');
const { getGlobalPackages } = require('./package.script');
const { loopPackage } = require('./package.tools');
const { updateSpecialPackageVersion } = require('./package.update');
const { prettierAllPackageJson } = require('./prettier.package.json');
const { exec } = require('./shell');

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

function adjustChildrenPackageJson(packageList) {
  if (!isArray(packageList) || packageList.length <= 0) {
    return;
  }

  const o = buildPackageObject(packageList);

  loopPackage(({ relativePath }) => {
    const packageJson = readJsonFileSync(`${relativePath}/package.json`);

    packageJson.devDependencies = assignObject(
      o,
      packageJson.devDependencies || {},
    );

    writeJsonFileSync(`${relativePath}/package.json`, packageJson, {
      coverFile: true,
    });
  });
}

function installGlobalDevelopDependencePackages(packageList) {
  const packages = getGlobalPackages().concat(packageList);

  promptInfo(`${packages.join()} will install`);

  adjustChildrenPackageJson(packages);

  adjustMainPackageJson(packages);

  prettierAllPackageJson();

  updateSpecialPackageVersion(packages);

  exec('npm run z:install');

  promptSuccess('install success');
}

module.exports = {
  installGlobalDevelopDependencePackages,
};
