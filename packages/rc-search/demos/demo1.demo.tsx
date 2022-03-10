/**
 * @title 场景1
 */

import React from "react";
import { Search, SearchFilter } from "@alicloud/console-components-search";
import { ConfigProvider } from "@alicloud/console-components";
import { useState } from "react";
 
 let options = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      placeholder: '按实例名称搜索',
      dataSource: []
    },
    groupName:"test"
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
    groupName:"test"
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
    groupName:"test2"
  }
]

let options2 = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      placeholder: '按实例名称搜索',
      dataSource: []
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
   const [filters, setFilters] = useState<any>([]);
   console.log(filters)
   return (
    <ConfigProvider>
    <div>
      <Search
        defaultDataIndex="name"
        options={options2}
        onSearch={(value, dataIndex) => {
          console.log(value, dataIndex)
        }}
        suggestions={[{label: '实例名称', children: ['222222']}, '33333333']}
      />
      <br/><br/>

      <div>搜索条件成组</div>
      <Search
        defaultDataIndex="name"
        options={options}
        onSearch={(value, dataIndex, extra) => {
          //@ts-ignore
          setFilters([...filters, extra])
        }}
        suggestions={[{label: '实例名称', children: ['222222']}, '33333333']}
      />

      <div style={{marginTop: 8}}>
        <SearchFilter
          dataSource={filters}
          onChange={(deletedFilter, remainFilters)=> {
            setFilters(remainFilters)
          }}
        />
      </div>

      <div style={{marginTop: 8}}>
        <SearchFilter
          dataSource={[
            {label: '实例名称', value: 'xxxxxx', dataIndex: 'name'},
            {value: [{tagKey: 'test', tagValue: ''}], dataIndex: 'tag'}
          ]}
          onChange={(deletedFilter, remainFilters)=> {
            console.log(deletedFilter, remainFilters);
          }}
        />
      </div>
    </div>
    </ConfigProvider>
   );
 };
 
 export default Demo1;
 