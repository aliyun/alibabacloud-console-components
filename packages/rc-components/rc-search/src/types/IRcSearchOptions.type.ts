/**
 *
 */
export interface IRcSearchOptionsProps {
  /**
     * 字段展示名称
     */
  label: string;
  value?: any;
  disabled?: boolean;
  /**
     * 字段表单key
     */
  dataIndex: string;
  /**
     * 字段，交互组件类型（input/select/multiple）<br />
     *  - input：搜索框<br />
     *  - select：单选<br />
     *  - multiple：多选<br />
     */
  template?: string;
  /**
     * 定义传给表单项的属性
     * templateProps.placeholder
     * templateProps.dataSource
     */
  templateProps?: any;

  groupName?: string;
}
