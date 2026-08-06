import { updateProjectFromRepository } from '../tools/update.project.from.repository.js';

export default async function run(s, o) {
  const {
    _optionValues: { projectPath = '.', targetPath = '', agent },
  } = o;

  await updateProjectFromRepository({ projectPath, targetPath, agent });
}
