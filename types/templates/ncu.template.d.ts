export namespace configEmbedFile {
  export let folderPath: string;
  export let fileName: string;
  export let coverFile: boolean;
  export { configEmbedFileContent as fileContent };
}
export namespace configCustomFile {
  let folderPath_1: string;
  export { folderPath_1 as folderPath };
  let fileName_1: string;
  export { fileName_1 as fileName };
  let coverFile_1: boolean;
  export { coverFile_1 as coverFile };
  export { configCustomFileContent as fileContent };
}
export namespace configFile {
  let folderPath_2: string;
  export { folderPath_2 as folderPath };
  let fileName_2: string;
  export { fileName_2 as fileName };
  let coverFile_2: boolean;
  export { coverFile_2 as coverFile };
  export { configFileContent as fileContent };
}
export namespace contentFile {
  let folderPath_3: string;
  export { folderPath_3 as folderPath };
  let fileName_3: string;
  export { fileName_3 as fileName };
  let coverFile_3: boolean;
  export { coverFile_3 as coverFile };
  export { contentFileContent as fileContent };
}
declare const configEmbedFileContent: '/** generate by easy-soft-develop */\n\nexport const config = {\n  minor: [],\n  patch: [],\n  reject: [],\n};\n';
declare const configCustomFileContent: '/** generate by easy-soft-develop */\n\nexport const config = {\n  minor: [],\n  patch: [],\n  reject: [],\n};\n';
declare const configFileContent: "/** generate by easy-soft-develop */\n\nimport semver from 'semver';\n\nimport { config as configEmbed } from './embed.mjs';\nimport { config as configCustom } from './custom.mjs';\n\nexport const config = {\n  // 自动更新 package.json 等价于 -u\n  upgrade: true,\n\n  // 默认升级策略 latest, 允许 major 升级\n  target: 'latest',\n\n  // 交互模式下分组显示，更清晰\n  format: 'group',\n\n  // 是否检查深层依赖, 默认 false\n  deep: false,\n\n  // 是否静默输出, 默认 false\n  silent: false,\n\n  // reject: 这些包完全不升级\n  reject: [...configEmbed.reject, ...configCustom.reject],\n\n  // filterResults: 对每个可升级的包进行精细决策（返回 true 保留, false 丢弃）\n  filterResults: (packageName, { currentVersion, upgradedVersion }) => {\n    // 定义分组策略（按包名精确匹配，也支持正则前缀）\n    const strategies = {\n      // 只允许补丁升级（例如 bug 修复）\n      patchOnly: [...configEmbed.patch, ...configCustom.patch],\n      // 只允许小版本升级（例如新特性，无破坏性）\n      minorOnly: [...configEmbed.minor, ...configCustom.minor],\n    };\n\n    // 策略判断：看是否在 patchOnly 列表\n    if (\n      strategies.patchOnly.includes(packageName) ||\n      strategies.patchOnly.some(\n        (pattern) => pattern.test?.(packageName) || false,\n      )\n    ) {\n      const diff = semver.diff(currentVersion, upgradedVersion);\n      return diff === 'patch';\n    }\n\n    // 看是否在 minorOnly 列表\n    if (\n      strategies.minorOnly.includes(packageName) ||\n      strategies.minorOnly.some(\n        (pattern) => pattern.test?.(packageName) || false,\n      )\n    ) {\n      const diff = semver.diff(currentVersion, upgradedVersion);\n\n      // 允许 patch 和 minor, 拒绝 major\n      return diff === 'patch' || diff === 'minor';\n    }\n\n    // 不自动升级到预发布版\n    // 只有当升级版本不是预发布版本时才保留\n    if (semver.prerelease(upgradedVersion) !== null) {\n      return false;\n    }\n\n    // 对于未匹配的包，保留所有符合条件的升级\n    return true;\n  },\n};\n";
declare const contentFileContent: "/** generate by easy-soft-develop */\n\nconst mainContent = `/** generate by easy-soft-develop */\n\nexport { config as default } from './develop/config/ncu/config/index.mjs';\n`;\n\nconst packageContent = `/** generate by easy-soft-develop */\n\nexport { config as default } from '../../develop/config/ncu/config/index.mjs';\n`;\n\nexport default {\n  mainContent,\n  packageContent,\n};\n";
export {};
