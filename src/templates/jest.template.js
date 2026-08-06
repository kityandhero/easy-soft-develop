import { fileBuilderHeader } from './template.config.js';

const folderPath = './develop/config/jest';

export const configFileContent = `${fileBuilderHeader}
export const content = \`${fileBuilderHeader}
module.exports = {
  collectCoverage: true,
  verbose: true,
};
\`;
`;

export const configFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.mjs',
  coverFile: true,
  fileContent: configFileContent,
};

export const simpleTestFileContent = `${fileBuilderHeader}
export const content = \`describe('group test description', () => {
  test('simple test will be true', () => {
    expect(true).toBe(true);
  });
});
\`;
`;

export const simpleTestFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'simple.test.content.mjs',
  coverFile: true,
  fileContent: simpleTestFileContent,
};
