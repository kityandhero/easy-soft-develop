const {
  checkStringIsEmpty,
  promptError,
  promptSuccess,
  writeFileSync,
  writeJsonFileSync,
  promptInfo,
  promptNewLine,
  writeFileWithOptionsSync,
  mkdirSync,
} = require('../tools/meta');
const { createDevelopScriptFiles } = require('../tools/develop.assist');
const { cd, exec } = require('../tools/shell');
const {
  getGlobalPackages,
  globalScript,
  packageScript,
} = require('../tools/package.script');

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

function createLernaProjectFolder(name) {
  mkdirSync(`./${name}`);

  promptSuccess(`step *: create folder ${name} success`);
}

function createLernaPackageJsonFile(lernaName) {
  const devDependencies = {};

  getGlobalPackages().forEach((o) => {
    if (checkStringIsEmpty(o)) {
      return;
    }

    devDependencies[o] = '^0.0.1';
  });

  const packageJson = {
    name: lernaName,
    version: '1.0.0',
    author: '',
    workspaces: ['packages/*'],
    scripts: globalScript,
    dependencies: {},
    devDependencies: devDependencies,
  };

  let result = writeJsonFileSync(`./package.json`, packageJson, {
    coverFile: true,
  });

  if (result) {
    promptSuccess(`step *: create package.json success`);
  }
}

function createPnpmWorkspaceFile() {
  const content = `packages:
  - 'packages/*'`;

  let result = writeFileSync(`./pnpm-workspace.yaml`, content, {
    coverFile: true,
  });

  if (result) {
    promptSuccess(`step *: create pnpm-workspace.yaml success`);
  }
}

function createLernaConfigFile(lernaName) {
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
        "message": "chore(${lernaName}): version",
        "changelogPreset": "conventional-changelog-conventionalcommits"
      },
      "publish": {
        "conventionalCommits": true,
        "message": "chore(${lernaName}): publish",
        "changelogPreset": "conventional-changelog-conventionalcommits"
      }
    }
  }
  `;

  let result = writeFileSync(`./lerna.json`, content, { coverFile: true });

  if (result) {
    promptSuccess(`step *: create lerna.json success`);
  }
}

function createProjectFolder(name) {
  mkdirSync(`./packages/`);
  mkdirSync(`./packages/${name}`);
  mkdirSync(`./packages/${name}/src`);

  promptSuccess(`step *: create packages folder success`);
}

function createPackageJsonFile(name) {
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
    scripts: packageScript,
    dependencies: {},
    devDependencies: devDependencies,
  };

  let result = writeJsonFileSync(
    `./packages/${name}/package.json`,
    packageJson,
    { coverFile: true },
  );

  if (result) {
    promptSuccess(`step *: create package.json success`);
  }
}

function createCommitlintConfigFile() {
  let result = writeFileWithOptionsSync(commitlintConfigContentFile);

  if (result) {
    promptSuccess(`step *: create commitlint.config.js success`);
  }
}

function createBabelConfigFile() {
  let result = writeFileWithOptionsSync(babelConfigContentFile);

  if (result) {
    promptSuccess(`step *: create babel.config.js success`);
  }
}

function createNcuConfigFile() {
  let result = writeJsonFileSync(`./.ncurc.json`, {});

  if (result) {
    promptSuccess(`step *: create .ncurc.json success`);
  }
}

function createNpmConfigFile() {
  let result = writeFileSync(
    `./.npmrc`,
    `# npm config
auto-install-peers=true`,
  );

  if (result) {
    promptSuccess(`step *: create .npmrc success`);
  }
}

function createDevelopFolder() {
  mkdirSync(`./develop`);
  mkdirSync(`./develop/assists`);
  mkdirSync(`./develop/config`);

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

  promptSuccess(`step *: create develop folder success`);
}

function createHusky() {
  mkdirSync(`./.husky`);

  const commitMsg = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx commitlint -e $HUSKY_GIT_PARAMS -V
`;

  writeFileSync(`./.husky/commit-msg`, commitMsg, { coverFile: true });

  const precommit = `#!/bin/sh
  . "$(dirname "$0")/_/husky.sh"

  npx lerna run --concurrency 1 --stream precommit --since HEAD --exclude-dependents
  `;

  writeFileSync(`./.husky/pre-commit`, precommit, { coverFile: true });

  promptSuccess(`step *: create husky folder success`);
}

function createVscode() {
  mkdirSync(`./.vscode`);

  const settingJson = {
    'cSpell.words': [
      'conventionalcommits',
      'packagejson',
      'pmmmwh',
      'postcz',
      'postz',
      'precommit',
      'precz',
      'prez',
    ],
    'git.ignoreLimitWarning': true,
    'editor.codeActionsOnSave': {
      'source.fixAll.eslint': true,
      'source.fixAll.stylelint': true,
    },
  };

  writeJsonFileSync(`./.vscode/settings.json`, settingJson, {
    coverFile: true,
  });
}

function configEnvironment() {
  mkdirSync(`./develop`);

  promptSuccess(`step *: config environment`);

  promptNewLine();

  createDevelopScriptFiles(`.`);

  promptInfo('add global dev packages');

  exec('npx ncu -u --packageFile ./**/package.json');

  promptInfo('install dependence packages');

  exec('pnpm install -w');

  exec('npm run z:initial:environment');

  promptNewLine();

  promptInfo('create git branch main');

  exec('git init -b main');

  promptNewLine();

  promptInfo('husky install');

  exec('npx husky install');
}

function createLernaProject(name) {
  if (checkStringIsEmpty(name)) {
    promptError(
      'project name disallow empty, please use create-lerna-project --name name or get info with create-lerna-project --help',
    );

    return;
  }
  const lernaName = `lerna-${name}`;

  createLernaProjectFolder(lernaName);

  cd(`./${lernaName}`);

  createLernaPackageJsonFile(lernaName);
  createLernaConfigFile(lernaName);
  createPnpmWorkspaceFile();

  createProjectFolder(name);
  createPackageJsonFile(name);

  createCommitlintConfigFile();
  createBabelConfigFile();
  createNcuConfigFile();
  createNpmConfigFile();
  createDevelopFolder();
  createHusky();
  createVscode();

  configEnvironment();
}

module.exports = { createLernaProject };
