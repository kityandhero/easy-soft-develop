export namespace globalChildPackageFile {
  export let folderPath: string;
  export let fileName: string;
  export let coverFile: boolean;
  export { globalChildPackageFileContent as fileContent };
}
export namespace globalMainPackageFile {
  let folderPath_1: string;
  export { folderPath_1 as folderPath };
  let fileName_1: string;
  export { fileName_1 as fileName };
  let coverFile_1: boolean;
  export { coverFile_1 as coverFile };
  export let fileContent: string;
}
export namespace customMainPackageFile {
  let folderPath_2: string;
  export { folderPath_2 as folderPath };
  let fileName_2: string;
  export { fileName_2 as fileName };
  let coverFile_2: boolean;
  export { coverFile_2 as coverFile };
  export { customMainPackageFileContent as fileContent };
}
export namespace customChildPackageFile {
  let folderPath_3: string;
  export { folderPath_3 as folderPath };
  let fileName_3: string;
  export { fileName_3 as fileName };
  let coverFile_3: boolean;
  export { coverFile_3 as coverFile };
  export { customChildPackageFileContent as fileContent };
}
declare const globalChildPackageFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst commitScript = {\n  precommit: 'npm run z:lint:staged:quiet',\n};\n\nconst documentationScript = {\n  'prez:documentation:generate': 'rimraf ./docs && npm run z:documentation:lint',\n  'z:documentation:generate': 'npx documentation build src/** -f html --github -o docs',\n  'z:documentation:lint': 'npx documentation lint src/**',\n};\n\nconst lintScript = {\n  'z:lint:file:all': 'npm run z:lint:script:all && npm run z:lint:style:all',\n  'z:lint:file:all:fix': 'npm run z:lint:script:all:fix && npm run z:lint:style:all:fix',\n  'z:lint:file:change': 'npm run z:lint:script:change && npm run z:lint:style:all',\n  'z:lint:file:change:fix': 'npm run z:lint:script:change:fix && npm run z:lint:style:all:fix',\n  'z:lint:script:all': 'npx eslint --ext .js,.jsx,.ts,.tsx ./src',\n  'z:lint:script:all:fix': 'npx eslint --fix --ext .js,.jsx,.ts,.tsx ./src',\n  'postz:lint:script:all:fix': 'npm run z:prettier:format:all',\n  'z:lint:script:change': 'npx eslint --cache --ext .js,.jsx,.ts,.tsx ./src',\n  'z:lint:script:change:fix': 'npx eslint --fix --cache --ext .js,.jsx,.ts,.tsx ./src',\n  'postz:lint:script:change:fix': 'npm run z:prettier:format:change',\n  'z:lint:staged': 'npx lint-staged',\n  'z:lint:staged:quiet': 'npx lint-staged --quiet',\n  'z:lint:style:all': 'npx stylelint --allow-empty-input \"./src/**/*.{css,scss,less}\"',\n  'z:lint:style:all:fix': 'npx stylelint --allow-empty-input --fix \"./src/**/*.{css,scss,less}\"',\n  'postz:lint:style:all:fix': 'npm run z:prettier:format:all',\n  'z:lint:style:change': 'npx stylelint --allow-empty-input --cache \"./src/**/*.{css,scss,less}\"',\n  'z:lint:style:change:fix': 'npx stylelint --allow-empty-input --cache --fix \"./src/**/*.{css,scss,less}\"',\n  'postz:lint:style:change:fix': 'npm run z:prettier:format:change',\n};\n\nconst prettierScript = {\n  'z:prettier:format:all': 'npx prettier --write .',\n  'z:prettier:format:change': 'npx prettier --cache --write .',\n  'z:prettier:package.json': 'npx prettier --write ./package.json',\n};\n\nconst tscScript = {\n  'z:tsc:build': 'echo show tsc version and create declaration file && tsc -v && tsc -p ./tsconfig.types.json && echo declaration file generate complete',\n};\n\nconst jestScript = {\n  'z:test': 'cross-env NODE_ENV=test jest',\n};\n\nmodule.exports = {\n  ...commitScript,\n  ...documentationScript,\n  ...lintScript,\n  ...prettierScript,\n  ...tscScript,\n  ...jestScript,\n};\n";
declare const customMainPackageFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst scripts = {};\n\nmodule.exports = {\n  ...scripts,\n};\n';
declare const customChildPackageFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst scripts = {};\n\nmodule.exports = {\n  ...scripts,\n};\n';
export {};
