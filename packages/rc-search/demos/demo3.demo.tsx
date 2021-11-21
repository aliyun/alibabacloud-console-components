/**
 * @title demo3
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
      placeholder: '按实例名称搜索',
      dataSource: []
    }
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
    }
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
    }
  }
]
 
const Demo3: React.FC<IRcSearchProps> = (props) => {
  const [tagList, setTagList] = useState<any>([]);

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
      <p>有默认分类</p>
      <Search
        mode="multi-multi"
        defaultDataIndex="name"
        options={options}
        onChange={onChange}
        onSuggest={onSuggest}
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
