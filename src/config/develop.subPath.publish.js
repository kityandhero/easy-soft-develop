const {
  writeJsonFileSync,
  readJsonFileSync,
  existFileSync,
  mkdirSync,
  isArray,
} = require('../tools/meta');

const developSubPathPublish = {
  paths: [],
};

const developSubPathPublishConfigFilePath =
  './develop/config/develop.subPath.publish.json';

function createDevelopSubPathPublishConfigFile(paths = []) {
  mkdirSync(`./develop`);

  mkdirSync(`./develop/config`);

  let pathsAdjust = [
    ...developSubPathPublish.paths,
    ...(isArray(paths) ? paths : []),
  ];

  writeJsonFileSync(
    developSubPathPublishConfigFilePath,
    {
      paths: pathsAdjust,
    },
    {
      coverFile: false,
    },
  );
}

function getDevelopSubPathPublishConfig(createFileWhenNoExist = false) {
  const developSubPathPublishConfigFileExist = existFileSync(
    developSubPathPublishConfigFilePath,
  );

  if (!developSubPathPublishConfigFileExist) {
    if (createFileWhenNoExist) {
      createDevelopSubPathPublishConfigFile([]);
    } else {
      return developSubPathPublish;
    }
  }

  return {
    ...developSubPathPublish,
    ...readJsonFileSync(developSubPathPublishConfigFilePath),
  };
}

module.exports = {
  createDevelopSubPathPublishConfigFile,
  getDevelopSubPathPublishConfig,
};
