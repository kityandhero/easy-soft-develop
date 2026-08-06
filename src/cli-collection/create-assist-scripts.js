import { promptEmptyLine } from '../tools/meta.js';
import {
  createDevelopFiles,
  createCommitlintConfigFile,
  createBabelConfigFile,
  createNcuConfigFile,
  createJsdocConfigFile,
  createNpmConfigFile,
} from '../tools/develop.file.js';

export default function run() {
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
}
