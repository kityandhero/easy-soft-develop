/**
 * loop all package
 */
export declare function loopPackage(
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
