import { promptInfo, promptEmptyLine, exec } from './meta.js';

export function prettierAllPackageJson() {
  promptInfo('will format all package.json');
  promptEmptyLine();

  exec('npx prettier --write ./**/package.json');
}

export function prettierCurrentPackageJson() {
  promptInfo('will format current package.json');
  promptEmptyLine();

  exec('npx prettier --write ./package.json');
}
