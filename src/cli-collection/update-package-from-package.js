import { updatePackageFromPackage } from '../tools/update.package.from.package.js';

export default async function run(s, o) {
  const {
    _optionValues: { path, primaryRemoteUrl, spareRemoteUrl, agent, localFile },
  } = o;

  await updatePackageFromPackage({
    path,
    primaryRemoteUrl,
    spareRemoteUrl,
    agent,
    localFile,
  });
}
