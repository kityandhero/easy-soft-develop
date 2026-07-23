declare const _exports: {
  loopPackage: typeof loopPackage;
};
export = _exports;
/**
 * loop all package
 */
declare function loopPackage(
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
): void;
