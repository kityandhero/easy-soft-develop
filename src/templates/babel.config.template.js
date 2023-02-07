const content = `module.exports = function (api) {
  api.cache(true);
  return {
    babelrcRoots: ['.', 'packages/*'],
  };
};
`;
module.exports = { content };
