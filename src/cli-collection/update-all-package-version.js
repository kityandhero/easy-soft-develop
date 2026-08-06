import { updateAllPackageVersion } from '../tools/package.update.js';

export default function run(s, o) {
  const {
    _optionValues: { autoInstall = true },
  } = o;

  updateAllPackageVersion({ autoInstall: autoInstall || false });
}
