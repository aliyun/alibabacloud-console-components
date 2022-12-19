import * as AliCloudComponents from './index';
import enus from './locale/en-us';
import jajp from './locale/ja-jp';
import zhcn from './locale/zh-cn';
import zhhk from './locale/zh-hk';
import zhtw from './locale/zh-tw';
import vivn from './locale/vi-vn';
import itit from './locale/it-it';

interface Ilocales {
  [language: string]: any;
}

type TAliCloudComponents = typeof AliCloudComponents

interface IAliCloudComponentsWithLocales extends TAliCloudComponents {
  locales?: Ilocales;
}

let AliCloudComponentsWithLocales: IAliCloudComponentsWithLocales = AliCloudComponents;

AliCloudComponentsWithLocales.locales = {};
AliCloudComponentsWithLocales.locales['en-us'] = enus;
AliCloudComponentsWithLocales.locales['ja-jp'] = jajp;
AliCloudComponentsWithLocales.locales['zh-cn'] = zhcn;
AliCloudComponentsWithLocales.locales['zh-hk'] = zhhk;
AliCloudComponentsWithLocales.locales['zh-tw'] = zhtw;
AliCloudComponentsWithLocales.locales['vi-vn'] = vivn;
AliCloudComponentsWithLocales.locales['it-it'] = itit;

module.exports = AliCloudComponentsWithLocales;
