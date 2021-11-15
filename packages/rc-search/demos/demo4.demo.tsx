/**
 * @title demo4
 * @describe 场景三：multi-multi：多维度多类别单选
 * @canFullScreen
 */

import React, {useState} from "react";
import { Search, IRcSearchProps, SearchTagList } from "@alicloud/console-components-search";
import { Radio } from '@alicloud/console-components'

const RadioGroup = Radio.Group;
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
    label: '密钥名称',
    dataIndex: 'netkey',
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
 
const Demo3: React.FC<IRcSearchProps> = (props) => {
  const [tagList, setTagList] = useState<any>([]);

  async function onSuggest (value: string, dataIndex: string) {
    console.log()
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

  async function onSuggestNoIndex (value: string) {
    if (!value) {
      return [];
    }
    return [
      {
        label: '实例名称',
        children: [
          `${value}-1`,
          `${value}-2`,
          `${value}-3`,
        ]
      },
      {
        label: '密钥名称',
        children: [
          `${value}-key-1`,
          `${value}-key-2`,
          `${value}-key-3`,
        ]
      }
    ]
  }

  async function onChange (changedFileds:any, allFileds:any) {
    console.log(`changedFileds:`,  changedFileds, 'allFileds', allFileds)
  }

  function onTagChange(newTags: any) {
    console.log(`onTagChange:`, newTags);
    setTagList(newTags);
  }

  async function onSearch (allFileds:any) {
    console.log(`onSearch:`, 'allFileds', allFileds)
    alert(`提交搜索： ${JSON.stringify(allFileds)}`)
  }

  return (
    <div>
      <Search
        mode="multi-multi"
        options={options}
        onChange={onChange}
        onSuggest={onSuggest}
        onSuggestNoDataIndex={onSuggestNoIndex}
        onTagChange={onTagChange}
        onSearch={onSearch}
        tags={tagList}
      />
      <br />
      <SearchTagList tagList={tagList} onChange={onTagChange} />
      <br /><br /><br />
    </div>
    
  )
};

export default Demo3;
