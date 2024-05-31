export namespace configFile {
  export let folderPath: string;
  export let fileName: string;
  export let coverFile: boolean;
  export { configFileContent as fileContent };
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
declare const configFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nmodule.exports = {\n  generalConfig: {\n    tags: {\n      allowUnknownTags: false,\n      dictionaries: ['jsdoc', 'closure'],\n    },\n    source: {\n      include: './src',\n    },\n    plugins: ['plugins/markdown'],\n    opts: {\n      template: 'node_modules/docdash',\n      encoding: 'utf8',\n      destination: 'docs/',\n      recurse: true,\n      verbose: true,\n    },\n    templates: {\n      cleverLinks: false,\n      monospaceLinks: false,\n    },\n  },\n};\n";
declare const contentFileContent: '/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst packageContent = `/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { generalConfig } = require("../../develop/config/jsdoc/config");\n\nmodule.exports = generalConfig;\n`;\n\nmodule.exports = {\n  packageContent,\n};\n';
export {};
