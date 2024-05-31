export function createCzConfigFile(successMessage?: string): void;
export function createCommitlintConfigFile(successMessage?: string): void;
export function createBabelConfigFile(successMessage?: string): void;
export function createNcuConfigFile(successMessage?: string): void;
export function createJsdocConfigFile(successMessage?: string): void;
export function createNpmConfigFile(successMessage?: string): void;
export function createCleanScriptFile(): boolean;
export function createPackageCheckSpecialVersionScriptFile(): void;
export function createInstallGlobalDevelopDependenceScriptFile(): void;
/**
 * Create initial environment script files
 */
export function createInitialEnvironmentScriptFiles(): void;
export function createDevelopFiles(
  waitMessage?: string,
  successMessage?: string,
): void;
export function createUpdatePackageFromPackageScriptFile(): boolean;
