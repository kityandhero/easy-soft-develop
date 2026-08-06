import { fileBuilderHeader } from './template.config.js';

const folderPath = './develop/config/ncu';

const configEmbedFileContent = `${fileBuilderHeader}
export const config = {
  minor: [],
  patch: [],
  reject: [],
};
`;

export const configEmbedFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'embed.mjs',
  coverFile: true,
  fileContent: configEmbedFileContent,
};

const configCustomFileContent = `${fileBuilderHeader}
export const config = {
  minor: [],
  patch: [],
  reject: [],
};
`;

export const configCustomFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'custom.mjs',
  coverFile: false,
  fileContent: configCustomFileContent,
};

const configFileContent = `${fileBuilderHeader}
import { config as configEmbed } from './embed.mjs';
import { config as configCustom } from './custom.mjs';

export const config = {
  // 自动更新 package.json 等价于 -u
  upgrade: true,

  // 默认升级策略 latest, 允许 major 升级
  target: 'latest',

  // 交互模式下分组显示，更清晰
  format: 'group',

  // 是否检查深层依赖, 默认 false
  deep: false,

  // 是否静默输出, 默认 false
  silent: false,

  // reject: 这些包完全不升级
  reject: [...configEmbed.reject, ...configCustom.reject],

  // filterResults: 对每个可升级的包进行精细决策（返回 true 保留, false 丢弃）
  filterResults: (packageName, { currentVersion, upgradedVersion }) => {
    // 定义分组策略（按包名精确匹配，也支持正则前缀）
    const strategies = {
      // 只允许补丁升级（例如 bug 修复）
      patchOnly: [...configEmbed.patch, ...configCustom.patch],
      // 只允许小版本升级（例如新特性，无破坏性）
      minorOnly: [...configEmbed.minor, ...configCustom.minor],
    };

    // 策略判断：看是否在 patchOnly 列表
    if (
      strategies.patchOnly.includes(packageName) ||
      strategies.patchOnly.some(
        (pattern) => pattern.test?.(packageName) || false,
      )
    ) {
      const diff = semver.diff(currentVersion, upgradedVersion);
      return diff === 'patch';
    }

    // 看是否在 minorOnly 列表
    if (
      strategies.minorOnly.includes(packageName) ||
      strategies.minorOnly.some(
        (pattern) => pattern.test?.(packageName) || false,
      )
    ) {
      const diff = semver.diff(currentVersion, upgradedVersion);

      // 允许 patch 和 minor, 拒绝 major
      return diff === 'patch' || diff === 'minor';
    }

    // 不自动升级到预发布版
    // 只有当升级版本不是预发布版本时才保留
    if (semver.prerelease(upgradedVersion) !== null) {
      return false;
    }

    // 对于未匹配的包，保留所有符合条件的升级
    return true;
  },
};
`;

export const configFile = {
  folderPath: `${folderPath}/config`,
  fileName: 'index.mjs',
  coverFile: true,
  fileContent: configFileContent,
};

const contentFileContent = `${fileBuilderHeader}
const mainContent = \`${fileBuilderHeader}
export { config as default } from './develop/config/ncu/config/index.mjs';
\`;

const packageContent = \`${fileBuilderHeader}
export { config as default } from '../../develop/config/ncu/config/index.mjs';
\`;

export default {
  mainContent,
  packageContent,
};
`;

export const contentFile = {
  folderPath: `${folderPath}/template`,
  fileName: 'content.mjs',
  coverFile: true,
  fileContent: contentFileContent,
};
