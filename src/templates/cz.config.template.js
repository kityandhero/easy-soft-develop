const folderPath = '.';

const contentFileContent = `{
  "path": "@commitlint/cz-commitlint"
}
`;

const contentFile = {
  folderPath: `${folderPath}`,
  fileName: '.czrc',
  coverFile: true,
  fileContent: contentFileContent,
};

module.exports = { contentFile };
