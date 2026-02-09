const {
  updateProjectFromRepository,
} = require('../tools/update.project.from.repository');

exports.run = async function (s, o) {
  const {
    _optionValues: { projectPath = '.', targetPath = '', agent },
  } = o;

  await updateProjectFromRepository({ projectPath, targetPath, agent });
};
