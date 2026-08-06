import { fileBuilderHeader } from './template.config.js';

const folderPath = './develop/config/git';

const attributeFileContent = `${fileBuilderHeader}
export const content = \`*.js eol=lf
*.jsx eol=lf
*.json eol=lf
*.css eol=lf
*.less eol=lf
*.scss eol=lf
\`;
`;

export const attributeFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'attributes.content.mjs',
  coverFile: true,
  fileContent: attributeFileContent,
};

const ignoreFileContent = `${fileBuilderHeader}
export const content = \`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# ignore dependencies dir
**/node_modules

# ignore distribute dir
**/dist
**/es

# ignore temporary dir
**/.umi
**/.umi-production

# ignore config dir
**/.idea
**/.history
**/.swc
**/.vs

# ignore jest dir
**/coverage

# ignore general file
*.log
*.d.ts
*.bak

# ignore special file
rollup.config-*.cjs
yarn.lock
package-lock.json
pnpm-lock.yaml
.firebase
.eslintcache
\`;
`;

export const ignoreFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'ignore.content.mjs',
  coverFile: false,
  fileContent: ignoreFileContent,
};
