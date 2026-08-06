export function updateProjectFromRepository({
  projectPath,
  targetPath,
  agent,
}: {
  projectPath?: string | undefined;
  targetPath?: string | undefined;
  agent: any;
}): Promise<void>;
