const { fileGlobalHeader } = require('./template.config');

const content = `${fileGlobalHeader}
module.exports = function (api) {
  api.cache(true);
  return {
    babelrcRoots: ['.', 'packages/*'],
  };
};
`;
module.exports = { content };
