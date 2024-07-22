export function checkAllPackageVersion(): void;
export function checkEveryPackageVersion(): void;
export function updateAllPackageVersion({
  autoInstall,
}: {
  autoInstall?: boolean | undefined;
}): void;
export function updateEveryPackageVersion({
  autoInstall,
}: {
  autoInstall?: boolean | undefined;
}): void;
/**
 * update special package version
 * @param {Array} packageList
 */
export function updateSpecialPackageVersion(packageList: any[]): void;
