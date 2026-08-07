export const configFileContent: '/**\ngenerate by easy-soft-develop\n*/\n\nconst content = `/**\ngenerate by easy-soft-develop\n*/\n\nexport default {\n  collectCoverage: true,\n  verbose: true,\n};\n`;\n\nexport default { content };\n';
export namespace configFile {
  export let folderPath: string;
  export let fileName: string;
  export let coverFile: boolean;
  export { configFileContent as fileContent };
}
export const simpleTestFileContent: "/**\ngenerate by easy-soft-develop\n*/\n\nconst content = `describe('group test description', () => {\n  test('simple test will be true', () => {\n    expect(true).toBe(true);\n  });\n});\n`;\n\nexport default { content };\n";
export namespace simpleTestFile {
  let folderPath_1: string;
  export { folderPath_1 as folderPath };
  let fileName_1: string;
  export { fileName_1 as fileName };
  let coverFile_1: boolean;
  export { coverFile_1 as coverFile };
  export { simpleTestFileContent as fileContent };
}
