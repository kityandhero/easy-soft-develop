export function exec(command: any): void;
export function cd(path: any): void;
export function resolvePath(path: any): string;
export function isObject(value: any): boolean;
export function isArray(value: any): boolean;
export function exit(): never;
export function getArgumentCollection(): string[];
/**
 * Check value in the collection.
 * @param {Array} collection value collection
 * @param {*} target the target value will be checked
 */
export function checkInCollection(collection: any[], target: any): boolean;
export function checkStringIsEmpty(v: any): boolean;
export function assignObject(source: any, ...mergeData: any[]): any;
/**
 * Prompt line
 */
export function promptLine(): void;
export function promptEmptyLine(): void;
export function promptSuccess(message: any, emptyLine?: boolean): void;
export function promptTip(title: any, message: any, emptyLine?: boolean): void;
export function promptWarn(message: any, emptyLine?: boolean): void;
export function promptInfo(message: any, emptyLine?: boolean): void;
export function promptError(error: any, emptyLine?: boolean): void;
export function promptMessage(
  message: any,
  config: any,
  emptyLine?: boolean,
): void;
export function promptBlack(message: any, emptyLine?: boolean): void;
export function promptBackgroundBlack(message: any, emptyLine?: boolean): void;
export function promptRed(message: any, emptyLine?: boolean): void;
export function promptBackgroundRed(message: any, emptyLine?: boolean): void;
export function promptGreen(message: any, emptyLine?: boolean): void;
export function promptBackgroundGreen(message: any, emptyLine?: boolean): void;
export function existPathSync(path: any): boolean;
export function existFileSync(path: any): boolean;
export function existDirectorySync(path: any): boolean;
export function mkdirSync(path: any): void;
export function writeFileSync(
  path: any,
  content: any,
  {
    coverFile,
  }: {
    coverFile?: boolean | undefined;
  },
): boolean;
export function writeFileWithFolderAndNameSync(
  folderPath: any,
  relativePath: any,
  fileName: any,
  fileContent: any,
  coverFile?: boolean,
): boolean;
export function writeFileWithOptionsSync({
  folderPath,
  relativePath,
  fileName,
  fileContent,
  coverFile,
}: {
  folderPath: any;
  relativePath?: string | undefined;
  fileName: any;
  fileContent: any;
  coverFile?: boolean | undefined;
}): boolean;
export function writeJsonFileSync(
  path: any,
  json: any,
  {
    coverFile,
  }: {
    coverFile?: boolean | undefined;
  },
): boolean;
export function readJsonFileSync(path: any): any;
export function rimraf(path: any): void;
export function copyFile({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback,
}: {
  sourceMainPath: any;
  targetMainPath: any;
  filepath: any;
  callback: any;
}): void;
export function copyFileSync({
  sourceMainPath,
  targetMainPath,
  filepath,
}: {
  sourceMainPath: any;
  targetMainPath: any;
  filepath: any;
}): void;
export function copyFolder({
  sourceMainPath,
  targetMainPath,
  filepath,
  callback,
}: {
  sourceMainPath: any;
  targetMainPath: any;
  filepath: any;
  callback: any;
}): void;
export function copyFolderSync({
  sourceMainPath,
  targetMainPath,
  filepath,
}: {
  sourceMainPath: any;
  targetMainPath: any;
  filepath: any;
}): void;
export function touchSync({ path }: { path: any }): void;
export function copyContentSync({
  sourcePath,
  targetPath,
}: {
  sourcePath: any;
  targetPath: any;
}): void;
export const fileName: string;
export const folderName: string;
