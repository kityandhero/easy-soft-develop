export const configFileContent: "/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst content = `/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nmodule.exports = {\n  collectCoverage: true,\n  verbose: true,\n};\n`;\n\nmodule.exports = {\n  content,\n};\n";
export namespace configFile {
    export let folderPath: string;
    export let fileName: string;
    export let coverFile: boolean;
    export { configFileContent as fileContent };
}
export const simpleTestFileContent: "/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst content = `describe('group test description', () => {\n  test('simple test will be true', () => {\n    expect(true).toBe(true);\n  });\n});\n`;\n\nmodule.exports = {\n  content,\n};\n";
export namespace simpleTestFile {
    let folderPath_1: string;
    export { folderPath_1 as folderPath };
    let fileName_1: string;
    export { fileName_1 as fileName };
    let coverFile_1: boolean;
    export { coverFile_1 as coverFile };
    export { simpleTestFileContent as fileContent };
}
