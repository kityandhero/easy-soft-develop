const {
  writeJsonFileSync,
  readJsonFileSync,
  existFileSync,
  mkdirSync,
} = require('../tools/meta');

const developSubPathVersionNcu = {
  paths: [],
};

const developSubPathVersionNcuConfigFilePath =
  './develop/config/develop.subPath.version.ncu.json';

function createDevelopSubPathVersionNcuConfigFile() {
  mkdirSync(`./develop`);

  mkdirSync(`./develop/config`);

  writeJsonFileSync(
    developSubPathVersionNcuConfigFilePath,
    developSubPathVersionNcu,
    {
      coverFile: false,
    },
  );
}

function getDevelopSubPathVersionNcuConfig() {
  const developSubPathVersionNcuConfigFileExist = existFileSync(
    developSubPathVersionNcuConfigFilePath,
  );

  if (!developSubPathVersionNcuConfigFileExist) {
    createDevelopSubPathVersionNcuConfigFile();
  }

  return {
    ...developSubPathVersionNcu,
    ...readJsonFileSync(developSubPathVersionNcuConfigFilePath),
  };
}

module.exports = {
  createDevelopSubPathVersionNcuConfigFile,
  getDevelopSubPathVersionNcuConfig,
};
