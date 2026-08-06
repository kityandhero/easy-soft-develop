import { exit, promptInfo } from '../tools/meta.js';

export default function run() {
  promptInfo('exit process');

  exit();
}
