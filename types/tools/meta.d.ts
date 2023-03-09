export function exec(cmd: any): void;
export function cd(path: any): void;
export function getArgCollection(): any;
/**
 * Check value in the collection.
 * @param {Array} collection value collection
 * @param {*} target the target value will be checked
 */
export function checkInCollection(collection: any[], target: any): boolean;
export function existFileSync(path: any): any;
export function existDirectorySync(path: any): any;
export function writeFileSync(path: any, content: any, options?: {
    coverFile: boolean;
}): boolean;
export function checkStringIsEmpty(v: any): boolean;
export function promptLine(): void;
export function promptEmptyLine(): void;
export function promptSuccess(message: any): void;
export function promptInfo(message: any): void;
export function promptWarn(message: any): void;
export function promptError(error: any): void;
export function isObject(value: any): boolean;
export function isArray(value: any): boolean;
export function assignObject(source: any, ...mergeData: any[]): any;
export function mkdirSync(path: any): void;
export function readJsonFileSync(path: any): any;
export function writeJsonFileSync(path: any, json: any, options?: {
    coverFile: boolean;
}): boolean;
export function writeFileWithFolderAndNameSync(folderPath: any, relativePath: any, fileName: any, fileContent: any, coverFile?: boolean): boolean;
export function writeFileWithOptionsSync({ folderPath, relativePath, fileName, fileContent, coverFile, }: {
    folderPath: any;
    relativePath?: string | undefined;
    fileName: any;
    fileContent: any;
    coverFile?: boolean | undefined;
}): boolean;
export function resolvePath(path: any): any;
export function exit(): any;
