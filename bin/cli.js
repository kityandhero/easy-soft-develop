#!/usr/bin/env node

import { Command } from 'commander';
import { createRequire } from 'node:module';

import { getArgumentCollection } from '../src/tools/meta.js';
import createAssistScripts from '../src/cli-collection/create-assist-scripts.js';
import copyContent from '../src/cli-collection/copy-content.js';
import checkAllPackageVersion from '../src/cli-collection/check-all-package-version.js';
import checkEveryPackageVersion from '../src/cli-collection/check-every-package-version.js';
import updateAllPackageVersion from '../src/cli-collection/update-all-package-version.js';
import updateEveryPackageVersion from '../src/cli-collection/update-every-package-version.js';
import sleep from '../src/cli-collection/sleep.js';
import publishToNpm from '../src/cli-collection/publish-to-npm.js';
import commitRefresh from '../src/cli-collection/commit-refresh.js';
import createRepoProject from '../src/cli-collection/create-repository-project.js';
import clearAllDependence from '../src/cli-collection/clear-all-dependence.js';
import updatePackageFromPackage from '../src/cli-collection/update-package-from-package.js';
import createProjectWithTemplate from '../src/cli-collection/create-project-with-template.js';
import createProjectFromRepo from '../src/cli-collection/create-project-from-repository.js';
import updateProjectFromRepo from '../src/cli-collection/update-project-from-repository.js';
import prompt from '../src/cli-collection/prompt.js';
import code from '../src/cli-collection/create-code.js';
import rimraf from '../src/cli-collection/rimraf.js';
import exit from '../src/cli-collection/exit.js';

const require = createRequire(import.meta.url);

const program = new Command();

process.title = 'easy-soft-develop';

program
  .version(require('../package.json').version)
  .usage('<command> [options]');

program
  .command('create-assist-scripts')
  .description('create assist script files for your project')
  .action(() => {
    createAssistScripts();
  });

program
  .command('check-all-package-version')
  .description('check all package version for your project')
  .action(() => {
    checkAllPackageVersion();
  });

program
  .command('check-every-package-version')
  .description('check all package version for your project')
  .action(() => {
    checkEveryPackageVersion();
  });

program
  .command('update-all-package-version')
  .description('update all package version for your project')
  .option('--autoInstall <bool>', 'show wait second info')
  .action((a, o) => {
    updateAllPackageVersion(a, o);
  });

program
  .command('update-every-package-version')
  .description('update all package version for your project')
  .option('--autoInstall <bool>', 'show wait second info')
  .action((a, o) => {
    updateEveryPackageVersion(a, o);
  });

program
  .command('sleep')
  .description('sleep A few seconds with you want')
  .option('--second <number>', '')
  .option('--showInfo <bool>', 'show wait second info')
  .action((a, o) => {
    sleep(a, o);
  });

program
  .command('copy-content')
  .description('copy content from source file content to target file content')
  .option('--source <string>', 'source file path')
  .option('--target <string>', 'target file path will write')
  .action((a, o) => {
    copyContent(a, o);
  });

program
  .command('exit')
  .description('exit process')
  .action((a, o) => {
    exit(a, o);
  });

program
  .command('publish')
  .description('publish public packages to npm')
  .option('--packages <string>', 'the packages will publish')
  .option('--otp <boolean>', 'use npm one-time password', false)
  .action((a, o) => {
    publishToNpm(a, o);
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
    commitRefresh(a, o);
  });

program
  .command('create-repository-project')
  .description('create a repository project')
  .option('--name <string>', 'project name')
  .action((a, o) => {
    createRepoProject(a, o);
  });

program
  .command('prompt')
  .description('prompt message')
  .option('--message <string>', 'the message will show')
  .option('--type <string>', 'prompt type')
  .option('--blankLine [boolean]', 'echo blank line before message', false)
  .action((a, o) => {
    prompt(a, o);
  });

program
  .command('clear-package-all-dependence')
  .description('clear package all dependence in package.json file')
  .option('--path <string>', 'package.json file path')
  .action((a, o) => {
    clearAllDependence(a, o);
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
    updatePackageFromPackage(a, o);
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
    createProjectWithTemplate(a, o);
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
    createProjectFromRepo(a, o);
  });

program
  .command('update-project-from-repository')
  .description('update from master template repository')
  .option('--projectPath <string>', 'target project path that will be updated')
  .option('--targetPath <string>', 'target path that will be updated')
  .option(
    '--agent <string>',
    'web agent for remote , if it has value, will use the agent to access remote url',
  )
  .action((a, o) => {
    updateProjectFromRepo(a, o);
  });

program
  .command('code')
  .description('generate code source with code.json')
  .option('--dataPath <string>', 'data json source file path')
  .action((a, o) => {
    code(a, o);
  });

program
  .command('rimraf')
  .description('remove target path by use rimraf')
  .option('--path <string>', 'target path will remove')
  .action((a, o) => {
    rimraf(a, o);
  });

program.parse(getArgumentCollection());
