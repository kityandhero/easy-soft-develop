import { sleep } from '../tools/sleep.js';

export default function run(s, o) {
  const {
    _optionValues: { second, showInfo = 'false' },
  } = o;

  sleep(second, showInfo == 'true');
}
