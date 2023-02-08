const {
  globalChildPackageFile,
  globalMainPackageFile,
  customChildPackageFile,
  customMainPackageFile,
} = require('../templates/package.template');
const { fileGlobalHeader } = require('../templates/template.config');
const {
  promptSuccess,
  promptInfo,
  promptError,
  resolvePath,
  mkdirSync,
  writeFileSync,
  promptNewLine,
  writeFileWithOptionsSync,
} = require('./meta');

function createScriptFile(
  fileName,
  content,
  currentDir = '.',
  coverFile = false,
) {
  const filePath = resolvePath(currentDir);

  mkdirSync(`${filePath}/develop/assists/`);

  const result = writeFileSync(
    `${filePath}/develop/assists/${fileName}`,
    content,
    {
      coverFile: !!coverFile,
    },
  );

  if (result) {
    promptSuccess(`${fileName} create success`);
  } else {
    promptInfo(`${fileName} already exist, ignore create`);
  }

  promptNewLine();

  return result;
}

function createAssistConfigScriptFile(currentDir = '.') {
  const content = `${fileGlobalHeader}
const cleanCommand = '';

const cleanCollection = [];

const developDependencePackageCollection = [];

const updateSpecialPackageCollection = [];

module.exports = {
  cleanCommand,
  cleanCollection,
  developDependencePackageCollection,
  updateSpecialPackageCollection,
};
`;

  return createScriptFile('config/index.js', content, currentDir, false);
}

function createCleanScriptFile(currentDir = '.') {
  const content = `${fileGlobalHeader}
const { clean } = require('easy-soft-develop');

const { cleanCommand, cleanCollection } = require('./config');

clean(cleanCommand, cleanCollection);
`;

  return createScriptFile('clean.js', content, currentDir, true);
}

function createPackageCheckSpecialVersionScriptFile(currentDir = '.') {
  const content = `${fileGlobalHeader}
const { updateSpecialPackageVersion } = require('easy-soft-develop');

const { updateSpecialPackageCollection } = require('./config');

updateSpecialPackageVersion(updateSpecialPackageCollection);
`;

  try {
    createScriptFile(
      'package.update.special.version.js',
      content,
      currentDir,
      true,
    );
  } catch (error) {
    promptError(error);
  }
}

function createInstallGlobalDevDependenceScriptFile(currentDir = '.') {
  const content = `${fileGlobalHeader}
const { installGlobalDevDependencePackages } = require('easy-soft-develop');

const { developDependencePackageCollection } = require('./config');

installGlobalDevDependencePackages(developDependencePackageCollection);
`;

  try {
    createScriptFile(
      'install.global.develop.dependence.js',
      content,
      currentDir,
      true,
    );
  } catch (error) {
    promptError(error);
  }
}

function createConfigEnvironmentScriptFiles(currentDir = '.') {
  const content = `${fileGlobalHeader}
const { configEnvironment } = require('easy-soft-develop');

const eslintFile = require('../config/eslint/template/content');
const eslintIgnoreFile = require('../config/eslint/template/ignore.content');
const prettierFile = require('../config/prettier/template/content');
const prettierIgnoreFile = require('../config/prettier/template/ignore.content');
const stylelintFile = require('../config/stylelint/template/content');
const editorFile = require('../config/editor/template/content');
const editorAttributesFile = require('../config/git/template/attributes.content');
const editorIgnoreFile = require('../config/git/template/ignore.content');
const lintStagedFile = require('../config/lint-staged/template/content');
const mainNecessaryPackageFile = require('../config/package/template/main.content');
const childrenNecessaryPackageFile = require('../config/package/template/children.content');
const mainCustomPackageFile = require('../config/package/custom/main.content');
const childrenCustomPackageFile = require('../config/package/custom/children.content');

const mainEslintFileContent = eslintFile.mainContent;
const packageEslintFileContent = eslintFile.packageContent;

const eslintIgnoreContent = eslintIgnoreFile.content;

const mainPrettierContent = prettierFile.mainContent;
const packagePrettierContent = prettierFile.packageContent;

const prettierIgnoreContent = prettierIgnoreFile.content;

const mainStylelintContent = stylelintFile.mainContent;
const packageStylelintContent = stylelintFile.packageContent;

const editorConfigContent = editorFile.content;

const gitAttributesContent = editorAttributesFile.content;

const gitIgnoreContent = editorIgnoreFile.content;
const lintStagedRcContent = lintStagedFile.content;

const mainFileContentList = [
  {
    name: '.eslintrc.js',
    content: mainEslintFileContent,
  },
  {
    name: '.prettierrc.js',
    content: mainPrettierContent,
  },
  {
    name: '.stylelintrc.js',
    content: mainStylelintContent,
  },
  {
    name: '.editorconfig',
    content: editorConfigContent,
  },
  {
    name: '.eslintignore',
    content: eslintIgnoreContent,
  },
  {
    name: '.prettierignore',
    content: prettierIgnoreContent,
  },
  {
    name: '.gitattributes',
    content: gitAttributesContent,
  },
  {
    name: '.gitignore',
    content: gitIgnoreContent,
  },
  {
    name: '.lintstagedrc',
    content: lintStagedRcContent,
  },
];

const packageFileContentList = [
  {
    name: '.eslintrc.js',
    content: packageEslintFileContent,
  },
  {
    name: '.prettierrc.js',
    content: packagePrettierContent,
  },
  {
    name: '.stylelintrc.js',
    content: packageStylelintContent,
  },
  {
    name: '.editorconfig',
    content: editorConfigContent,
  },
  {
    name: '.eslintignore',
    content: eslintIgnoreContent,
  },
  {
    name: '.prettierignore',
    content: prettierIgnoreContent,
  },
  {
    name: '.gitattributes',
    content: gitAttributesContent,
  },
  {
    name: '.gitignore',
    content: gitIgnoreContent,
  },
  {
    name: '.lintstagedrc',
    content: lintStagedRcContent,
  },
];

configEnvironment({
  mainFileContentList: mainFileContentList,
  packageFileContentList: packageFileContentList,
  mainScripts: {
    ...mainCustomPackageFile,
    ...mainNecessaryPackageFile,
  },
  childScripts: {
    ...childrenCustomPackageFile,
    ...childrenNecessaryPackageFile,
  },
});
`;

  try {
    createScriptFile('config.environment.js', content, currentDir, true);
  } catch (error) {
    promptError(error);
  }

  //#region package.json

  writeFileWithOptionsSync(globalChildPackageFile);

  writeFileWithOptionsSync(globalMainPackageFile);

  writeFileWithOptionsSync(customChildPackageFile);

  writeFileWithOptionsSync(customMainPackageFile);

  //#endregion
}

function createDevelopScriptFiles(currentDir = '.') {
  const waitLog =
    'develop assist script files will update, please wait a moment';

  promptInfo(waitLog);

  createConfigEnvironmentScriptFiles(currentDir);

  createAssistConfigScriptFile(currentDir);

  createCleanScriptFile(currentDir);

  createPackageCheckSpecialVersionScriptFile(currentDir);

  createInstallGlobalDevDependenceScriptFile(currentDir);

  const successLog = 'develop assist script files update finish';

  promptInfo(successLog);
  promptNewLine();
}

module.exports = {
  createCleanScriptFile,
  createPackageCheckSpecialVersionScriptFile,
  createInstallGlobalDevDependenceScriptFile,
  createConfigEnvironmentScriptFiles,
  createDevelopScriptFiles,
};
