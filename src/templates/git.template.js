const { fileGlobalHeader } = require('./template.config');

const folderPath = './develop/config/git';

const attributeFileContent = `${fileGlobalHeader}
const content = \`*.js eol=lf
*.jsx eol=lf
*.json eol=lf
*.css eol=lf
*.less eol=lf
*.scss eol=lf
\`;

module.exports = {
  content,
};
`;

const attributeFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'attributes.content.js',
  coverFile: true,
  fileContent: attributeFileContent,
};

const ignoreFileContent = `${fileGlobalHeader}
const content = \`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
**/node_modules

# ignore dir
**/dist
**/es
**/.umi
**/.umi-production
**/.idea
**/.history
**/.vs

# ignore file
*.log
*.d.ts
*.bak

# ignore special
rollup.config-*.cjs
yarn.lock
package-lock.json
pnpm-lock.yaml
.firebase
.eslintcache
\`;

module.exports = {
  content,
};
`;

const ignoreFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'ignore.content.js',
  coverFile: false,
  fileContent: ignoreFileContent,
};

module.exports = { attributeFile, ignoreFile };
