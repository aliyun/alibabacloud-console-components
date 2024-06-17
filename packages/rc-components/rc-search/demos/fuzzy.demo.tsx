/**
 * @title 模糊搜索
 * @description 在你设置 `fuzzy=true` 或者 `defaultDataIndex` 被设置的时候，可以通过 suggestion 来做自动提示
 */

import React from "react";
import { Search, SearchFilter } from "@alicloud/console-components-search";
import { useState } from "react";
 
 let options = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      placeholder: '按实例名称搜索',
      dataSource: [{
        'label': "slb-xxxxx",
        'value': "slb-xxxxx"
      }]
    },
  },
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
    },
  },
  {
    label: '付费类型',
    dataIndex: 'pay',
    template: 'multiple',
    templateProps: {
      placeholder: '请选择付费类型',
      dataSource: [
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
        {label: 'C', value: 'c'},
        {label: 'D', value: 'd'},
      ]
    },
  }
]


 const Demo1: React.FC<{}> = (props) => {
   const [filters, setFilters] = useState<any>([
    {label: '实例名称', value: 'xxxxxx', dataIndex: 'name'},
    {value: [{tagKey: 'test', tagValue: ''}], dataIndex: 'tag'}
  ]);
   return (
      <div>
        <Search
          fuzzy
          options={options}
          onSearch={(value, dataIndex, extra) => {
            // 如果没有 dataIndex 表示用户直接按了回车
            if (dataIndex) {
              setFilters([...filters, extra])
            } else {
              // 如果 
              setFilters([...filters, {label: '没有任何条件', value }])
            }
          }}
          suggestions={[
            {
              label: '实例名称',
              value: 'name',
              children: [{
                label: 'slb-xxxxx',
                value: 'slb-xxxxx',
              }]
          }]}
        />

        <div style={{marginTop: 8}}>
          <SearchFilter
            dataSource={filters}
            onChange={(deletedFilter, remainFilters)=> {
              setFilters(remainFilters)
            }}
          />
        </div>
      </div>
   );
 };
 
 export default Demo1;
 