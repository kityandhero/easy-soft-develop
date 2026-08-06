import {
  writeJsonFileSync,
  readJsonFileSync,
  existFileSync,
  mkdirSync,
} from '../tools/meta.js';

const developUpdateProjectFromRepository = {
  repository: '',
  sourcePath: '',
  targetPath: '',
  syncConfigs: [],
  syncFolders: [],
  syncFiles: [],
  ignoreSyncWhenExistFiles: [],
};

const developUpdateProjectFromRepositoryConfigFilePath =
  './develop/config/develop.update.project.from.repository.json';

export function createDevelopUpdateProjectFromRepositoryConfigFile() {
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

export function getDevelopUpdateProjectFromRepositoryConfig(
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
