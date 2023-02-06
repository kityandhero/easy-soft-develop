#!/usr/bin/env node

const { Command } = require('commander');

const createAssistScripts = require('../src/cliCollection/create-assist-scripts.cli');
const checkAllPackageVersion = require('../src/cliCollection/check-all-package-version');
const updateAllPackageVersion = require('../src/cliCollection/update-all-package-version');
const sleep = require('../src/cliCollection/sleep');

const program = new Command();

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
  .command('update-all-package-version')
  .description('update all package version for your project')
  .action(() => {
    updateAllPackageVersion.run();
  });

program
  .command('sleep')
  .description('sleep A few seconds with you want')
  .option('--second <number>', '')
  .option('--showInfo <bool>', 'show wait second info')
  .action((a, o) => {
    sleep.run(a, o);
  });

program.parse(process.argv);
