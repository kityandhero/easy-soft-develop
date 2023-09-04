const { createRepositoryProject } = require('../project/initProject');

exports.run = function (s, o) {
  const {
    _optionValues: { name },
  } = o;

  createRepositoryProject(name);
};
