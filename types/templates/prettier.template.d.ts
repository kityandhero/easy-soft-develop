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
declare const configFileContent: "/**\ngenerate by easy-soft-develop\n*/\n\nexport const generalConfig = {\n  printWidth: 80,\n  singleQuote: true,\n  trailingComma: 'all',\n  proseWrap: 'never',\n  semi: true,\n  overrides: [\n    {\n      files: '.prettierrc',\n      options: {\n        parser: 'json',\n      },\n    },\n  ],\n  plugins: [\n    // 'prettier-plugin-organize-imports',\n    'prettier-plugin-packagejson',\n  ],\n};\n";
declare const contentFileContent: "/**\ngenerate by easy-soft-develop\n*/\n\nconst mainContent = `/**\ngenerate by easy-soft-develop\n*/\n\nexport { generalConfig as default } from './develop/config/prettier/config/index.mjs';\n`;\n\nconst packageContent = `/**\ngenerate by easy-soft-develop\n*/\n\nexport { generalConfig as default } from '../../develop/config/prettier/config/index.mjs';\n`;\n\nexport default {\n  mainContent,\n  packageContent,\n};\n";
declare const ignoreFileContent: '/**\ngenerate by easy-soft-develop\n*/\n\nconst content = `# ignore dir\n**/node_modules/**\n**/templates/**\n**/lib/**\n**/dist/**\n**/es/**\n**/docs/**\n**/coverage/**\n**/.umi/**\n**/.umi-production/**\n**/.idea/**\n**/.ga/**\n**/.history/**\n**/.husky/**\n**/.vs/**\n\n# ignore file\n*.png\n*.jpg\n*.jpeg\n*.rar\n*.zip\n*.7z\n*.ico\n*.gif\n*.toml\n*.lock\n*.tar.gz\n*.log\n*.txt\n*.text\n*.svg\n*.min.js\n\n# ignore special\n.eslintignore\n.stylelintignore\n.gitattributes\n.browserslistrc\n.dockerignore\n.gitignore\n.prettierignore\n.eslintcache\n.npmrc\n.editorconfig\n.czrc\n.ga\nrollup.config-*.cjs\npnpm-lock.yaml\nCNAME\nLICENSE\n`;\n\nexport default { content };\n';
export {};
