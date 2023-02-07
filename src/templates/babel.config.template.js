const content = `/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

module.exports = function (api) {
  api.cache(true);
  return {
    babelrcRoots: ['.', 'packages/*'],
  };
};
`;
module.exports = { content };
