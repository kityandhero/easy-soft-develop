const { promptEmptyLine } = require('../tools/meta');
const {
  createDevelopFiles,
  createCommitlintConfigFile,
  createBabelConfigFile,
  createNcuConfigFile,
  createJsdocConfigFile,
  createNpmConfigFile,
} = require('../tools/develop.file');

exports.run = function () {
  createDevelopFiles(
    'develop files will update, please wait a moment',
    'develop files update finish',
  );

  promptEmptyLine();

  createCommitlintConfigFile();
  createBabelConfigFile();
  createNcuConfigFile();
  createJsdocConfigFile();
  createNpmConfigFile();
};
