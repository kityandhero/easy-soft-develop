export namespace ignoreFile {
    export let folderPath: string;
    export let fileName: string;
    export let coverFile: boolean;
    export { ignoreFileContent as fileContent };
}
export namespace contentFile {
    let folderPath_1: string;
    export { folderPath_1 as folderPath };
    let fileName_1: string;
    export { fileName_1 as fileName };
    let coverFile_1: boolean;
    export { coverFile_1 as coverFile };
    export { contentFileContent as fileContent };
}
export namespace configFile {
    let folderPath_2: string;
    export { folderPath_2 as folderPath };
    let fileName_2: string;
    export { fileName_2 as fileName };
    let coverFile_2: boolean;
    export { coverFile_2 as coverFile };
    export { configFileContent as fileContent };
}
declare const ignoreFileContent: "/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst content = `# ignore dir\n**/node_modules/**\n**/templates/**\n**/lib/**\n**/dist/**\n**/es/**\n**/docs/**\n**/coverage/**\n**/.umi/**\n**/.umi-production/**\n**/.idea/**\n**/.ga/**\n**/.history/**\n**/.husky/**\n**/.vs/**\n\n# ignore file\n*.png\n*.jpg\n*.jpeg\n*.rar\n*.zip\n*.7z\n*.ico\n*.gif\n*.toml\n*.lock\n*.tar.gz\n*.log\n*.txt\n*.text\n*.svg\n*.min.js\n\n# ignore special\n.eslintignore\n.stylelintignore\n.gitattributes\n.browserslistrc\n.dockerignore\n.gitignore\n.prettierignore\n.eslintcache\n.npmrc\n.editorconfig\n.czrc\n.ga\nrollup.config-*.cjs\npnpm-lock.yaml\nCNAME\nLICENSE\n`;\n\nmodule.exports = {\n  content,\n};\n";
declare const contentFileContent: "/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst mainContent = `/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { generalConfig } = require('./develop/config/prettier/config');\n\nmodule.exports = generalConfig;\n`;\n\nconst packageContent = `/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { generalConfig } = require(\"../../develop/config/prettier/config\");\n\nmodule.exports = generalConfig;\n`;\n\nmodule.exports = {\n  mainContent,\n  packageContent,\n};\n";
declare const configFileContent: "/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nmodule.exports = {\n  generalConfig: {\n    printWidth: 80,\n    singleQuote: true,\n    trailingComma: 'all',\n    proseWrap: 'never',\n    semi: true,\n    overrides: [\n      {\n        files: '.prettierrc',\n        options: {\n          parser: 'json',\n        },\n      },\n    ],\n    plugins: [\n      // 'prettier-plugin-organize-imports',\n      'prettier-plugin-packagejson',\n    ],\n  },\n};\n";
export {};
