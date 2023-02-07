const {
  childPackage,
  mainPackage,
  customPackage,
} = require('../templates/package.template');
const {
  promptSuccess,
  promptInfo,
  promptError,
  resolvePath,
  mkdirSync,
  writeFileSync,
  promptNewLine,
  mkdirRelativeSync,
} = require('./meta');

function createScriptFile(
  fileName,
  content,
  currentDir = '.',
  autoCreate = false,
) {
  const filePath = resolvePath(currentDir);

  mkdirSync(`${filePath}/develop/assists/`);

  const result = writeFileSync(
    `${filePath}/develop/assists/${fileName}`,
    content,
    {
      autoCreate: !!autoCreate,
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

function createCleanScriptFile(currentDir = '.') {
  const content = `/* eslint-disable import/no-commonjs */

const { clean } = require('easy-soft-develop');

clean('',['yarn-error.log','yarn.lock','package-lock.json','src/.umi']);
`;

  return createScriptFile('clean.js', content, currentDir, false);
}

function createPackageCheckSpecialVersionScriptFile(currentDir = '.') {
  const content = `/* eslint-disable import/no-commonjs */

const { updateSpecialPackageVersion } = require('easy-soft-develop');

const packageList = [];

updateSpecialPackageVersion(packageList);
`;

  try {
    createScriptFile(
      'package.update.special.version.js',
      content,
      currentDir,
      false,
    );
  } catch (error) {
    promptError(error);
  }
}

function createInstallGlobalDevDependenceScriptFile(currentDir = '.') {
  const content = `/* eslint-disable import/no-commonjs */

const { installGlobalDevDependencePackages } = require('easy-soft-develop');

const packageList = [];

installGlobalDevDependencePackages(packageList);
`;

  try {
    createScriptFile(
      'install.global.dev.dependence.js',
      content,
      currentDir,
      false,
    );
  } catch (error) {
    promptError(error);
  }
}

function createConfigEnvironmentScriptFiles(currentDir = '.') {
  const content = `/* eslint-disable import/no-commonjs */

const { configEnvironment } = require('easy-soft-develop');

const eslintFile = require('../config/eslint/template/content');
const eslintIgnoreFile = require('../config/eslint/template/ignore.content');
const prettierFile = require('../config/prettier/template/content');
const prettierIgnoreFile = require('../config/prettier/template/ignore.content');
const stylelintFile = require('../config/stylelint/template/content');
const editorFile = require('../config/editor/template/content');
const editorAttributesFile = require('../config/git/template/attributes.content');
const editorIgnoreFile = require('../config/git/template/ignore.content');
const lintStagedFile = require('../config/lintStaged/template/content');
const mainPackageFile = require('../config/package/template/main.content');
const childrenPackageFile = require('../config/package/template/children.content');

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
  mainScripts: mainPackageFile,
  childScripts: childrenPackageFile,
});
`;

  try {
    createScriptFile('config.environment.js', content, currentDir, true);
  } catch (error) {
    promptError(error);
  }

  //#region package.json

  mkdirRelativeSync(`./develop/config/package/template`);
  writeFileSync(
    `./develop/config/package/template/children.content.js`,
    childPackage,
    { autoCreate: true },
  );
  writeFileSync(
    `./develop/config/package/template/main.content.js`,
    mainPackage,
    { autoCreate: true },
  );

  mkdirRelativeSync(`./develop/config/package/custom`);
  writeFileSync(
    `./develop/config/package/custom/children.content.js`,
    customPackage,
    { autoCreate: false },
  );
  writeFileSync(
    `./develop/config/package/custom/main.content.js`,
    customPackage,
    { autoCreate: false },
  );

  //#endregion
}

function createDevelopScriptFiles(currentDir = '.') {
  const waitLog =
    'develop assist script files will update, please wait a moment';

  promptInfo(waitLog);

  createConfigEnvironmentScriptFiles(currentDir);

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
