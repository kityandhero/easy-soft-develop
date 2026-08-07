export namespace contentFile {
  export let folderPath: string;
  export let fileName: string;
  export let coverFile: boolean;
  export { contentFileContent as fileContent };
}
declare const contentFileContent: '/**\ngenerate by easy-soft-develop\n*/\n\nconst content = `# https://editorconfig.org\nroot = true\n\n[*]\nindent_style = space\nindent_size = 2\nend_of_line = lf\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n\n[*.md]\ntrim_trailing_whitespace = false\n\n[Makefile]\nindent_style = tab\n`;\n\nexport default { content };\n';
export {};
