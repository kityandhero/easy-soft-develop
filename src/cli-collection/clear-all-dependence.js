import {
  readJsonFileSync,
  writeJsonFileSync,
  promptSuccess,
  promptInfo,
  isObject,
  checkStringIsEmpty,
  promptError,
  exit,
} from '../tools/meta.js';

export default async function run(s, o) {
  const {
    _optionValues: { path = '' },
  } = o;

  if (checkStringIsEmpty(path)) {
    promptError(
      'please input package.json file path, use --help to get help info',
    );

    exit();
  }

  promptInfo(`package.json all dependence will clear`);

  const packageJson = readJsonFileSync(path);

  if (isObject(packageJson)) {
    packageJson.dependencies = {};
    packageJson.devDependencies = {};

    writeJsonFileSync(path, packageJson);

    promptSuccess('package.json all dependence clear success');
  }

  exit();
}
