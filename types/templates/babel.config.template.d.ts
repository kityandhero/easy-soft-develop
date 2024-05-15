export namespace contentFile {
  export let folderPath: string;
  export let fileName: string;
  export let coverFile: boolean;
  export { contentFileContent as fileContent };
}
declare const contentFileContent: "/* eslint-disable no-undef */\n/* eslint-disable import/no-commonjs */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nfunction buildConfig(api) {\n  api.cache(true);\n\n  return {\n    babelrcRoots: ['.', 'packages/*'],\n  };\n}\n\nmodule.exports = buildConfig;\n";
export {};
