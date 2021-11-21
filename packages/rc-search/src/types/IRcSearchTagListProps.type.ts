/**
 * 这是IRcSearchTagListProps的说明。breezr-docs支持从源码中提取接口信息并文档化，因此你可以使用接口来定义Props，从而能便捷地将Props的信息通过文档透出。
 *
 * 下面列举的props其实是随便写的，仅仅用来说明breezr-docs的接口提取功能。
 */
import { IRcSearchTagItemProps } from './IRcSearchTagItemProps.type'
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
   * tags 传入的taglist, 用于， 同步
   */
  tagList: IRcSearchTagItemProps[];
  /**
   * 当删减tag时， 返回新的taglist， 可直接赋值给rc-search组件
   */
  onChange?: (newTags: any) => void;
}
