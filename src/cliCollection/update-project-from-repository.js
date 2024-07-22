const {
  updateProjectFromRepository,
} = require('../tools/update.project.from.repository');

exports.run = async function (s, o) {
  const {
    _optionValues: { projectPath = '.', agent },
  } = o;

  await updateProjectFromRepository({ projectPath, agent });
};
