const {
  updatePackageFromPackage,
} = require('../tools/update.package.from.package');

exports.run = async function (s, o) {
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
};
