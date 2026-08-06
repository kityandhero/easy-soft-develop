export declare function createCzConfigFile(successMessage?: string): void;
export declare function createCommitlintConfigFile(
  successMessage?: string,
): void;
export declare function createBabelConfigFile(successMessage?: string): void;
export declare function createNcuConfigFile(successMessage?: string): void;
export declare function createJsdocConfigFile(successMessage?: string): void;
export declare function createNpmConfigFile(successMessage?: string): void;
export declare function createCleanScriptFile(): boolean;
export declare function createUpdatePackageFromPackageScriptFile(): boolean;
export declare function createPackageCheckSpecialVersionScriptFile(): void;
export declare function createInstallGlobalDevelopDependenceScriptFile(): void;
/**
 * Create initial environment script files
 */
export declare function createInitialEnvironmentScriptFiles(): void;
export declare function createDevelopFiles(
  waitMessage?: string,
  successMessage?: string,
): void;
