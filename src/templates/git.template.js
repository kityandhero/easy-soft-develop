const attribute = `/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

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

const ignore = `/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

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

module.exports = { attribute, ignore };
