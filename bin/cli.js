#!/usr/bin/env node

const { Command } = require('commander');

const { getArgCollection } = require('../src/tools/meta');
const createAssistScripts = require('../src/cliCollection/create-assist-scripts.cli');
const copyContent = require('../src/cliCollection/copy-content');
const checkAllPackageVersion = require('../src/cliCollection/check-all-package-version');
const checkEveryPackageVersion = require('../src/cliCollection/check-every-package-version');
const updateAllPackageVersion = require('../src/cliCollection/update-all-package-version');
const updateEveryPackageVersion = require('../src/cliCollection/update-every-package-version');
const sleep = require('../src/cliCollection/sleep');
const publishToNpm = require('../src/cliCollection/publish-to-npm');
const commitRefresh = require('../src/cliCollection/commit-refresh');
const createRepositoryProject = require('../src/cliCollection/create-repository-project');
const clearAllDependence = require('../src/cliCollection/clear-all-dependence');
const updatePackageFromPackage = require('../src/cliCollection/update-package-from-package');
const createProjectWithTemplate = require('../src/cliCollection/create-project-with-template');
const createProjectFromRepository = require('../src/cliCollection/create-project-from-repository');
const updateProjectFromRepository = require('../src/cliCollection/update-project-from-repository');
const prompt = require('../src/cliCollection/prompt');
const code = require('../src/cliCollection/createCode');
const rimraf = require('../src/cliCollection/rimraf');
const exit = require('../src/cliCollection/exit');

const program = new Command();

// eslint-disable-next-line no-undef
process.title = 'easy-soft-develop';

program.version(require('../package').version).usage('<command> [options]');

program
  .command('create-assist-scripts')
  .description('create assist script files for your project')
  .action(() => {
    createAssistScripts.run();
  });

program
  .command('check-all-package-version')
  .description('check all package version for your project')
  .action(() => {
    checkAllPackageVersion.run();
  });

program
  .command('check-every-package-version')
  .description('check all package version for your project')
  .action(() => {
    checkEveryPackageVersion.run();
  });

program
  .command('update-all-package-version')
  .description('update all package version for your project')
  .option('--autoInstall <bool>', 'show wait second info')
  .action((a, o) => {
    updateAllPackageVersion.run(a, o);
  });

program
  .command('update-every-package-version')
  .description('update all package version for your project')
  .option('--autoInstall <bool>', 'show wait second info')
  .action((a, o) => {
    updateEveryPackageVersion.run(a, o);
  });

program
  .command('sleep')
  .description('sleep A few seconds with you want')
  .option('--second <number>', '')
  .option('--showInfo <bool>', 'show wait second info')
  .action((a, o) => {
    sleep.run(a, o);
  });

program
  .command('copy-content')
  .description('copy content from source file content to target file content')
  .option('--source <string>', 'source file path')
  .option('--target <string>', 'target file path will write')
  .action((a, o) => {
    copyContent.run(a, o);
  });

program
  .command('exit')
  .description('exit process')
  .action((a, o) => {
    exit.run(a, o);
  });

program
  .command('publish')
  .description('publish public packages to npm')
  .option('--packages <string>', 'the packages will publish')
  .option('--otp <boolean>', 'use npm one-time password', false)
  .action((a, o) => {
    publishToNpm.run(a, o);
  });

program
  .command('commit-refresh')
  .description('update a flag file when commit')
  .option(
    '--fileName <number>',
    'flag file name, default is "commit.flag.json"',
  )
  .option('--relativeFolder <bool>', 'the folder flag file in it')
  .action((a, o) => {
    commitRefresh.run(a, o);
  });

program
  .command('create-project')
  .description('create a repository project')
  .option('--name <string>', 'project name')
  .action((a, o) => {
    createRepositoryProject.run(a, o);
  });

program
  .command('prompt')
  .description('prompt message')
  .option('--message <string>', 'the message will show')
  .option('--type <string>', 'prompt type')
  .option('--blankLine [boolean]', 'echo blank line before message', false)
  .action((a, o) => {
    prompt.run(a, o);
  });

program
  .command('clear-package-all-dependence')
  .description('clear package all dependence in package.json file')
  .option('--path <string>', 'package.json file path')
  .action((a, o) => {
    clearAllDependence.run(a, o);
  });

program
  .command('update-from-package')
  .description('update package from local or remote package.json file')
  .option('--primaryRemoteUrl <string>', 'remote primary package.json file url')
  .option('--spareRemoteUrl <string>', 'remote spare package.json file url')
  .option(
    '--localFile <string>',
    'local package.json file source path, priority use if localFile has value',
  )
  .option(
    '--agent <char>',
    'web agent for remote , if it has value, will use the agent to access remote url',
  )
  .option('--path <char>', 'the package.json file path will update')
  .action((a, o) => {
    updatePackageFromPackage.run(a, o);
  });

program
  .command('create-project-with-template')
  .description('update package from local or remote package.json file')
  .option('--templateUrl <string>', 'template url with download')
  .option('--folder <string>', 'folder name create project in it')
  .option(
    '--exampleUrl <string>',
    'example url, if it has value, will prompt info after create',
  )
  .action((a, o) => {
    createProjectWithTemplate.run(a, o);
  });

program
  .command('create-project-from-repository')
  .description('update package from local or remote package.json file')
  .option('--repository <string>', 'repository with download')
  .option('--folder <string>', 'folder name create project in it')
  .option(
    '--exampleUrl <string>',
    'example url, if it has value, will prompt info after create',
  )
  .action((a, o) => {
    createProjectFromRepository.run(a, o);
  });

program
  .command('update-project-from-repository')
  .description('update from master template repository')
  .option('--projectPath <string>', 'target project path that will be updated')
  .option(
    '--agent <string>',
    'web agent for remote , if it has value, will use the agent to access remote url',
  )
  .action((a, o) => {
    updateProjectFromRepository.run(a, o);
  });

program
  .command('code')
  .description('generate code source with code.json')
  .option('--dataPath <string>', 'data json source file path')
  .action((a, o) => {
    code.run(a, o);
  });

program
  .command('rimraf')
  .description('remove target path by use rimraf')
  .option('--path <string>', 'target path will remove')
  .action((a, o) => {
    rimraf.run(a, o);
  });

program.parse(getArgCollection());
