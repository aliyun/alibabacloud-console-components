/**
 * 这是IRcSearchProps的说明。breezr-docs支持从源码中提取接口信息并文档化，因此你可以使用接口来定义Props，从而能便捷地将Props的信息通过文档透出。
 *
 * 下面列举的props其实是随便写的，仅仅用来说明breezr-docs的接口提取功能。
 */
import { IRcSearchOptionsProps } from './IRcSearchOptions.type';

export interface IRcSearchProps {
  /**
   * 是否是简单搜索， 不支持多 filter, 但是支持模糊
   * @default false
   */
  simple?: boolean;
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: any;
  /**
   * 对应不同场景值的类型数组，后面要详细展开列一下
   * @default []
   */
  options: IRcSearchOptionsProps[];
  /**
   * 默认placeholder
   */
  placeholder?: string;
  /**
   * 默认搜索类别
   */
  defaultDataIndex?: string;

  /**
   * 默认选中的类别
   */
  defaultSelectedDataIndex?: string;
  /**
   * 搜索触发
   */
  onSearch?: (value: string, dataIndex: string, extra?: any) => void;
  /**
   * 模糊搜索的回调函数(仅输入框返回)，用于构建模糊搜索的联想列表
   */
  onSuggest?: (value: string, dataIndex: string) => void;
  /**
   * 模糊搜索的 suggestions
   */
  suggestions?: any[];

  /**
   * 是否是模糊搜索
   */
  fuzzy?: boolean;

  /**
   * regionId, 数据上报用
   */
  regionId?: string;

  /**
  * resourceType， 数据上报用, 格式 ACS::ECS::INSTANCE
  */
  resourceType?: string;

  /**
   * 样式 class 前缀
   */
  prefix?: string;

  /**
   * 前缀选择器类型
   */
  prefixSelectMode?: 'select' | 'cascader';

  /**
   * 前缀选择器 item 渲染
   * @param item
   * @returns
   */
  prefixSelectItemRender?: (item: any) => React.ReactNode;
}
