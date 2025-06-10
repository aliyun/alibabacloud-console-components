/**
 * 这是IRcSearchTagListProps的说明。breezr-docs支持从源码中提取接口信息并文档化，因此你可以使用接口来定义Props，从而能便捷地将Props的信息通过文档透出。
 *
 * 下面列举的props其实是随便写的，仅仅用来说明breezr-docs的接口提取功能。
 */
import { IRcSearchTagItemProps } from './IRcSearchTagItemProps.type';

export interface IRcSearchTagListProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: any;
  /**
   * 筛选项
   */
  dataSource: IRcSearchTagItemProps[];
  /**
   * regionId
   */
  regionId?: string;
  /**
   * resourceType
   */
  resourceType?: string;
  /**
   * 当删减 tag 时， 返回新的筛选项
   */
  onChange?: (deletedFilter: IRcSearchTagItemProps, remainFilters: IRcSearchTagItemProps[]) => void;

  /**
   * 清除山选项
   */
  onClear?: () => void
}
