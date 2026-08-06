import { readFileSync } from 'node:fs';

import {
  promptEmptyLine,
  promptWarn,
  promptSuccess,
  writeFileSync,
} from './meta.js';

function getCodeContent(code) {
  const v = String(code)
    .replaceAll('`', '\\`')
    .replaceAll('$', String.raw`\$`);

  return `export const code = \`${v}\`;
`;
}

function checkDataItem({ sourceFilePath, codeFilePath }) {
  if (sourceFilePath === undefined) {
    promptWarn('checkDataItem parameter has error, check parameter: ');

    console.log({ sourceFilePath, codeFilePath });

    promptEmptyLine();

    throw new Error('parameter has not key "sourceFilePath"');
  }

  if (codeFilePath === undefined) {
    promptWarn('checkDataItem parameter has error, check parameter: ');

    console.log({ sourceFilePath, codeFilePath });

    promptEmptyLine();

    throw new Error('parameter has not key "codeFilePath"');
  }
}

function adjustSource({ sourceFilePath, codeFilePath }) {
  const d = { sourceFilePath, codeFilePath };

  if (sourceFilePath === undefined) {
    promptWarn('adjustSource parameter has error, check parameter: ');

    console.log(d);

    promptEmptyLine();

    throw new Error('parameter has not key "sourceFilePath"');
  }

  if (codeFilePath === undefined) {
    promptWarn('adjustSource parameter has error, check parameter: ');

    console.log(d);

    promptEmptyLine();

    throw new Error('parameter has not key "codeFilePath"');
  }

  return d;
}

export function generateCode(dataSource) {
  const dataAdjust = dataSource.map((o) => adjustSource(o));

  for (const o of dataAdjust) {
    checkDataItem(o);

    const { sourceFilePath, codeFilePath } = o;

    const codeSource = readFileSync(sourceFilePath);

    const content = getCodeContent(codeSource);

    writeFileSync(codeFilePath, content, {
      coverFile: true,
    });

    promptSuccess(`Create "${codeFilePath}" complete`);
  }
}
