declare const _exports: {
  assignObject: (source: any, ...mergeData: any[]) => any;
  cd: (path: any) => void;
  checkAllPackageVersion: () => void;
  checkInCollection: (collection: any[], target: any) => boolean;
  checkStringIsEmpty: (v: any) => boolean;
  clean: (preCmd: any, ...targets: any[]) => void;
  commitRefresh: (fileName?: string, relativeFolder?: string) => void;
  copyContentSync: ({
    sourcePath,
    targetPath,
  }: {
    sourcePath: any;
    targetPath: any;
  }) => void;
  copyFile: ({
    sourceMainPath,
    targetMainPath,
    filepath,
    callback,
  }: {
    callback?: null | undefined;
    filepath: any;
    sourceMainPath: any;
    targetMainPath: any;
  }) => void;
  copyFileSync: ({
    sourceMainPath,
    targetMainPath,
    filepath,
  }: {
    filepath: any;
    sourceMainPath: any;
    targetMainPath: any;
  }) => void;
  copyFolder: ({
    sourceMainPath,
    targetMainPath,
    filepath,
    callback,
  }: {
    callback?: null | undefined;
    filepath: any;
    sourceMainPath: any;
    targetMainPath: any;
  }) => void;
  copyFolderSync: ({
    sourceMainPath,
    targetMainPath,
    filepath,
  }: {
    filepath: any;
    sourceMainPath: any;
    targetMainPath: any;
  }) => void;
  createCleanScriptFile: () => boolean;
  createDevelopFiles: (waitMessage?: string, successMessage?: string) => void;
  createInstallGlobalDevelopDependenceScriptFile: () => void;
  createPackageCheckSpecialVersionScriptFile: () => void;
  exec: (cmd: any) => void;
  existDirectorySync: (path: any) => any;
  existFileSync: (path: any) => any;
  exit: () => any;
  getArgCollection: () => any;
  initialEnvironment: ({
    mainFileContentList,
    packageFileContentList,
    mainScripts,
    childScripts,
  }: {
    childScripts?: {} | undefined;
    mainFileContentList?: never[] | undefined;
    mainScripts?: {} | undefined;
    packageFileContentList?: never[] | undefined;
  }) => void;
  installDevelopDependencePackages: ({
    globalDevelopPackageList,
    mainDevelopPackageList,
    childrenDevelopPackageList,
    childrenSpecialDevelopPackageList,
    execInstall,
  }: {
    childrenDevelopPackageList?: never[] | undefined;
    childrenSpecialDevelopPackageList?: never[] | undefined;
    execInstall?: boolean | undefined;
    globalDevelopPackageList: any;
    mainDevelopPackageList?: never[] | undefined;
  }) => void;
  isArray: (value: any) => value is any[];
  isObject: (value: any) => boolean;
  loopPackage: (
    paths?: any[],
    callback?: ({
      name,
      path,
      absolutePath,
      relativePath,
    }: {
      absolutePath: any;
      name: any;
      path: any;
      relativePath: any;
    }) => void,
  ) => void;
  mkdirSync: (path: any) => void;
  prettierAllFile: () => void;
  prettierAllPackageJson: () => void;
  prettierChangeFile: () => void;
  prettierCurrentPackageJson: () => void;
  promptBackgroundBlack: (message: any, emptyLine?: boolean) => void;
  promptBackgroundGreen: (message: any, emptyLine?: boolean) => void;
  promptBackgroundRed: (message: any, emptyLine?: boolean) => void;
  promptBlack: (message: any, emptyLine?: boolean) => void;
  promptEmptyLine: () => void;
  promptError: (error: any, emptyLine?: boolean) => void;
  promptGreen: (message: any, emptyLine?: boolean) => void;
  promptInfo: (message: any, emptyLine?: boolean) => void;
  promptLine: () => void;
  promptMessage: (message: any, config: any, emptyLine?: boolean) => void;
  promptRed: (message: any, emptyLine?: boolean) => void;
  promptSuccess: (message: any, emptyLine?: boolean) => void;
  promptTip: (title: any, message: any, emptyLine?: boolean) => void;
  promptWarn: (message: any, emptyLine?: boolean) => void;
  readJsonFileSync: (path: any) => any;
  resolvePath: (path: any) => any;
  sleep: (n: any, showLog?: boolean) => void;
  touchSync: ({ path }: { path: any }) => void;
  updateAllPackageVersion: ({
    autoInstall,
  }: {
    autoInstall?: boolean | undefined;
  }) => void;
  updatePackageFromPackage: ({
    path,
    primaryRemoteUrl,
    spareRemoteUrl,
    agent,
    localFile,
  }: {
    agent: any;
    localFile: any;
    path: any;
    primaryRemoteUrl: any;
    spareRemoteUrl: any;
  }) => Promise<void>;
  updateSpecialPackageVersion: (packageList: any[]) => void;
  writeFileSync: (
    path: any,
    content: any,
    options?: {
      coverFile: boolean;
    },
  ) => boolean;
  writeFileWithFolderAndNameSync: (
    folderPath: any,
    relativePath: any,
    fileName: any,
    fileContent: any,
    coverFile?: boolean,
  ) => boolean;
  writeFileWithOptionsSync: ({
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
  }) => boolean;
  writeJsonFileSync: (
    path: any,
    json: any,
    options?: {
      coverFile: boolean;
    },
  ) => boolean;
};
export = _exports;
