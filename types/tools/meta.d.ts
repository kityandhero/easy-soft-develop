export declare const fileName: any;
export declare const folderName: any;
export declare function exec(command: any): void;
export declare function cd(path: any): void;
export declare function resolvePath(path: any): any;
export declare function isObject(value: any): boolean;
export declare function isArray(value: any): value is any[];
export declare function exit(): any;
export declare function getArgumentCollection(): any;
/**
 * Check value in the collection.
 * @param {Array} collection value collection
 * @param {*} target the target value will be checked
 */
export declare function checkInCollection(
  collection: any[],
  target: any,
): boolean;
export declare function checkStringIsEmpty(v: any): boolean;
export declare function assignObject(source: any, ...mergeData: any[]): any;
/**
 * Prompt line
 */
export declare function promptLine(): void;
export declare function promptEmptyLine(): void;
export declare function promptSuccess(message: any, emptyLine?: boolean): void;
export declare function promptTip(
  title: any,
  message: any,
  emptyLine?: boolean,
): void;
export declare function promptWarn(message: any, emptyLine?: boolean): void;
export declare function promptInfo(message: any, emptyLine?: boolean): void;
export declare function promptError(error: any, emptyLine?: boolean): void;
export declare function promptMessage(
  message: any,
  config: any,
  emptyLine?: boolean,
): void;
export declare function promptBlack(message: any, emptyLine?: boolean): void;
export declare function promptBackgroundBlack(
  message: any,
  emptyLine?: boolean,
): void;
export declare function promptRed(message: any, emptyLine?: boolean): void;
export declare function promptBackgroundRed(
  message: any,
  emptyLine?: boolean,
): void;
export declare function promptGreen(message: any, emptyLine?: boolean): void;
export declare function promptBackgroundGreen(
  message: any,
  emptyLine?: boolean,
): void;
export declare function existPathSync(path: any): boolean;
export declare function existFileSync(path: any): any;
export declare function existDirectorySync(path: any): any;
export declare function mkdirSync(path: any): void;
export declare function writeFileSync(
  path: any,
  content: any,
  {
    coverFile,
  }: {
    coverFile?: boolean | undefined;
  },
): boolean;
export declare function writeFileWithFolderAndNameSync(
  folderPath: any,
  relativePath: any,
  fileName: any,
  fileContent: any,
  coverFile?: boolean,
): boolean;
export declare function writeFileWithOptionsSync({
  folderPath,
  relativePath,
  fileName,
  fileContent,
  coverFile,
}: {
  coverFile?: boolean | undefined;
  fileContent: any;
  fileName: any;
  folderPath: any;
  relativePath?: string | undefined;
}): boolean;
export declare function writeJsonFileSync(
  path: any,
  json: any,
  {
    coverFile,
  }: {
    coverFile?: boolean | undefined;
  },
): boolean;
export declare function readJsonFileSync(path: any): any;
export declare function rimraf(path: any): void;
export declare function copyFile({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback,
}: {
  callback: any;
  filepath: any;
  sourceMainPath: any;
  targetMainPath: any;
}): void;
export declare function copyFileSync({
  sourceMainPath,
  targetMainPath,
  filepath,
}: {
  filepath: any;
  sourceMainPath: any;
  targetMainPath: any;
}): void;
export declare function copyFolder({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback,
}: {
  callback: any;
  filepath: any;
  sourceMainPath: any;
  targetMainPath: any;
}): void;
export declare function copyFolderSync({
  sourceMainPath,
  targetMainPath,
  filepath,
}: {
  filepath: any;
  sourceMainPath: any;
  targetMainPath: any;
}): void;
export declare function touchSync({ path }: { path: any }): void;
export declare function copyContentSync({
  sourcePath,
  targetPath,
}: {
  sourcePath: any;
  targetPath: any;
}): void;
