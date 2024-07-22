const {
  writeJsonFileSync,
  readJsonFileSync,
  existFileSync,
  mkdirSync,
} = require('../tools/meta');

const developUpdateProjectFromRepository = {
  repository: '',
  sourcePath: '',
  targetPath: '',
  folders: [],
  files: [],
};

const developUpdateProjectFromRepositoryConfigFilePath =
  './develop/config/develop.update.project.from.repository.json';

function createDevelopUpdateProjectFromRepositoryConfigFile() {
  mkdirSync(`./develop`);

  mkdirSync(`./develop/config`);

  writeJsonFileSync(
    developUpdateProjectFromRepositoryConfigFilePath,
    developUpdateProjectFromRepository,
    {
      coverFile: false,
    },
  );
}

function getDevelopUpdateProjectFromRepositoryConfig(
  createFileWhenNoExist = false,
) {
  const developUpdateProjectFromRepositoryConfigFileExist = existFileSync(
    developUpdateProjectFromRepositoryConfigFilePath,
  );

  if (!developUpdateProjectFromRepositoryConfigFileExist) {
    if (createFileWhenNoExist) {
      createDevelopUpdateProjectFromRepositoryConfigFile();
    } else {
      return developUpdateProjectFromRepository;
    }
  }

  return {
    ...developUpdateProjectFromRepository,
    ...readJsonFileSync(developUpdateProjectFromRepositoryConfigFilePath),
  };
}

module.exports = {
  createDevelopUpdateProjectFromRepositoryConfigFile,
  getDevelopUpdateProjectFromRepositoryConfig,
};
