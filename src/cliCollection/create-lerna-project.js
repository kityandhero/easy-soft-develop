const { createLernaProject } = require('../project/initProject');
const { promptInfo, promptSuccess } = require('../tools/meta');

exports.run = function (s, o) {
  const {
    _optionValues: { name },
  } = o;

  createLernaProject(name);
};
