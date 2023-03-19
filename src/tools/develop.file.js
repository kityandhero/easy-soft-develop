const {
  promptSuccess,
  promptInfo,
  promptError,
  mkdirSync,
  writeFileSync,
  promptEmptyLine,
  writeFileWithOptionsSync,
  checkStringIsEmpty,
  writeJsonFileSync,
} = require('./meta');
const { fileGlobalHeader } = require('../templates/template.config');
const {
  contentFile: commitlintConfigContentFile,
} = require('../templates/commitlint.config.template');
const {
  contentFile: czConfigContentFile,
} = require('../templates/cz.config.template');
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
  ruleCustomFile: eslintCustomRuleFile,
  ruleEmbedFile: eslintEmbedRuleFile,
  ruleFile: eslintRuleFile,
  extendEmbedFile: eslintExtendCustomFile,
  extendCustomFile: eslintExtendEmbedFile,
  extendFile: eslintExtendFile,
  parserCustomFile: eslintParserCustomFile,
  parserEmbedFile: eslintParserEmbedFile,
  parserFile: eslintParserFile,
  pluginEmbedFile: eslintPluginEmbedFile,
  pluginCustomFile: eslintPluginCustomFile,
  pluginFile: eslintPluginFile,
  settingCustomFile: eslintSettingCustomFile,
  settingEmbedFile: eslintSettingEmbedFile,
  settingFile: eslintSettingFile,
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
const {
  configFile: jestConfigFile,
  simpleTestFile: jestSimpleTestFile,
} = require('../templates/jest.template');

const childrenDevelopPackageConfigContent = `${fileGlobalHeader}
const childrenDevelopPackageList = [];

module.exports = {
  childrenDevelopPackageList,
};
`;

const childrenSpecialDevelopPackageConfigContent = `${fileGlobalHeader}
const childrenSpecialDevelopPackageList = {};

module.exports = {
  childrenSpecialDevelopPackageList,
};
`;

const cleanConfigContent = `${fileGlobalHeader}
const cleanCommand = 'lerna clean -y';

const cleanCollection = [];

module.exports = {
  cleanCommand,
  cleanCollection,
};
`;

const globalDevelopPackageConfigContent = `${fileGlobalHeader}
const globalDevelopPackageList = [];

module.exports = {
  globalDevelopPackageList,
};
`;

const mainDevelopPackageConfigContent = `${fileGlobalHeader}
const mainDevelopPackageList = [];

module.exports = {
  mainDevelopPackageList,
};
`;

const updatePackageFromPackageConfigContent = `${fileGlobalHeader}
const updatePackageFromPackageOptions = {
  agent: '',
  localFile: '',
  packageUrl: '',
  repo: '',
};

module.exports = {
  updatePackageFromPackageOptions,
};
`;

const updateSpecialPackageConfigContent = `${fileGlobalHeader}
const updateSpecialPackageCollection = [];

module.exports = {
  updateSpecialPackageCollection,
};
`;

const assistConfigIndexContent = `${fileGlobalHeader}
const {
  childrenDevelopPackageList,
} = require('./childrenDevelopPackage.config');
const {
  childrenSpecialDevelopPackageList,
} = require('./childrenSpecialDevelopPackage.config');
const { cleanCollection, cleanCommand } = require('./clean.config');
const { globalDevelopPackageList } = require('./globalDevelopPackage.config');
const { mainDevelopPackageList } = require('./mainDevelopPackage.config');
const {
  updatePackageFromPackageOptions,
} = require('./updatePackageFromPackage.config');
const {
  updateSpecialPackageCollection,
} = require('./updateSpecialPackage.config');

module.exports = {
  childrenDevelopPackageList,
  childrenSpecialDevelopPackageList,
  cleanCollection,
  cleanCommand,
  globalDevelopPackageList,
  mainDevelopPackageList,
  updatePackageFromPackageOptions,
  updateSpecialPackageCollection,
};
`;

function createScriptFile(folderPath, fileName, content, coverFile = false) {
  mkdirSync(folderPath);

  const result = writeFileSync(`${folderPath}/${fileName}`, content, {
    coverFile: !!coverFile,
  });

  if (result) {
    promptSuccess(`${folderPath}/${fileName} create success`);
  }

  promptEmptyLine();

  return result;
}

function createCzConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(czConfigContentFile);

  if (result) {
    if (!checkStringIsEmpty(successMessage)) {
      promptSuccess(successMessage);
    }
  }
}

function createCommitlintConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(commitlintConfigContentFile);

  if (result) {
    if (!checkStringIsEmpty(successMessage)) {
      promptSuccess(successMessage);
    }
  }
}

function createBabelConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(babelConfigContentFile);

  if (result) {
    if (!checkStringIsEmpty(successMessage)) {
      promptSuccess(successMessage);
    }
  }
}

function createNcuConfigFile(successMessage = '') {
  let result = writeJsonFileSync(`./.ncurc.json`, {}, { coverFile: false });

  if (result) {
    if (!checkStringIsEmpty(successMessage)) {
      promptSuccess(successMessage);
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
      promptSuccess(successMessage);
    }
  }
}

function createAssistConfigScriptFile() {
  createScriptFile(
    `./develop/assists/config`,
    'childrenDevelopPackage.config.js',
    childrenDevelopPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'childrenSpecialDevelopPackage.config.js',
    childrenSpecialDevelopPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'clean.config.js',
    cleanConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'globalDevelopPackage.config.js',
    globalDevelopPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'mainDevelopPackage.config.js',
    mainDevelopPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'updatePackageFromPackage.config.js',
    updatePackageFromPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'updateSpecialPackage.config.js',
    updateSpecialPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'index.js',
    assistConfigIndexContent,
    true,
  );
}

function createCleanScriptFile() {
  const content = `${fileGlobalHeader}
const { clean } = require('easy-soft-develop');

const { cleanCommand, cleanCollection } = require('./config');

clean(cleanCommand, ...cleanCollection);
`;

  return createScriptFile('./develop/assists', 'clean.js', content, true);
}

function createUpdatePackageFromPackageScriptFile() {
  const content = `${fileGlobalHeader}
const { updatePackageFromPackage } = require('easy-soft-develop');

const { updatePackageFromPackageOptions } = require('./config');

updatePackageFromPackage(updatePackageFromPackageOptions);
`;

  return createScriptFile(
    './develop/assists',
    'update.package.from.package.js',
    content,
    true,
  );
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

function createInstallGlobalDevelopDependenceScriptFile() {
  const content = `${fileGlobalHeader}
const { installDevelopDependencePackages } = require('easy-soft-develop');

const {
  globalDevelopPackageList,
  mainDevelopPackageList,
  childrenDevelopPackageList,
  childrenSpecialDevelopPackageList,
} = require('./config');

installDevelopDependencePackages({
  globalDevelopPackageList,
  mainDevelopPackageList,
  childrenDevelopPackageList,
  childrenSpecialDevelopPackageList,
});
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

function createInitialEnvironmentScriptFiles() {
  const content = `${fileGlobalHeader}
const { initialEnvironment } = require('easy-soft-develop');

const eslintFile = require('../config/eslint/template/content');
const eslintIgnoreFile = require('../config/eslint/template/ignore.content');
const prettierFile = require('../config/prettier/template/content');
const prettierIgnoreFile = require('../config/prettier/template/ignore.content');
const stylelintFile = require('../config/stylelint/template/content');
const stylelintIgnoreFile = require('../config/stylelint/template/ignore.content');
const editorFile = require('../config/editor/template/content');
const editorAttributesFile = require('../config/git/template/attributes.content');
const editorIgnoreFile = require('../config/git/template/ignore.content');
const lintStagedFile = require('../config/lint-staged/template/content');
const jestFile = require('../config/jest/template/content');
const jestSimpleTestFile = require('../config/jest/template/simple.test.content');
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

const stylelintIgnoreContent = stylelintIgnoreFile.content;

const packageStylelintContent = stylelintFile.packageContent;

const editorConfigContent = editorFile.content;

const gitAttributesContent = editorAttributesFile.content;

const gitIgnoreContent = editorIgnoreFile.content;
const lintStagedRcContent = lintStagedFile.content;
const jestContent = jestFile.content;
const jestSimpleTestContent = jestSimpleTestFile.content;

const mainFileContentList = [
  {
    name: '.eslintrc.js',
    content: mainEslintFileContent,
    coverFile: true,
  },
  {
    name: '.prettierrc.js',
    content: mainPrettierContent,
    coverFile: true,
  },
  {
    name: '.prettierignore',
    content: prettierIgnoreContent,
    coverFile: false,
  },
  {
    name: '.stylelintrc.js',
    content: mainStylelintContent,
    coverFile: true,
  },
  {
    name: '.stylelintignore',
    content: stylelintIgnoreContent,
    coverFile: false,
  },
  {
    name: '.editorconfig',
    content: editorConfigContent,
    coverFile: true,
  },
  {
    name: '.eslintignore',
    content: eslintIgnoreContent,
    coverFile: false,
  },
  {
    name: '.gitattributes',
    content: gitAttributesContent,
    coverFile: true,
  },
  {
    name: '.gitignore',
    content: gitIgnoreContent,
    coverFile: false,
  },
  {
    name: '.lintstagedrc',
    content: lintStagedRcContent,
    coverFile: false,
  },
];

const packageFileContentList = [
  {
    name: '.eslintrc.js',
    content: packageEslintFileContent,
    coverFile: true,
  },
  {
    name: '.prettierrc.js',
    content: packagePrettierContent,
    coverFile: true,
  },
  {
    name: '.prettierignore',
    content: prettierIgnoreContent,
    coverFile: false,
  },
  {
    name: '.stylelintrc.js',
    content: packageStylelintContent,
    coverFile: true,
  },
  {
    name: '.stylelintignore',
    content: stylelintIgnoreContent,
    coverFile: false,
  },
  {
    name: '.editorconfig',
    content: editorConfigContent,
    coverFile: true,
  },
  {
    name: '.eslintignore',
    content: eslintIgnoreContent,
    coverFile: false,
  },
  {
    name: '.gitattributes',
    content: gitAttributesContent,
    coverFile: true,
  },
  {
    name: '.gitignore',
    content: gitIgnoreContent,
    coverFile: false,
  },
  {
    name: '.lintstagedrc',
    content: lintStagedRcContent,
    coverFile: false,
  },
  {
    name: 'jest.config.js',
    content: jestContent,
    coverFile: false,
  },
  {
    name: 'simple.test.js',
    relativePath: 'test',
    content: jestSimpleTestContent,
    coverFile: true,
  },
];

initialEnvironment({
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
      'initial.environment.js',
      content,
      true,
    );
  } catch (error) {
    promptError(error);
  }
}

function createDevelopFiles(
  waitMessage = 'will create develop assist file, please wait a moment',
  successMessage = '',
) {
  if (!checkStringIsEmpty(waitMessage)) {
    promptInfo(waitMessage);
  }

  mkdirSync(`./develop`);
  mkdirSync(`./develop/assists`);
  mkdirSync(`./develop/config`);

  writeFileWithOptionsSync(editorContentFile);

  //#region eslint

  writeFileWithOptionsSync(eslintContentFile);

  writeFileWithOptionsSync(eslintIgnoreFile);

  writeFileWithOptionsSync(eslintConfigFile);

  writeFileWithOptionsSync(eslintCustomRuleFile);

  writeFileWithOptionsSync(eslintEmbedRuleFile);

  writeFileWithOptionsSync(eslintRuleFile);

  writeFileWithOptionsSync(eslintSettingCustomFile);

  writeFileWithOptionsSync(eslintSettingEmbedFile);

  writeFileWithOptionsSync(eslintSettingFile);

  writeFileWithOptionsSync(eslintExtendCustomFile);

  writeFileWithOptionsSync(eslintExtendEmbedFile);

  writeFileWithOptionsSync(eslintExtendFile);

  writeFileWithOptionsSync(eslintParserCustomFile);

  writeFileWithOptionsSync(eslintParserEmbedFile);

  writeFileWithOptionsSync(eslintParserFile);

  writeFileWithOptionsSync(eslintPluginCustomFile);

  writeFileWithOptionsSync(eslintPluginEmbedFile);

  writeFileWithOptionsSync(eslintPluginFile);

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

  //#region jest

  writeFileWithOptionsSync(jestConfigFile);

  writeFileWithOptionsSync(jestSimpleTestFile);

  //#endregion

  //#region assists

  createAssistConfigScriptFile();

  createCleanScriptFile();

  createUpdatePackageFromPackageScriptFile();

  createPackageCheckSpecialVersionScriptFile();

  createInstallGlobalDevelopDependenceScriptFile();

  createInitialEnvironmentScriptFiles();

  //#endregion

  if (!checkStringIsEmpty(successMessage)) {
    promptSuccess(successMessage);
  }
}

module.exports = {
  createCzConfigFile,
  createCommitlintConfigFile,
  createBabelConfigFile,
  createNcuConfigFile,
  createNpmConfigFile,
  createCleanScriptFile,
  createPackageCheckSpecialVersionScriptFile,
  createInstallGlobalDevelopDependenceScriptFile,
  createInitialEnvironmentScriptFiles,
  createDevelopFiles,
  createUpdatePackageFromPackageScriptFile,
};
