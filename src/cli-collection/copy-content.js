import { copyContentSync } from '../tools/meta.js';

export default function run(s, o) {
  const {
    _optionValues: { source = '', target = '' },
  } = o;

  copyContentSync({
    sourcePath: source,
    targetPath: target,
  });
}
