import { exec } from './meta.js';

export function prettierAllFile() {
  exec('npx prettier --cache --write .');
}

export function prettierChangeFile() {
  exec('npx prettier --cache --write ./package.json');
}
