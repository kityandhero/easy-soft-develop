export declare const configFileContent =
  '/**\ngenerate by easy-soft-develop\n*/\n\nconst content = `/**\ngenerate by easy-soft-develop\n*/\n\nexport default {\n  collectCoverage: true,\n  verbose: true,\n};\n`;\n\nexport default { content };\n';
export declare const configFile: {
  folderPath: string;
  fileName: string;
  coverFile: boolean;
  fileContent: string;
};
export declare const simpleTestFileContent =
  "/**\ngenerate by easy-soft-develop\n*/\n\nconst content = `describe('group test description', () => {\n  test('simple test will be true', () => {\n    expect(true).toBe(true);\n  });\n});\n`;\n\nexport default { content };\n";
export declare const simpleTestFile: {
  folderPath: string;
  fileName: string;
  coverFile: boolean;
  fileContent: string;
};
