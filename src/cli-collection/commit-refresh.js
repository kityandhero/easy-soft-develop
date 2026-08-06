import { commitRefresh } from '../tools/commit.refresh.js';

export default function run(s, o) {
  const {
    _optionValues: {
      fileName = 'commit.flag.json',
      relativeFolder = 'develop/flags',
    },
  } = o;

  commitRefresh(fileName, relativeFolder);
}
