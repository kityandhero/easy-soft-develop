export function exec(cmd: any): void;
export function cd(path: any): void;
export function getArgCollection(): any;
/**
 * Check value in the collection.
 * @param {Array} collection value collection
 * @param {*} target the target value will be checked
 */
export function checkInCollection(collection: any[], target: any): boolean;
export function existPathSync(path: any): boolean;
export function existFileSync(path: any): any;
export function existDirectorySync(path: any): any;
export function writeFileSync(
  path: any,
  content: any,
  options?: {
    coverFile: boolean;
  },
): boolean;
export function checkStringIsEmpty(v: any): boolean;
/**
 * Prompt line
 */
export function promptLine(): void;
export function promptEmptyLine(): void;
export function promptSuccess(message: any, emptyLine?: boolean): void;
export function promptInfo(message: any, emptyLine?: boolean): void;
export function promptWarn(message: any, emptyLine?: boolean): void;
export function promptError(error: any, emptyLine?: boolean): void;
export function promptTip(title: any, message: any, emptyLine?: boolean): void;
export function isObject(value: any): boolean;
export function isArray(value: any): boolean;
export function assignObject(source: any, ...mergeData: any[]): any;
export function mkdirSync(path: any): void;
export function readJsonFileSync(path: any): any;
export function writeJsonFileSync(
  path: any,
  json: any,
  options?: {
    coverFile: boolean;
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
export function resolvePath(path: any): any;
export function exit(): any;
export function rimraf(path: any): void;
export function promptBlack(message: any, emptyLine?: boolean): void;
export function promptBackgroundBlack(message: any, emptyLine?: boolean): void;
export function promptRed(message: any, emptyLine?: boolean): void;
export function promptBackgroundRed(message: any, emptyLine?: boolean): void;
export function promptGreen(message: any, emptyLine?: boolean): void;
export function promptBackgroundGreen(message: any, emptyLine?: boolean): void;
export function promptMessage(
  message: any,
  config: any,
  emptyLine?: boolean,
): void;
