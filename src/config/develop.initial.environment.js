const {
  writeJsonFileSync,
  readJsonFileSync,
  existFileSync,
  mkdirSync,
} = require('../tools/meta');

const developInitialEnvironment = {
  publishWithOpt: false,
};

const developInitialEnvironmentConfigFilePath =
  './develop/config/develop.initial.environment.json';

function createDevelopInitialEnvironmentConfigFile() {
  mkdirSync(`./develop`);

  mkdirSync(`./develop/config`);

  writeJsonFileSync(
    developInitialEnvironmentConfigFilePath,
    developInitialEnvironment,
    {
      coverFile: false,
    },
  );
}

function getDevelopInitialEnvironmentConfig() {
  const developInitialEnvironmentConfigFileExist = existFileSync(
    developInitialEnvironmentConfigFilePath,
  );

  if (!developInitialEnvironmentConfigFileExist) {
    createDevelopInitialEnvironmentConfigFile();
  }

  return {
    ...developInitialEnvironment,
    ...readJsonFileSync(developInitialEnvironmentConfigFilePath),
  };
}

module.exports = {
  createDevelopInitialEnvironmentConfigFile,
  getDevelopInitialEnvironmentConfig,
};
