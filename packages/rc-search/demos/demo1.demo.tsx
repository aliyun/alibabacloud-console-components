/**
 * @title demo1
 * @describe 场景一：single-single：单维度单类别单选.
 */

import React from "react";
import { Search, IRcSearchProps } from "@alicloud/console-components-search";

// interface IProps {}

let options = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input'
  }
]

let options2 = [
  {
    label: '网络类型',
    dataIndex: 'type',
    template: 'select'
  }
]

const Demo1: React.FC<IRcSearchProps> = (props) => {

  async function onSuggest1 (value: string, dataIndex: string) {
    return [
      {label: value, value: `${dataIndex}-${value}`}
    ]
  }

  return (
    <div>
      搜索类型：<br />
      <Search mode="single-single" options={options} onSuggest={onSuggest1} />
      <br /><br /><br />
      单选：<br />
      <Search mode="single-single" options={options2} />
    </div>
  );
};

export default Demo1;
