declare const _exports: {
  checkAllPackageVersion: typeof checkAllPackageVersion;
  checkEveryPackageVersion: typeof checkEveryPackageVersion;
  updateAllPackageVersion: typeof updateAllPackageVersion;
  updateEveryPackageVersion: typeof updateEveryPackageVersion;
  updateSpecialPackageVersion: typeof updateSpecialPackageVersion;
};
export = _exports;
/**
 * update special package version
 * @param {Array} packageList
 */
declare function updateSpecialPackageVersion(packageList: any[]): void;
declare function updateAllPackageVersion({
  autoInstall,
}: {
  autoInstall?: boolean | undefined;
}): void;
declare function updateEveryPackageVersion({
  autoInstall,
}: {
  autoInstall?: boolean | undefined;
}): void;
declare function checkAllPackageVersion(): void;
declare function checkEveryPackageVersion(): void;
