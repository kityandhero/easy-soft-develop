/* eslint-disable no-undef */
/* eslint-disable import/no-commonjs */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable no-useless-escape */

const { ignoreCollection: ignoreEmbedPlugins } = require('./embed');
const { ignoreCollection: ignoreCustomPlugins } = require('./custom');

module.exports = {
  ignoreCollection: [...ignoreEmbedPlugins, ...ignoreCustomPlugins],
};
