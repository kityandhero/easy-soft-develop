export declare function installDevelopDependencePackages({
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
}): void;
