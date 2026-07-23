declare const _exports: {
  assignObject: typeof assignObject;
  cd: typeof cd;
  checkInCollection: typeof checkInCollection;
  checkStringIsEmpty: typeof checkStringIsEmpty;
  copyContentSync: typeof copyContentSync;
  copyFile: typeof copyFile;
  copyFileSync: typeof copyFileSync;
  copyFolder: typeof copyFolder;
  copyFolderSync: typeof copyFolderSync;
  exec: typeof exec;
  existDirectorySync: typeof existDirectorySync;
  existFileSync: typeof existFileSync;
  existPathSync: typeof existPathSync;
  exit: typeof exit;
  getArgCollection: typeof getArgCollection;
  isArray: typeof isArray;
  isObject: typeof isObject;
  mkdirSync: typeof mkdirSync;
  promptBackgroundBlack: typeof promptBackgroundBlack;
  promptBackgroundGreen: typeof promptBackgroundGreen;
  promptBackgroundRed: typeof promptBackgroundRed;
  promptBlack: typeof promptBlack;
  promptEmptyLine: typeof promptEmptyLine;
  promptError: typeof promptError;
  promptGreen: typeof promptGreen;
  promptInfo: typeof promptInfo;
  promptLine: typeof promptLine;
  promptMessage: typeof promptMessage;
  promptRed: typeof promptRed;
  promptSuccess: typeof promptSuccess;
  promptTip: typeof promptTip;
  promptWarn: typeof promptWarn;
  readJsonFileSync: typeof readJsonFileSync;
  resolvePath: typeof resolvePath;
  rimraf: typeof rimraf;
  touchSync: typeof touchSync;
  writeFileSync: typeof writeFileSync;
  writeFileWithFolderAndNameSync: typeof writeFileWithFolderAndNameSync;
  writeFileWithOptionsSync: typeof writeFileWithOptionsSync;
  writeJsonFileSync: typeof writeJsonFileSync;
};
export = _exports;
declare function exec(cmd: any): void;
declare function cd(path: any): void;
declare function resolvePath(path: any): any;
declare function isObject(value: any): boolean;
declare function isArray(value: any): value is any[];
declare function exit(): any;
declare function getArgCollection(): any;
/**
 * Check value in the collection.
 * @param {Array} collection value collection
 * @param {*} target the target value will be checked
 */
declare function checkInCollection(collection: any[], target: any): boolean;
declare function checkStringIsEmpty(v: any): boolean;
declare function assignObject(source: any, ...mergeData: any[]): any;
/**
 * Prompt line
 */
declare function promptLine(): void;
declare function promptEmptyLine(): void;
declare function promptSuccess(message: any, emptyLine?: boolean): void;
declare function promptTip(title: any, message: any, emptyLine?: boolean): void;
declare function promptWarn(message: any, emptyLine?: boolean): void;
declare function promptInfo(message: any, emptyLine?: boolean): void;
declare function promptError(error: any, emptyLine?: boolean): void;
declare function promptMessage(
  message: any,
  config: any,
  emptyLine?: boolean,
): void;
declare function promptBlack(message: any, emptyLine?: boolean): void;
declare function promptBackgroundBlack(message: any, emptyLine?: boolean): void;
declare function promptRed(message: any, emptyLine?: boolean): void;
declare function promptBackgroundRed(message: any, emptyLine?: boolean): void;
declare function promptGreen(message: any, emptyLine?: boolean): void;
declare function promptBackgroundGreen(message: any, emptyLine?: boolean): void;
declare function existPathSync(path: any): boolean;
declare function existFileSync(path: any): any;
declare function existDirectorySync(path: any): any;
declare function mkdirSync(path: any): void;
declare function writeFileSync(
  path: any,
  content: any,
  options?: {
    coverFile: boolean;
  },
): boolean;
declare function writeFileWithFolderAndNameSync(
  folderPath: any,
  relativePath: any,
  fileName: any,
  fileContent: any,
  coverFile?: boolean,
): boolean;
declare function writeFileWithOptionsSync({
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
declare function writeJsonFileSync(
  path: any,
  json: any,
  options?: {
    coverFile: boolean;
  },
): boolean;
declare function readJsonFileSync(path: any): any;
declare function rimraf(path: any): void;
declare function copyFile({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback,
}: {
  callback?: null | undefined;
  filepath: any;
  sourceMainPath: any;
  targetMainPath: any;
}): void;
declare function copyFileSync({
  sourceMainPath,
  targetMainPath,
  filepath,
}: {
  filepath: any;
  sourceMainPath: any;
  targetMainPath: any;
}): void;
declare function copyFolder({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback,
}: {
  callback?: null | undefined;
  filepath: any;
  sourceMainPath: any;
  targetMainPath: any;
}): void;
declare function copyFolderSync({
  sourceMainPath,
  targetMainPath,
  filepath,
}: {
  filepath: any;
  sourceMainPath: any;
  targetMainPath: any;
}): void;
declare function touchSync({ path }: { path: any }): void;
declare function copyContentSync({
  sourcePath,
  targetPath,
}: {
  sourcePath: any;
  targetPath: any;
}): void;
