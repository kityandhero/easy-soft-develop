import {
  writeJsonFileSync,
  readJsonFileSync,
  existFileSync,
  mkdirSync,
  isArray,
} from '../tools/meta.js';

const developSubPathVersionNcu = {
  paths: [],
};

const developSubPathVersionNcuConfigFilePath =
  './develop/config/develop.subPath.version.ncu.json';

export function createDevelopSubPathVersionNcuConfigFile(paths = []) {
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

export function getDevelopSubPathVersionNcuConfig(
  createFileWhenNoExist = false,
) {
  const developSubPathVersionNcuConfigFileExist = existFileSync(
    developSubPathVersionNcuConfigFilePath,
  );

  if (!developSubPathVersionNcuConfigFileExist) {
    if (createFileWhenNoExist) {
      createDevelopSubPathVersionNcuConfigFile([]);
    } else {
      return developSubPathVersionNcu;
    }
  }

  return {
    ...developSubPathVersionNcu,
    ...readJsonFileSync(developSubPathVersionNcuConfigFilePath),
  };
}
