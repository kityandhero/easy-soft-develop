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
export namespace ignoreFile {
  let folderPath_2: string;
  export { folderPath_2 as folderPath };
  let fileName_2: string;
  export { fileName_2 as fileName };
  let coverFile_2: boolean;
  export { coverFile_2 as coverFile };
  export { ignoreFileContent as fileContent };
}
declare const configFileContent: "/**\ngenerate by easy-soft-develop\n*/\n\nexport default {\n  generalConfig: {\n    extends: [\n      'stylelint-config-standard',\n      'stylelint-config-css-modules',\n    ],\n    plugins: ['stylelint-declaration-block-no-ignored-properties', 'stylelint-order'],\n    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],\n    customSyntax: 'postcss-less',\n    rules: {\n      'function-url-quotes': 'always',\n      'selector-attribute-quotes': 'always',\n      'font-family-no-missing-generic-family-keyword': null,\n      'plugin/declaration-block-no-ignored-properties': true,\n      'selector-type-no-unknown': null,\n      'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],\n      'no-descending-specificity': null,\n      'selector-class-pattern': null,\n      'value-no-vendor-prefix': null,\n      'color-function-notation': null,\n      'function-no-unknown': null,\n    },\n  },\n};\n";
declare const contentFileContent: "/**\ngenerate by easy-soft-develop\n*/\n\nexport const mainContent = `/**\ngenerate by easy-soft-develop\n*/\n\nimport { generalConfig } from './develop/config/stylelint/config';\n\nexport default generalConfig;\n`;\n\nexport const packageContent = `/**\ngenerate by easy-soft-develop\n*/\n\nimport { generalConfig } from '../../develop/config/stylelint/config';\n\nexport default generalConfig;\n`;\n\nexport default {\n  mainContent,\n  packageContent,\n};\n";
declare const ignoreFileContent: '/**\ngenerate by easy-soft-develop\n*/\n\nconst content = `# ignore dir\n**/coverage/**\n**/docs/**\n`;\n\nexport default { content };\n';
export {};
