# @alicloud/console-components-search

基础搜索组件： 当前控制台的基础搜索主要针对列表页的搜索场景，此次基础搜索组件主要通过一个简约通用的框架满足控制台针对列表页不同场景下的搜索需求
按照使用场景分为三种使用场景
- 场景一：单维度单类别单选 （eg：该功能模块下只支持“实例名称”这唯一类别的搜索）；
- 场景二：单维度多类别单选（eg：该功能模块下只支持“实例名称”这唯一类别的搜索网络类型包括多个子类别）；
- 场景三：多维度多类别（eg：该功能模块下支持“网络类型”这一类别和其他同等类别的交集搜索）；

### SearchTagList
场景二、三需结合SearchTagList使用， SearchTagList用与展示Search已选的筛选条件（以tag的形式），分成两个组件可以更灵活的定位SearchTagList的位置（比如表格场景）

## install 

```bash
tnpm i @alicloud/xconsole-components-search --save-dev
```

## Usage

```js
import { Search, IRcSearchProps } from "@alicloud/console-components-search";
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
  alert(`提交搜索： ${JSON.stringify(allFileds)}`)
}
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
  <br /><br /><br /> 搜索类型：（promise调用）<br />
  <Search
    mode="single-single"
    regionId="demo"
    resourceType="demo"
    options={options}
    onSuggest={onSuggestPromise}
    onChange={onChange1}
    onSearch={onSearch} 
  />
  <br /><br /><br /> 单选类型：<br />
  <Search
    mode="single-single"
    regionId="demo"
    resourceType="demo"
    options={options2}
    onChange={onChange1}
    onSearch={onSearch}
  />
  <br /> 单维度单类别,暂不支持多选
</div>

```

## 使用场景

### 场景一：单维度单类别单选 （eg：该功能模块下只支持“实例名称”这唯一类别的搜索）；

1、用户点击输入框直接输入要搜索的内容；<br>
2、场景一只提供‘input’类型和‘select’类型；<br>
3、模糊搜索的回调函数支持async 和 promise 调用；<br>

[$XView](http://localhost:3333/?entryKey=demo1&consoleOSId=console-fe-test-rc-search-doc)

> 场景一的已选值在基础搜索组件上展示， 无需引用“searchTagList”组件
<br>

### 场景二：单维度多类别单选（eg：该功能模块下只支持“实例名称”这唯一类别的搜索网络类型包括多个子类别）；

1、用户点击输入框激活下拉类别列表<br>
2、当用户直接输入内容的时候，列表消失<br>
3、用户点击类别后，在搜索框内生成类别Tag<br>
4、如果该类别有子类别/推荐项，顺次自动下拉展开<br>
5、当用户完成该类别搜索后，搜索框默认保留该类别Tag<br>
6、用户点击类别后，在搜索框内生成类别Tag<br>
7、如果该类别有子类别/推荐项，顺次自动下拉展开<br>
8、当用户完成该类别搜索后，搜索框默认保留该类别Tag<br>

[$XView](http://localhost:3333/?entryKey=demo2&consoleOSId=console-fe-test-rc-search-doc)

> 场景二：单维度单类别单选，同一类别下，用户切换子类别内容筛选条件区域的Tag直接被替换。当内容为空时点击输入框里面的叉， 可清除当前类别，回到初始状态。场景三的已选值在基础搜索组件外展示， 需引用“searchTagList”组件

<br>

### 场景三：多维度多类别（eg：该功能模块下支持“网络类型”这一类别和其他同等类别的交集搜索）；

1、多维度单类别单选，同一类别下，用户切换子类别内容<br>
2、筛选条件区域的Tag直接被替换；用户选择不同类别会<br>
3、生成新的筛选Tag出现在筛选区<br>

[$XView](http://localhost:3333/?entryKey=demo3&consoleOSId=console-fe-test-rc-search-doc)

> 场景三的已选值在基础搜索组件外展示， 需引用“searchTagList”组件

<br>

### 无默认分类, 默认多类别搜索；

1、当开发者没有指定默认类别且用户没有选择类别的时候；<br>
2、模糊搜索的回调函数将使用onSuggestNoDataIndex，返回<br>
3、开发者可返回多组类别的模糊搜索结果
[$XView](http://localhost:3333/?entryKey=demo4&consoleOSId=console-fe-test-rc-search-doc)


## API

## rc-search

基础搜索组件的参数
[$XView](http://localhost:3333/?entryKey=types%2FIRcSearchProps&consoleOSId=console-fe-test-rc-search-doc)

## options

配置组件类别的options
[$XView](http://localhost:3333/?entryKey=types%2FIRcSearchOptions&consoleOSId=console-fe-test-rc-search-doc)

## tags

场景二、三， 需要与SearchTagList共同使用时的参数
[$XView](http://localhost:3333/?entryKey=types%2FIRcSearchTagItemProps&consoleOSId=console-fe-test-rc-search-doc)

## SearchTagList

场景二、三， 需要与Search共同使用时的参数
[$XView](http://localhost:3333/?entryKey=types%2FIRcSearchTagListProps&consoleOSId=console-fe-test-rc-search-doc)

