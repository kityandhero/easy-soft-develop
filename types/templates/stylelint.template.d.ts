export namespace ignoreFile {
    let folderPath: string;
    let fileName: string;
    let coverFile: boolean;
    let fileContent: string;
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
declare const contentFileContent: "/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst mainContent = `/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { generalConfig } = require('./develop/config/stylelint/config');\n\nmodule.exports = generalConfig;\n`;\n\nconst packageContent = `/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst { generalConfig } = require('../../develop/config/stylelint/config');\n\nmodule.exports = generalConfig;\n`;\n\nmodule.exports = {\n  mainContent,\n  packageContent,\n};\n";
declare const configFileContent: "/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nmodule.exports = {\n  generalConfig: {\n    extends: [\n      'stylelint-config-standard',\n      'stylelint-config-css-modules',\n      'stylelint-config-prettier',\n    ],\n    plugins: ['stylelint-declaration-block-no-ignored-properties'],\n    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],\n    customSyntax: 'postcss-less',\n    rules: {\n      'function-url-quotes': 'always',\n      'selector-attribute-quotes': 'always',\n      'font-family-no-missing-generic-family-keyword': null,\n      'plugin/declaration-block-no-ignored-properties': true,\n      'selector-type-no-unknown': null,\n      'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],\n      'no-descending-specificity': null,\n      'selector-class-pattern': null,\n      'value-no-vendor-prefix': null,\n      'color-function-notation': null,\n      'function-no-unknown': null,\n    },\n  },\n};\n";
export {};
