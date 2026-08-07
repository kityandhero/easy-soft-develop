import {
  promptSuccess,
  promptInfo,
  promptError,
  mkdirSync,
  writeFileSync,
  promptEmptyLine,
  writeFileWithOptionsSync,
  checkStringIsEmpty,
} from './meta.js';

import { fileBuilderHeader } from '../templates/template.config.js';
import { contentFile as commitlintConfigContentFile } from '../templates/commitlint.config.template.js';
import { contentFile as czConfigContentFile } from '../templates/cz.config.template.js';
import { contentFile as babelConfigContentFile } from '../templates/babel.config.template.js';
import { contentFile as editorContentFile } from '../templates/editor.template.js';
import {
  contentFile as eslintContentFile,
  ignoreCustomFile as eslintIgnoreCustomFile,
  ignoreEmbedFile as eslintIgnoreEmbedFile,
  ignoreFile as eslintIgnoreFile,
  configFile as eslintConfigFile,
  ruleCustomFile as eslintCustomRuleFile,
  ruleEmbedFile as eslintEmbedRuleFile,
  ruleFile as eslintRuleFile,
  extendEmbedFile as eslintExtendCustomFile,
  extendCustomFile as eslintExtendEmbedFile,
  extendFile as eslintExtendFile,
  parserCustomFile as eslintParserCustomFile,
  parserEmbedFile as eslintParserEmbedFile,
  parserFile as eslintParserFile,
  pluginEmbedFile as eslintPluginEmbedFile,
  pluginCustomFile as eslintPluginCustomFile,
  pluginFile as eslintPluginFile,
  settingCustomFile as eslintSettingCustomFile,
  settingEmbedFile as eslintSettingEmbedFile,
  settingFile as eslintSettingFile,
} from '../templates/eslint.template.js';
import {
  attributeFile as gitAttributeFile,
  ignoreFile as gitIgnoreFile,
} from '../templates/git.template.js';
import { contentFile as lintStagedContentFile } from '../templates/lint-staged.template.js';
import {
  globalChildPackageFile,
  globalMainPackageFile,
  customChildPackageFile,
  customMainPackageFile,
} from '../templates/package.template.js';
import {
  ignoreFile as prettierIgnoreFile,
  contentFile as prettierContentFile,
  configFile as prettierConfigFile,
} from '../templates/prettier.template.js';
import {
  contentFile as ncuContentFile,
  configFile as ncuConfigFile,
  configEmbedFile as ncuConfigEmbedFile,
  configCustomFile as ncuConfigCustomFile,
} from '../templates/ncu.template.js';
import {
  contentFile as jsdocContentFile,
  configFile as jsdocConfigFile,
} from '../templates/jsdoc.template.js';
import {
  ignoreFile as stylelintIgnoreFile,
  contentFile as stylelintContentFile,
  configFile as stylelintConfigFile,
} from '../templates/stylelint.template.js';
import {
  configFile as jestConfigFile,
  simpleTestFile as jestSimpleTestFile,
} from '../templates/jest.template.js';

const childrenDevelopPackageConfigContent = `${fileBuilderHeader}
export const childrenDevelopPackageList = [];
`;

const childrenSpecialDevelopPackageConfigContent = `${fileBuilderHeader}
export const childrenSpecialDevelopPackageList = {};
`;

const cleanConfigContent = `${fileBuilderHeader}
export const cleanCommand = '';

export const cleanCollection = [];
`;

const globalDevelopPackageConfigContent = `${fileBuilderHeader}
export const globalDevelopPackageList = [];
`;

const mainDevelopPackageConfigContent = `${fileBuilderHeader}
export const mainDevelopPackageList = [];
`;

const updatePackageFromPackageConfigContent = `${fileBuilderHeader}
export const updatePackageFromPackageOptions = {
  agent: '',
  localFile: '',
  packageUrl: '',
  repo: '',
};
`;

const updateSpecialPackageConfigContent = `${fileBuilderHeader}
export const updateSpecialPackageCollection = [];
`;

const assistConfigIndexContent = `${fileBuilderHeader}
export { childrenDevelopPackageList } from './childrenDevelopPackage.config.mjs';
export { childrenSpecialDevelopPackageList } from './childrenSpecialDevelopPackage.config.mjs';
export { cleanCollection, cleanCommand } from './clean.config.mjs';
export { globalDevelopPackageList } from './globalDevelopPackage.config.mjs';
export { mainDevelopPackageList } from './mainDevelopPackage.config.mjs';
export { updatePackageFromPackageOptions } from './updatePackageFromPackage.config.mjs';
export { updateSpecialPackageCollection } from './updateSpecialPackage.config.mjs';
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

export function createCzConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(czConfigContentFile);

  if (result && !checkStringIsEmpty(successMessage)) {
    promptSuccess(successMessage);
  }
}

export function createCommitlintConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(commitlintConfigContentFile);

  if (result && !checkStringIsEmpty(successMessage)) {
    promptSuccess(successMessage);
  }
}

export function createBabelConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(babelConfigContentFile);

  if (result && !checkStringIsEmpty(successMessage)) {
    promptSuccess(successMessage);
  }
}

export function createNcuConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(ncuContentFile);

  if (result && !checkStringIsEmpty(successMessage)) {
    promptSuccess(successMessage);
  }
}

export function createJsdocConfigFile(successMessage = '') {
  let result = writeFileWithOptionsSync(jsdocContentFile);

  if (result && !checkStringIsEmpty(successMessage)) {
    promptSuccess(successMessage);
  }
}

export function createNpmConfigFile(successMessage = '') {
  let result = writeFileSync(
    `./.npmrc`,
    `# npm config
auto-install-peers=true`,
    { coverFile: false },
  );

  if (result && !checkStringIsEmpty(successMessage)) {
    promptSuccess(successMessage);
  }
}

function createAssistConfigScriptFile() {
  createScriptFile(
    `./develop/assists/config`,
    'childrenDevelopPackage.config.mjs',
    childrenDevelopPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'childrenSpecialDevelopPackage.config.mjs',
    childrenSpecialDevelopPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'clean.config.mjs',
    cleanConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'globalDevelopPackage.config.mjs',
    globalDevelopPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'mainDevelopPackage.config.mjs',
    mainDevelopPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'updatePackageFromPackage.config.mjs',
    updatePackageFromPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'updateSpecialPackage.config.mjs',
    updateSpecialPackageConfigContent,
    false,
  );

  createScriptFile(
    `./develop/assists/config`,
    'index.mjs',
    assistConfigIndexContent,
    true,
  );
}

export function createCleanScriptFile() {
  const content = `${fileBuilderHeader}
import { clean } from 'easy-soft-develop';

import { cleanCollection, cleanCommand } from './config/index.mjs';

clean(cleanCommand, ...cleanCollection);
`;

  return createScriptFile('./develop/assists', 'clean.mjs', content, true);
}

export function createUpdatePackageFromPackageScriptFile() {
  const content = `${fileBuilderHeader}
import { updatePackageFromPackage } from 'easy-soft-develop';

import { updatePackageFromPackageOptions } from './config/index.mjs';

updatePackageFromPackage(updatePackageFromPackageOptions);
`;

  return createScriptFile(
    './develop/assists',
    'update.package.from.package.js',
    content,
    true,
  );
}

export function createPackageCheckSpecialVersionScriptFile() {
  const content = `${fileBuilderHeader}
import { updateSpecialPackageVersion } from 'easy-soft-develop';

import { updateSpecialPackageCollection } from './config/index.mjs';

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

export function createInstallGlobalDevelopDependenceScriptFile() {
  const content = `${fileBuilderHeader}
import { installDevelopDependencePackages } from 'easy-soft-develop';

import {
  childrenDevelopPackageList,
  childrenSpecialDevelopPackageList,
  globalDevelopPackageList,
  mainDevelopPackageList,
} from './config/index.mjs';

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

/**
 * Create initial environment script files
 */
export function createInitialEnvironmentScriptFiles() {
  const content = `${fileBuilderHeader}
import { initialEnvironment } from 'easy-soft-develop';

import editorFile from '../config/editor/template/content.mjs';
import eslintFile from '../config/eslint/template/content.mjs';
import editorAttributesFile from '../config/git/template/attributes.content.mjs';
import editorIgnoreFile from '../config/git/template/ignore.content.mjs';
import jestFile from '../config/jest/template/content.mjs';
import jestSimpleTestFile from '../config/jest/template/simple.test.content.mjs';
import jsdocFile from '../config/jsdoc/template/content.mjs';
import lintStagedFile from '../config/lint-staged/template/content.mjs';
import ncuFile from '../config/ncu/template/content.mjs';
import childrenCustomPackageFile from '../config/package/custom/children.content.mjs';
import mainCustomPackageFile from '../config/package/custom/main.content.mjs';
import childrenNecessaryPackageFile from '../config/package/template/children.content.mjs';
import mainNecessaryPackageFile from '../config/package/template/main.content.mjs';
import prettierFile from '../config/prettier/template/content.mjs';
import prettierIgnoreFile from '../config/prettier/template/ignore.content.mjs';
import stylelintFile from '../config/stylelint/template/content.mjs';
import stylelintIgnoreFile from '../config/stylelint/template/ignore.content.mjs';

const mainEslintFileContent = eslintFile.mainContent;
const packageEslintFileContent = eslintFile.packageContent;

const mainNcuFileContent = ncuFile.mainContent;
const packageNcuFileContent = ncuFile.packageContent;

const packageJsdocFileContent = jsdocFile.packageContent;

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
    name: 'eslint.config.mjs',
    content: mainEslintFileContent,
    coverFile: true,
  },
  {
    name: '.ncurc.mjs',
    content: mainNcuFileContent,
    coverFile: true,
  },
  {
    name: '.prettierrc.mjs',
    content: mainPrettierContent,
    coverFile: true,
  },
  {
    name: '.prettierignore',
    content: prettierIgnoreContent,
    coverFile: false,
  },
  {
    name: '.stylelintrc.mjs',
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
    name: 'eslint.config.mjs',
    content: packageEslintFileContent,
    coverFile: true,
  },
  {
    name: '.ncurc.mjs',
    content: packageNcuFileContent,
    coverFile: true,
  },
  {
    name: '.jsdoc.js',
    content: packageJsdocFileContent,
    coverFile: true,
  },
  {
    name: '.prettierrc.mjs',
    content: packagePrettierContent,
    coverFile: true,
  },
  {
    name: '.prettierignore',
    content: prettierIgnoreContent,
    coverFile: false,
  },
  {
    name: '.stylelintrc.mjs',
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
    name: 'jest.config.mjs',
    content: jestContent,
    coverFile: false,
  },
  {
    name: 'simple.test.mjs',
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

export function createDevelopFiles(
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

  writeFileWithOptionsSync(eslintIgnoreCustomFile);

  writeFileWithOptionsSync(eslintIgnoreEmbedFile);

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

  //#region ncu

  writeFileWithOptionsSync(ncuContentFile);

  writeFileWithOptionsSync(ncuConfigEmbedFile);
  writeFileWithOptionsSync(ncuConfigCustomFile);
  writeFileWithOptionsSync(ncuConfigFile);

  //#endregion

  //#region jsdoc

  writeFileWithOptionsSync(jsdocContentFile);

  writeFileWithOptionsSync(jsdocConfigFile);

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
