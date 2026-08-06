import { createRepositoryProject } from '../project/init-project.js';

export default function run(s, o) {
  const {
    _optionValues: { name },
  } = o;

  createRepositoryProject(name);
}
