import {
  writeJsonFileSync,
  readJsonFileSync,
  existFileSync,
  mkdirSync,
} from '../tools/meta.js';

const developInitialEnvironment = {
  publishWithOtp: false,
};

const developInitialEnvironmentConfigFilePath =
  './develop/config/develop.initial.environment.json';

export function createDevelopInitialEnvironmentConfigFile() {
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

export function getDevelopInitialEnvironmentConfig() {
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
