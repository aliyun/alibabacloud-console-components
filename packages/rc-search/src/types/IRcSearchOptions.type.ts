/**
 * 
 */
export interface IRcSearchOptionsProps {
    /**
     * 字段展示名称
     */
    label: string;
    /**
     * 字段表单key
     */
    dataIndex: string;
    /**
     * 默认值
     */
    defaultValue: any;
    /**
     * 字段，交互组件类型（input/select/multiple）<br />
     *  - input：搜索框<br />
     *  - select：单选<br />
     *  - multiple：多选<br />
     */
    template: string;
}
  