import { IRegionItem } from './IRegionItem.type'

export interface IRegionGuidanceProps {
  /**
   * 展示类型
   * @requires
   */
  type?: 'message' | 'default';
  /**
   * 当前地域 Id
   * @requires
   */
  currentRegion: string;
  /**
   * 当前地域名称。 注：可以不传，如果不传就会取 `ALIYUN_CONSOLE_CONFIG.REGIONS` 里面的名称
   * 如果还是没找到就直接设置成 regionId
   */
  currentRegionName?: string;
  /**
   * 提示用户哪些地域有资源，用于地域选择器
   */
  regionList?: IRegionItem[];
  /**
   * 地域选择器提示文案
   */
  regionListLabel?: string;
  /**
   * 地域下拉的时候，点击事件
   */
  onRegionClick?: (regionId: string) =>void
  /**
   * 是否展示唤起全局搜索的 tip
   * @requires
   */
  globalSearchAction?: boolean;
  /**
   * 自定义内容
   */
  children?: React.ReactChild | React.ReactChildren;
  /**
   * 地域 Id
   * @requires
   */
  intl?: any;
}