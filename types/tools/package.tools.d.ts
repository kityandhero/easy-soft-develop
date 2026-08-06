/**
 * loop all package
 */
export function loopPackage(
  paths?: any[],
  callback?: ({
    name,
    path,
    absolutePath,
    relativePath,
  }: {
    name: any;
    path: any;
    absolutePath: any;
    relativePath: any;
  }) => void,
): void;
