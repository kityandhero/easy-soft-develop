export declare const configFileContent =
  '/** generate by easy-soft-develop */\n\nconst content = `/** generate by easy-soft-develop */\n\nexport default {\n  collectCoverage: true,\n  verbose: true,\n};\n`;\n\nexport default { content };\n';
export declare const configFile: {
  folderPath: string;
  fileName: string;
  coverFile: boolean;
  fileContent: string;
};
export declare const simpleTestFileContent =
  "/** generate by easy-soft-develop */\n\nconst content = `describe('group test description', () => {\n  test('simple test will be true', () => {\n    expect(true).toBe(true);\n  });\n});\n`;\n\nexport default { content };\n";
export declare const simpleTestFile: {
  folderPath: string;
  fileName: string;
  coverFile: boolean;
  fileContent: string;
};
