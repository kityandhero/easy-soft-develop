/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */

const { readFileSync } = require('node:fs');

const {
  promptEmptyLine,
  promptWarn,
  promptSuccess,
  writeFileSync,
} = require('./meta');

function getCodeContent(code) {
  const v = `${code}`.replaceAll('`', '\\`').replaceAll('$', '\\$');
  return `export const code = \`${v}\`;
`;
}

function checkDataItem(item) {
  if (item.sourceFilePath === undefined) {
    promptWarn('data has error, check item: ');

    console.log(item);

    promptEmptyLine();

    throw new Error('data has not key "sourceFilePath"');
  }

  if (item.codeFilePath === undefined) {
    promptWarn('data has error, check item: ');

    console.log(item);

    promptEmptyLine();

    throw new Error('data has not key "codeFilePath"');
  }
}

function adjustSource(o) {
  const d = { ...o };

  const sourceFilePath = d.sourceFilePath;

  if (sourceFilePath === undefined) {
    promptWarn('data has error, check item: ');

    console.log(d);

    promptEmptyLine();

    throw new Error('data has not key "sourceFilePath"');
  }

  const codeFilePath = d.codeFilePath;

  if (codeFilePath === undefined) {
    promptWarn('data has error, check item: ');

    console.log(d);

    promptEmptyLine();

    throw new Error('data has not key "codeFilePath"');
  }

  return d;
}

function generateCode(dataSource) {
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

module.exports = {
  generateCode,
};
