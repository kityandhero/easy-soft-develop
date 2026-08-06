import { fileBuilderHeader } from './template.config.js';

const folderPath = './develop/config/jest';

export const configFileContent = `${fileBuilderHeader}
const content = \`${fileBuilderHeader}
export default {
  collectCoverage: true,
  verbose: true,
};
\`;

export default { content };
`;

export const configFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.mjs',
  coverFile: true,
  fileContent: configFileContent,
};

export const simpleTestFileContent = `${fileBuilderHeader}
const content = \`describe('group test description', () => {
  test('simple test will be true', () => {
    expect(true).toBe(true);
  });
});
\`;

export default { content };
`;

export const simpleTestFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'simple.test.content.mjs',
  coverFile: true,
  fileContent: simpleTestFileContent,
};
