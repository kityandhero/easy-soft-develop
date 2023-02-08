const {
  createDevelopFiles,
  createCommitlintConfigFile,
  createBabelConfigFile,
  createNcuConfigFile,
  createNpmConfigFile,
} = require('../tools/develop.file');

exports.run = function () {
  createDevelopFiles(
    'develop files will update, please wait a moment',
    'develop files update finish',
  );

  createCommitlintConfigFile();
  createBabelConfigFile();
  createNcuConfigFile();
  createNpmConfigFile();
};
