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
declare const configFileContent: "/**\ngenerate by easy-soft-develop\n*/\n\nexport default {\n  generalConfig: {\n    tags: {\n      allowUnknownTags: false,\n      dictionaries: ['jsdoc', 'closure'],\n    },\n    source: {\n      include: './src',\n    },\n    plugins: ['plugins/markdown'],\n    opts: {\n      template: 'node_modules/docdash',\n      encoding: 'utf8',\n      destination: 'docs/',\n      recurse: true,\n      verbose: true,\n    },\n    templates: {\n      cleverLinks: false,\n      monospaceLinks: false,\n    },\n  },\n};\n";
declare const contentFileContent: '/**\ngenerate by easy-soft-develop\n*/\n\nconst packageContent = `/**\ngenerate by easy-soft-develop\n*/\n\nimport { generalConfig } from "../../develop/config/jsdoc/config";\n\nexport default generalConfig;\n`;\n\nexport default { packageContent };\n';
export {};
