const folderPath = '.';

const contentFileContent = `{
  "path": "node_modules/cz-git"
}
`;

const contentFile = {
  folderPath: `${folderPath}`,
  fileName: '.czrc',
  coverFile: true,
  fileContent: contentFileContent,
};

module.exports = { contentFile };
