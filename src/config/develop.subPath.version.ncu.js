const {
  writeJsonFileSync,
  readJsonFileSync,
  existFileSync,
  mkdirSync,
  isArray,
} = require('../tools/meta');

const developSubPathVersionNcu = {
  paths: [],
};

const developSubPathVersionNcuConfigFilePath =
  './develop/config/develop.subPath.version.ncu.json';

function createDevelopSubPathVersionNcuConfigFile(paths = []) {
  mkdirSync(`./develop`);

  mkdirSync(`./develop/config`);

  let pathsAdjust = [
    ...developSubPathVersionNcu.paths,
    ...(isArray(paths) ? paths : []),
  ];

  writeJsonFileSync(
    developSubPathVersionNcuConfigFilePath,
    {
      paths: pathsAdjust,
    },
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
    createDevelopSubPathVersionNcuConfigFile([]);
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
