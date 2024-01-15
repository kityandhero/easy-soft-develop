export namespace attributeFile {
    export let folderPath: string;
    export let fileName: string;
    export let coverFile: boolean;
    export { attributeFileContent as fileContent };
}
export namespace ignoreFile {
    let folderPath_1: string;
    export { folderPath_1 as folderPath };
    let fileName_1: string;
    export { fileName_1 as fileName };
    let coverFile_1: boolean;
    export { coverFile_1 as coverFile };
    export { ignoreFileContent as fileContent };
}
declare const attributeFileContent: "/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst content = `*.js eol=lf\n*.jsx eol=lf\n*.json eol=lf\n*.css eol=lf\n*.less eol=lf\n*.scss eol=lf\n`;\n\nmodule.exports = {\n  content,\n};\n";
declare const ignoreFileContent: "/* eslint-disable no-undef */\n/* eslint-disable unicorn/prefer-module */\n/* eslint-disable no-useless-escape */\n\nconst content = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# ignore dependencies dir\n**/node_modules\n\n# ignore distribute dir\n**/dist\n**/es\n\n# ignore temporary dir\n**/.umi\n**/.umi-production\n\n# ignore config dir\n**/.idea\n**/.history\n**/.swc\n**/.vs\n\n# ignore jest dir\n**/coverage\n\n# ignore general file\n*.log\n*.d.ts\n*.bak\n\n# ignore special file\nrollup.config-*.cjs\nyarn.lock\npackage-lock.json\npnpm-lock.yaml\n.firebase\n.eslintcache\n`;\n\nmodule.exports = {\n  content,\n};\n";
export {};
