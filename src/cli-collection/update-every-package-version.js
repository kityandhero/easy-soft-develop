import { updateEveryPackageVersion } from '../tools/package.update.js';

export default function run(s, o) {
  const {
    _optionValues: { autoInstall = true },
  } = o;

  updateEveryPackageVersion({ autoInstall: autoInstall || false });
}
