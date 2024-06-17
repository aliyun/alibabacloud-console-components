# @alicloud/console-components-search

基础搜索组件： 当前控制台的基础搜索主要针对列表页的搜索场景，此次基础搜索组件主要通过一个简约通用的框架满足控制台针对列表页不同场景下的搜索需求
## install 

```bash
tnpm i @alicloud/console-components-search --save-dev
```


## Demo


[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-fe-test-rc-search-doc&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2Fconsole-fe-test-rc-search-doc%2F-latest%2F&entryKey=demo1 )


## Usage

```js
/**
 * @title 场景1
 */

 import React from "react";
 import { Search } from "@alicloud/console-components-search";
 
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
 
   return (
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
        onSearch={(value, dataIndex) => {
          console.log(value, dataIndex)
        }}
        suggestions={[{label: '实例名称', children: ['222222']}, '33333333']}
      />
    </div>
   );
 };
 
 export default Demo1;
 
```

## API

### Search

基础搜索组件的参数
[$XView](https://xconsole.aliyun-inc.com/demo-playground?servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2Fconsole-fe-test-rc-search-doc%2F-latest%2F&consoleOSId=console-fe-test-rc-search-doc&entryKey=types%2FIRcSearchProps)

### IRcSearchOptionsProps

配置组件类别的options
[$XView](http://localhost:3333/?entryKey=types%2FIRcSearchOptions&consoleOSId=console-fe-test-rc-search-doc)

### SearchFilter

[$XView](http://localhost:3333/?entryKey=types%2FIRcSearchTagListProps&consoleOSId=console-fe-test-rc-search-doc)

### IRcSearchTagItemProps

[$XView](http://localhost:3333/?entryKey=types%2FIRcSearchTagItemProps&consoleOSId=console-fe-test-rc-search-doc)