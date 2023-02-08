const {
  promptSuccess,
  promptInfo,
  promptError,
  mkdirSync,
  writeFileSync,
  promptNewLine,
  writeFileWithOptionsSync,
  checkStringIsEmpty,
  writeJsonFileSync,
} = require('./meta');
const { fileGlobalHeader } = require('../templates/template.config');
const {
  contentFile: commitlintConfigContentFile,
} = require('../templates/commitlint.config.template');
const {
  contentFile: babelConfigContentFile,
} = require('../templates/babel.config.template');
const {
  contentFile: editorContentFile,
} = require('../templates/editor.template');
const {
  contentFile: eslintContentFile,
  ignoreFile: eslintIgnoreFile,
  configFile: eslintConfigFile,
  ruleFile: eslintRuleFile,
} = require('../templates/eslint.template');
const {
  attributeFile: gitAttributeFile,
  ignoreFile: gitIgnoreFile,
} = require('../templates/git.template');
const {
  contentFile: lintStagedContentFile,
} = require('../templates/lint-staged.template');
const {
  globalChildPackageFile,
  globalMainPackageFile,
  customChildPackageFile,
  customMainPackageFile,
} = require('../templates/package.template');
const {
  ignoreFile: prettierIgnoreFile,
  contentFile: prettierContentFile,
  configFile: prettierConfigFile,
} = require('../templates/prettier.template');
const {
  ignoreFile: stylelintIgnoreFile,
  contentFile: stylelintContentFile,
  configFile: stylelintConfigFile,
} = require('../templates/stylelint.template');

function createScriptFile(folderPath, fileName, content, coverFile = false) {
  mkdirSync(folderPath);

  const result = writeFileSync(`${folderPath}/${fileName}`, content, {
    coverFile: !!coverFile,
  });

  if (result) {
    promptSuccess(`${fileName} create success`);
  } else {
    promptInfo(`${fileName} already exist, ignore create`);
  }

  promptNewLine();

  return result;
}

function createCommitlintConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(commitlintConfigContentFile);

  if (result) {
    if (!checkStringIsEmpty(successMessage)) {
      promptInfo(successMessage);
    }
  }
}

function createBabelConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(babelConfigContentFile);

  if (result) {
    if (!checkStringIsEmpty(successMessage)) {
      promptInfo(successMessage);
    }
  }
}

function createNcuConfigFile(successMessage = '') {
  let result = writeJsonFileSync(`./.ncurc.json`, {}, { coverFile: false });

  if (result) {
    if (!checkStringIsEmpty(successMessage)) {
      promptInfo(successMessage);
    }
  }
}

function createNpmConfigFile(successMessage = '') {
  let result = writeFileSync(
    `./.npmrc`,
    `# npm config
auto-install-peers=true`,
    { coverFile: false },
  );

  if (result) {
    if (!checkStringIsEmpty(successMessage)) {
      promptInfo(successMessage);
    }
  }
}

function createAssistConfigScriptFile() {
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

  return createScriptFile(
    `./develop/assists/config`,
    'index.js',
    content,
    false,
  );
}

function createCleanScriptFile() {
  const content = `${fileGlobalHeader}
const { clean } = require('easy-soft-develop');

const { cleanCommand, cleanCollection } = require('./config');

clean(cleanCommand, cleanCollection);
`;

  return createScriptFile('./develop/assists', 'clean.js', content, true);
}

function createPackageCheckSpecialVersionScriptFile() {
  const content = `${fileGlobalHeader}
const { updateSpecialPackageVersion } = require('easy-soft-develop');

const { updateSpecialPackageCollection } = require('./config');

updateSpecialPackageVersion(updateSpecialPackageCollection);
`;

  try {
    createScriptFile(
      './develop/assists',
      'package.update.special.version.js',
      content,
      true,
    );
  } catch (error) {
    promptError(error);
  }
}

function createInstallGlobalDevDependenceScriptFile() {
  const content = `${fileGlobalHeader}
const { installGlobalDevDependencePackages } = require('easy-soft-develop');

const { developDependencePackageCollection } = require('./config');

installGlobalDevDependencePackages(developDependencePackageCollection);
`;

  try {
    createScriptFile(
      './develop/assists',
      'install.global.develop.dependence.js',
      content,
      true,
    );
  } catch (error) {
    promptError(error);
  }
}

function createConfigEnvironmentScriptFiles() {
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
    createScriptFile(
      './develop/assists',
      'config.environment.js',
      content,
      true,
    );
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

function createDevelopFiles(waitMessage = '', successMessage = '') {
  if (!checkStringIsEmpty(waitMessage)) {
    promptInfo(waitMessage);
  }

  mkdirSync(`./develop`);
  mkdirSync(`./develop/assists`);
  mkdirSync(`./develop/config`);

  createConfigEnvironmentScriptFiles();

  createAssistConfigScriptFile();

  createCleanScriptFile();

  createPackageCheckSpecialVersionScriptFile();

  createInstallGlobalDevDependenceScriptFile();

  writeFileWithOptionsSync(editorContentFile);

  //#region eslint

  writeFileWithOptionsSync(eslintContentFile);

  writeFileWithOptionsSync(eslintIgnoreFile);

  writeFileWithOptionsSync(eslintConfigFile);

  writeFileWithOptionsSync(eslintRuleFile);

  //#endregion

  //#region git

  writeFileWithOptionsSync(gitAttributeFile);

  writeFileWithOptionsSync(gitIgnoreFile);

  //#endregion

  //#region lintStaged

  writeFileWithOptionsSync(lintStagedContentFile);

  //#endregion

  //#region package.json

  writeFileWithOptionsSync(globalChildPackageFile);

  writeFileWithOptionsSync(globalMainPackageFile);

  writeFileWithOptionsSync(customChildPackageFile);

  writeFileWithOptionsSync(customMainPackageFile);

  //#endregion

  //#region prettier

  writeFileWithOptionsSync(prettierIgnoreFile);

  writeFileWithOptionsSync(prettierContentFile);

  writeFileWithOptionsSync(prettierConfigFile);

  //#endregion

  //#region stylelint

  writeFileWithOptionsSync(stylelintIgnoreFile);

  writeFileWithOptionsSync(stylelintContentFile);

  writeFileWithOptionsSync(stylelintConfigFile);

  //#endregion

  if (!checkStringIsEmpty(successMessage)) {
    promptInfo(successMessage);
    promptNewLine();
  }
}

module.exports = {
  createCommitlintConfigFile,
  createBabelConfigFile,
  createNcuConfigFile,
  createNpmConfigFile,
  createCleanScriptFile,
  createPackageCheckSpecialVersionScriptFile,
  createInstallGlobalDevDependenceScriptFile,
  createConfigEnvironmentScriptFiles,
  createDevelopFiles,
};
