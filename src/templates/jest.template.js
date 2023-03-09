const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/jest';

const configFileContent = `${fileGlobalHeader}
const content = \`${fileGlobalHeader}
module.exports = {
  collectCoverage: true,
  verbose: true,
};
\`;

module.exports = {
  content,
};
`;

const configFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.js',
  coverFile: true,
  fileContent: configFileContent,
};

const simpleTestFileContent = `${fileGlobalHeader}
const content = \`test('jest simple', () => {
  expect(true).toBe(true);
});
\`;

module.exports = {
  content,
};
`;

const simpleTestFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'simple.test.content.js',
  coverFile: true,
  fileContent: configFileContent,
};

module.exports = {
  configFileContent,
  configFile,
  simpleTestFileContent,
  simpleTestFile,
};
