declare const _exports: {
  updateProjectFromRepository: typeof updateProjectFromRepository;
};
export = _exports;
declare function updateProjectFromRepository({
  projectPath,
  targetPath,
  agent,
}: {
  agent: any;
  projectPath?: string | undefined;
  targetPath?: string | undefined;
}): Promise<void>;
