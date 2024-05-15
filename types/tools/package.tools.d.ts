/**
 * loop all package
 */
export function loopPackage(
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
