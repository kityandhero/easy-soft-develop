const { mkdirRelativeSync, checkStringIsEmpty, promptError, promptSuccess, writeJsonFileRelativeSync, writeFileSync, writeJsonFileSync, promptInfo, promptNewLine } = require('../tools/meta');
const { createDevelopScriptFiles } = require('../tools/develop.assist');
const { cd } = require('../tools/shell');
const { getGlobalPackages, globalScript, packageScript } = require('../tools/package.script');

const { content: commitlintConfigContent } = require('../templates/commitlint.config.template');
const { content: babelConfigContent } = require('../templates/babel.config.template');
const { content: editorContent } = require('../templates/editor.template');
const { content: eslintContent, ignore: eslintIgnore, config: eslintConfig, rule: eslintRule } = require('../templates/eslint.template');
const { attribute: gitAttribute, ignore: gitIgnore } = require('../templates/git.template');
const { content: lintStagedContent } = require('../templates/lintStaged.template');
const { childPackage, mainPackage } = require('../templates/package.template');
const { ignore: prettierIgnore, content: prettierContent, config: prettierConfig } = require('../templates/prettier.template');
const { ignore: stylelintIgnore, content: stylelintContent, config: stylelintConfig } = require('../templates/stylelint.template');

function createLernaProjectFolder(name) {
  mkdirRelativeSync(name);

  promptSuccess(`step *: create folder ${name} success`);
}

function createLernaPackageJsonFile(name) {
  const devDependencies = {};

  getGlobalPackages().forEach((o) => {
    if (checkStringIsEmpty(o)) {
      return;
    }

    devDependencies[o] = '^0.0.1';
  });

  const packageJson = {
    name: name,
    version: '1.0.0',
    author: '',
    workspaces: ['packages/*'],
    scripts: globalScript,
    dependencies: {},
    devDependencies: devDependencies,
  };

  writeJsonFileRelativeSync(`./${name}/package.json`, packageJson);

  promptSuccess(`step *: create package.json success`);
}

function createPnpmWorkspaceFile(name) {
  const content = `packages:
  - 'packages/*'`;

  writeFileSync(`./${name}/pnpm-workspace.yaml`, content);

  promptSuccess(`step *: create pnpm-workspace.yaml success`);
}

function createLernaConfigFile(name) {
  const content = `{
    "packages": ["packages/*"],
    "version": "independent",
    "useWorkspaces": true,
    "npmClient": "pnpm",
    "command": {
      "updated": {
        "conventionalCommits": true,
        "changelogPreset": "conventional-changelog-conventionalcommits"
      },
      "version": {
        "conventionalCommits": true,
        "message": "chore(${name}): version",
        "changelogPreset": "conventional-changelog-conventionalcommits"
      },
      "publish": {
        "conventionalCommits": true,
        "message": "chore(${name}): publish",
        "changelogPreset": "conventional-changelog-conventionalcommits"
      }
    }
  }
  `;

  writeFileSync(`./${name}/lerna.json`, content);

  promptSuccess(`step *: create lerna.json success`);
}

function createProjectFolder(name, projectName) {
  mkdirRelativeSync(`./${name}/packages/`);
  mkdirRelativeSync(`./${name}/packages/${projectName}`);
  mkdirRelativeSync(`./${name}/packages/${projectName}/src`);
}

function createPackageJsonFile(name, projectName) {
  const devDependencies = {};

  getGlobalPackages().forEach((o) => {
    if (checkStringIsEmpty(o)) {
      return;
    }

    devDependencies[o] = '^0.0.1';
  });

  const packageJson = {
    name: projectName,
    version: '1.0.0',
    author: '',
    scripts: packageScript,
    dependencies: {},
    devDependencies: devDependencies,
  };

  writeJsonFileRelativeSync(`./${name}/packages/${projectName}/package.json`, packageJson);

  promptSuccess(`step *: create package.json success`);
}

function createCommitlintConfigFile(name) {
  const content = commitlintConfigContent;

  writeFileSync(`./${name}/commitlint.config.js`, content);

  promptSuccess(`step *: create commitlint.config.js success`);
}

function createBabelConfigFile(name) {
  const content = babelConfigContent;

  writeFileSync(`./${name}/babel.config.js`, content);

  promptSuccess(`step *: create babel.config.js success`);
}

function createNcuConfigFile(name) {
  writeJsonFileSync(`./${name}/.ncurc.json`, {});

  promptSuccess(`step *: create .ncurc.json success`);
}

function createPackagesFolder(name) {
  mkdirRelativeSync(`./${name}/packages`);

  promptSuccess(`step *: create packages folder success`);
}

function createDevelopFolder(name) {
  mkdirRelativeSync(`./${name}/develop`);
  mkdirRelativeSync(`./${name}/develop/assists`);
  mkdirRelativeSync(`./${name}/develop/config`);

  mkdirRelativeSync(`./${name}/develop/config/editor/template`);
  writeFileSync(`./${name}/develop/config/editor/template/content.js`, editorContent);

  //#region eslint

  mkdirRelativeSync(`./${name}/develop/config/eslint/template`);
  writeFileSync(`./${name}/develop/config/eslint/template/content.js`, eslintContent);
  writeFileSync(`./${name}/develop/config/eslint/template/ignore.content.js`, eslintIgnore);

  mkdirRelativeSync(`./${name}/develop/config/eslint/config`);
  writeFileSync(`./${name}/develop/config/eslint/config/index.js`, eslintConfig);

  mkdirRelativeSync(`./${name}/develop/config/eslint/rules`);
  writeFileSync(`./${name}/develop/config/eslint/rules/index.js`, eslintRule);

  //#endregion

  //#region git

  mkdirRelativeSync(`./${name}/develop/config/git/template`);
  writeFileSync(`./${name}/develop/config/git/template/attributes.content.js`, gitAttribute);
  writeFileSync(`./${name}/develop/config/git/template/ignore.content.js`, gitIgnore);

  //#endregion

  //#region lintStaged

  mkdirRelativeSync(`./${name}/develop/config/lintStaged/template`);
  writeFileSync(`./${name}/develop/config/lintStaged/template/content.js`, lintStagedContent);

  //#endregion

  //#region package.json

  mkdirRelativeSync(`./${name}/develop/config/package/template`);
  writeFileSync(`./${name}/develop/config/package/template/children.content.js`, childPackage);
  writeFileSync(`./${name}/develop/config/package/template/main.content.js`, mainPackage);

  //#endregion

  //#region prettier

  mkdirRelativeSync(`./${name}/develop/config/prettier/template`);
  writeFileSync(`./${name}/develop/config/prettier/template/ignore.content.js`, prettierIgnore);
  writeFileSync(`./${name}/develop/config/prettier/template/content.js`, prettierContent);

  mkdirRelativeSync(`./${name}/develop/config/prettier/config`);
  writeFileSync(`./${name}/develop/config/prettier/config/index.js`, prettierConfig);

  //#endregion

  //#region stylelint

  mkdirRelativeSync(`./${name}/develop/config/stylelint/template`);
  writeFileSync(`./${name}/develop/config/stylelint/template/ignore.content.js`, stylelintIgnore);
  writeFileSync(`./${name}/develop/config/stylelint/template/content.js`, stylelintContent);

  mkdirRelativeSync(`./${name}/develop/config/stylelint/config`);
  writeFileSync(`./${name}/develop/config/stylelint/config/index.js`, stylelintConfig);

  //#endregion

  mkdirRelativeSync(`./${name}/develop/config/eslint/template`);

  promptSuccess(`step *: create develop folder success`);
}

function createHusky(name) {
  mkdirRelativeSync(`./${name}/.husky`);

  const commitMsg = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx commitlint -e $HUSKY_GIT_PARAMS -V
`;

  writeFileSync(`./${name}/.husky/commit-msg`, commitMsg);

  const precommit = `#!/bin/sh
  . "$(dirname "$0")/_/husky.sh"

  npx lerna run --concurrency 1 --stream precommit --since HEAD --exclude-dependents
  `;

  writeFileSync(`./${name}/.husky/pre-commit`, precommit);

  promptSuccess(`step *: create husky folder success`);
}

function createVscode(name) {
  mkdirRelativeSync(`./${name}/.vscode`);

  const settingJson = {
    'cSpell.words': ['conventionalcommits', 'packagejson', 'pmmmwh', 'postcz', 'postz', 'precommit', 'precz'],
    'git.ignoreLimitWarning': true,
    'editor.codeActionsOnSave': {
      'source.fixAll.eslint': true,
      'source.fixAll.stylelint': true,
    },
  };

  writeJsonFileSync(`./${name}/.vscode/settings.json`, settingJson);
}

function configEnvironment(name) {
  mkdirRelativeSync(`./${name}/develop`);

  promptSuccess(`step *: config environment`);

  promptNewLine();

  createDevelopScriptFiles(`./${name}`);

  const r = cd(`./${name}`);

  promptNewLine();

  promptInfo('add global dev packages');

  r.exec('npx ncu -u --packageFile ./package.json');

  promptInfo('install dependence packages');

  r.exec('pnpm install -w');

  promptNewLine();

  r.exec('npm run z:initial:environment');

  r.exec('git init -b main');

  r.exec('npx husky install');
}

function createLernaProject(nameSource) {
  if (checkStringIsEmpty(nameSource)) {
    promptError('project name disallow empty, please use create-lerna-project --name name or get info with create-lerna-project --help');

    return;
  }
  const name = `lerna-${nameSource}`;

  createLernaProjectFolder(name);
  createLernaPackageJsonFile(name);
  createLernaConfigFile(name);
  createPnpmWorkspaceFile(name);

  createProjectFolder(name, nameSource);
  createPackageJsonFile(name, nameSource);

  createCommitlintConfigFile(name);
  createBabelConfigFile(name);
  createNcuConfigFile(name);
  createPackagesFolder(name);
  createDevelopFolder(name);
  createHusky(name);
  createVscode(name);

  configEnvironment(name);
}

module.exports = { createLernaProject };
