/**
 * @title 场景一
 * @describe 场景一：single-single：单维度单类别单选.
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
      placeholder: '默认按实例名称搜索',
      dataSource: []
    }
  }
]

let noFuzzyoptions = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      placeholder: '默认按实例名称搜索',
      dataSource: [],
      fuzzyDisable: true // 不支持模糊搜索 
    }
  }
]

let options2 = [
  {
    label: '网络类型',
    dataIndex: 'type',
    template: 'select',
    templateProps: {
      placeholder: '请选择网络类型',
      dataSource: [
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
        {label: 'C', value: 'c'},
        {label: 'D', value: 'd'},
      ]
    }
  }
]

const Demo1: React.FC<IRcSearchProps> = (props) => {

  async function onSuggestAsync (value: string, dataIndex: string) {
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
  function onSuggestPromise (value: string, dataIndex: string) {
    let rtList = [];
    if (!value) {
      rtList = [];
    }
    rtList = [
      // {label: value, value: `${dataIndex}-${value}`}
      `${value}-1`,
      `${value}-2`,
      `${value}-3`,
      `${value}-4`,
      `${value}-5`,
    ]
    return Promise.resolve(rtList)
  }

  async function onChange1 (changedFileds:any, allFileds:any) {
    console.log(`changedFileds:`,  changedFileds, 'allFileds', allFileds)
  }

  async function onSearch (allFileds:any) {
    console.log(`onSearch:`, 'allFileds', allFileds)
    console.log(`提交搜索： ${JSON.stringify(allFileds)}`)
  }

  return (
    <div>
      搜索类型：(async 调用)<br />
      <Search
        mode="single-single"
        regionId="demo"
        resourceType="demo"
        options={options}
        onSuggest={onSuggestAsync}
        onChange={onChange1}
        onSearch={onSearch}
      />
      <br /><br /><br />
      搜索类型：（promise调用）<br />
      <Search
        mode="single-single"
        regionId="demo"
        resourceType="demo"
        options={options}
        onSuggest={onSuggestPromise}
        onChange={onChange1}
        onSearch={onSearch} 
      />
      <br /><br /><br />
      搜索类型：（不支持模糊搜索 fuzzyDisable: true）<br />
      <Search
        mode="single-single"
        regionId="demo"
        resourceType="demo"
        options={noFuzzyoptions}
        onSuggest={onSuggestPromise}
        onChange={onChange1}
        onSearch={onSearch} 
      />
      <br /><br /><br />
      单选类型：<br />
      <Search
        mode="single-single"
        regionId="demo"
        resourceType="demo"
        options={options2}
        onChange={onChange1}
        onSearch={onSearch}
      />
      <br />
      单维度单类别,暂不支持多选
    </div>
  );
};

export default Demo1;
