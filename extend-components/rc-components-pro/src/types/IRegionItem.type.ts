export interface IRegionItem {
  /**
   * 地域 Id
   * @requires
   */
  id: string;
  /**
   * 地域名称。注：可以不传，如果不传就会取 `ALIYUN_CONSOLE_CONFIG.REGIONS` 里面的名称，如果还是没找到就直接设置成 region id
   */
  name?: string;
  /**
   * 地域资源数
   */
  count?: number;
};