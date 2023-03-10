const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/editor';

const contentFileContent = `${fileGlobalHeader}
const content = \`# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
\`;

module.exports = {
  content,
};
`;

const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.js',
  coverFile: true,
  fileContent: contentFileContent,
};

module.exports = { contentFile };
