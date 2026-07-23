declare const _exports: {
  createCzConfigFile: typeof createCzConfigFile;
  createCommitlintConfigFile: typeof createCommitlintConfigFile;
  createBabelConfigFile: typeof createBabelConfigFile;
  createNcuConfigFile: typeof createNcuConfigFile;
  createJsdocConfigFile: typeof createJsdocConfigFile;
  createNpmConfigFile: typeof createNpmConfigFile;
  createCleanScriptFile: typeof createCleanScriptFile;
  createPackageCheckSpecialVersionScriptFile: typeof createPackageCheckSpecialVersionScriptFile;
  createInstallGlobalDevelopDependenceScriptFile: typeof createInstallGlobalDevelopDependenceScriptFile;
  createInitialEnvironmentScriptFiles: typeof createInitialEnvironmentScriptFiles;
  createDevelopFiles: typeof createDevelopFiles;
  createUpdatePackageFromPackageScriptFile: typeof createUpdatePackageFromPackageScriptFile;
};
export = _exports;
declare function createCzConfigFile(successMessage?: string): void;
declare function createCommitlintConfigFile(successMessage?: string): void;
declare function createBabelConfigFile(successMessage?: string): void;
declare function createNcuConfigFile(successMessage?: string): void;
declare function createJsdocConfigFile(successMessage?: string): void;
declare function createNpmConfigFile(successMessage?: string): void;
declare function createCleanScriptFile(): boolean;
declare function createUpdatePackageFromPackageScriptFile(): boolean;
declare function createPackageCheckSpecialVersionScriptFile(): void;
declare function createInstallGlobalDevelopDependenceScriptFile(): void;
/**
 * Create initial environment script files
 */
declare function createInitialEnvironmentScriptFiles(): void;
declare function createDevelopFiles(
  waitMessage?: string,
  successMessage?: string,
): void;
