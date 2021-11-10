/**
 * @title demo2
 * @describe 场景二：single-multi：单维度多类别单选
 * @canFullScreen
 */

import React from "react";
import { Search, IRcSearchProps } from "@alicloud/console-components-search";

// interface IProps {}
let options = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      placeholder: '请输入',
      dataSource: []
    }
  },
  {
    label: '网络类型',
    dataIndex: 'type',
    template: 'select',
    templateProps: {
      placeholder: '请选择',
      dataSource: [
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
        {label: 'C', value: 'c'},
        {label: 'D', value: 'd'},
      ]
    }
  },
  {
    label: '付费类型',
    dataIndex: 'pay',
    template: 'multiple',
    templateProps: {
      placeholder: '请选择',
      dataSource: [
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
        {label: 'C', value: 'c'},
        {label: 'D', value: 'd'},
      ]
    }
  }
]

const Demo2: React.FC<IRcSearchProps> = (props) => {
  async function onSuggest (value: string, dataIndex: string) {
    if (!value) {
      return [];
    }
    return [
      // {label: value, value: `${dataIndex}-${value}`}
      `${value}-1`,
      `${value}-2`,
      `${value}-3`,
      `${value}-4`,
      `${value}-5`,
    ]
  }

  async function onChange (changedFileds:any, allFileds:any) {
    console.log(`changedFileds:`,  changedFileds, 'allFileds', allFileds)
  }


  return (
    <Search
      mode="single-multi"
      defaultDataIndex="name"
      options={options}
      onChange={onChange}
      onSuggest={onSuggest}
    />
  )
};
 
export default Demo2;
