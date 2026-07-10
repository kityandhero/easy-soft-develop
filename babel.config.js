function buildConfig(api) {
  api.cache(true);

  return {
    babelrcRoots: ['.'],
  };
}

module.exports = buildConfig;
