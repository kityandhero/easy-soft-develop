/** generate by easy-soft-develop */

import { installDevelopDependencePackages } from 'easy-soft-develop';

import {
  globalDevelopPackageList,
  mainDevelopPackageList,
  childrenDevelopPackageList,
  childrenSpecialDevelopPackageList,
} from './config/index.mjs';

installDevelopDependencePackages({
  globalDevelopPackageList,
  mainDevelopPackageList,
  childrenDevelopPackageList,
  childrenSpecialDevelopPackageList,
});
