import { rimraf } from '../tools/meta.js';

export default function run(s, o) {
  const {
    _optionValues: { path = '' },
  } = o;

  rimraf(path);
}
