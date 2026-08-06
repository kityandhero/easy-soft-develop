export namespace contentFile {
  export let folderPath: string;
  export let fileName: string;
  export let coverFile: boolean;
  export { contentFileContent as fileContent };
}
declare const contentFileContent: '/** generate by easy-soft-develop */\n\nconst content = `{\n  "*.{md,json}": ["npx prettier --cache --write"],\n  "*.{js,jsx}": ["npx eslint --ext .js,.jsx", "npx prettier --cache --write"],\n  "*.{ts,tsx}": [\n    "npx eslint --ext .ts,.tsx",\n    "npx prettier --cache --parser=typescript --write"\n  ],\n  "*.{css,less,scss}": [\n    "stylelint --allow-empty-input",\n    "npx prettier --cache --write"\n  ]\n}\n`;\n\nexport default { content };\n';
export {};
