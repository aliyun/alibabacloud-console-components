/**
 * 这是IRcSearchProps的说明。breezr-docs支持从源码中提取接口信息并文档化，因此你可以使用接口来定义Props，从而能便捷地将Props的信息通过文档透出。
 *
 * 下面列举的props其实是随便写的，仅仅用来说明breezr-docs的接口提取功能。
 */
export interface IRcSearchProps {
  /**
   * 组件适应的场景:<br />
   *  - 场景一：single-single：单维度单类别单选<br />
   *  - 场景二：single-multi：单维度多类别单选<br />
   *  - 场景三：multi-multi：多维度多类别单选<br />
   * @default "single-single"
   */
  mode?: "single-single" | "single-multi" | "multi-multi" | string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 对应不同场景值的类型数组，后面要详细展开列一下
   * @default []
   */
  options: any;
  /**
   * 点击搜索按钮， 触发搜索回调。
   */
  onSearch?: () => void;
  /**
   * 包括onInput的回车；onSelect； 对Tag的增减。
   */
  onChange?: () => void;
  /**
   * input的input
   */
  onInput?: () => void;
  /**
   * 模糊搜索的回调函数(仅输入框返回)，用于构建模糊搜索的联想列表
   */
  onSuggest?: (value: string, dataIndex: string) => void;
  /**
   * 提供单选和多选, 触发。
   */
  onSelect?: () => void;
  /**
   * tag有增减时。
   */
  onTagChange?: () => void;
}
