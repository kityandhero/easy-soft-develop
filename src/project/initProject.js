const {
  checkStringIsEmpty,
  promptError,
  promptSuccess,
  writeFileSync,
  writeJsonFileSync,
  promptInfo,
  promptEmptyLine,
  mkdirSync,
  exec,
  cd,
  existDirectorySync,
} = require('../tools/meta');
const {
  createDevelopFiles,
  createCommitlintConfigFile,
  createBabelConfigFile,
  createNcuConfigFile,
  createNpmConfigFile,
  createCzConfigFile,
} = require('../tools/develop.file');
const { globalScript, packageScript } = require('../tools/package.script');
const {
  getGlobalDevelopPackages,
  getMainDevelopPackages,
  getProjectDevelopPackages,
} = require('../tools/package.dependence');
const {
  createDevelopInitialEnvironmentConfigFile,
} = require('../config/develop.initial.environment');

function createLernaProjectFolder(name) {
  mkdirSync(`./${name}`);

  promptSuccess(`step *: create folder ${name} success`);
}

function createLernaPackageJsonFile(lernaName) {
  const devDependencies = {};

  let packages = getGlobalDevelopPackages();

  packages = packages.concat(getMainDevelopPackages());

  packages.forEach((o) => {
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

function createLernaConfigFile(packageName) {
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
        "message": "chore(${packageName}): version",
        "changelogPreset": "conventional-changelog-conventionalcommits"
      },
      "publish": {
        "conventionalCommits": true,
        "message": "chore(${packageName}): publish",
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
  mkdirSync(`./packages/${name}/test`);

  promptSuccess(`step *: create packages folder success`);
}

function createPackageJsonFile(name) {
  const devDependencies = {};

  let packages = getGlobalDevelopPackages();

  packages = packages.concat(getProjectDevelopPackages());

  packages.forEach((o) => {
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
      'postz:cz',
      'postz',
      'precommit',
      'prez:cz',
      'prez',
      'lintstagedrc',
    ],
    'eslint.packageManager': 'pnpm',
    'git.ignoreLimitWarning': true,
    'editor.codeActionsOnSave': {
      'source.fixAll.eslint': true,
      'source.fixAll.stylelint': true,
    },
    'search.exclude': {
      '**/node_modules': true,
      '**/bower_components': true,
      '**/*.code-search': true,
      '**/dist': true,
      '**/coverage': true,
      '**/docs': true,
      '**/es': true,
      '**/pnpm-lock.yaml': true,
    },
  };

  writeJsonFileSync(`./.vscode/settings.json`, settingJson, {
    coverFile: true,
  });
}

function initialEnvironment() {
  mkdirSync(`./develop`);

  mkdirSync(`./develop/config`);

  createDevelopInitialEnvironmentConfigFile();

  promptSuccess(`step *: config environment`);

  promptEmptyLine();

  createDevelopFiles();

  promptEmptyLine();

  promptInfo('add global dev packages');

  exec('npx ncu -u --packageFile ./**/package.json');

  promptInfo('install dependence packages');

  exec('pnpm install -w');

  exec('npm run z:initial:environment');

  promptEmptyLine();

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

  if (!existDirectorySync(`./.git`)) {
    promptSuccess(`step *: init git(branch main) success`);

    promptInfo('step 1: git init -b main');
    exec('git init -b main');

    promptEmptyLine();

    promptInfo('step 2: create README.md');
    writeFileSync('./README.md', '', { coverFile: false });

    promptInfo('step 3: git add -A');
    exec('git add -A');

    promptInfo('step 4: git commit -m "first commit"');
    exec('git commit -m "first commit"');

    promptEmptyLine();
  }

  createLernaPackageJsonFile(lernaName);
  createLernaConfigFile(name);
  createPnpmWorkspaceFile();

  createProjectFolder(name);
  createPackageJsonFile(name);

  createCommitlintConfigFile(`step *: create commitlint.config.js success`);
  createCzConfigFile(`step *: create .czrc success`);
  createBabelConfigFile(`step *: create babel.config.js success`);
  createNcuConfigFile(`step *: create .ncurc.json success`);
  createNpmConfigFile(`step *: create .npmrc success`);
  createDevelopFiles('', `step *: create develop folder success`);
  createHusky();
  createVscode();

  initialEnvironment();
}

module.exports = { createLernaProject };
