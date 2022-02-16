/**
 * @title 场景三 + 结合表格使用
 * @describe 场景三：multi-multi：多维度多类别单选
 * @canFullScreen
 */

import React, {useState} from "react";
import { Search, IRcSearchProps, SearchTagList } from "@alicloud/console-components-search";
import { Button, Table } from '@alicloud/console-components'
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
    console.log(`提交搜索： ${JSON.stringify(allFileds)}`)
  }

  return (
    <div>
      <p>有默认分类: 实例名称</p>
      <div>
        <Button type="primary" style={{marginRight: '10px'}}>主按钮</Button>
        <Search
          mode="multi-multi"
          defaultDataIndex="name"
          regionId="demo"
          resourceType="demo"
          options={options}
          onChange={onChange}
          onSuggest={onSuggest}
          onTagChange={onTagChange}
          onSearch={onSearch}
          tags={tagList}
          style={{marginRight: '10px', width: '500px'}}
        />
        <Button type="normal">普通按钮</Button>

      </div>
      
      <SearchTagList regionId="demo" resourceType="demo" style={{marginTop: '8px'}} tagList={tagList} onChange={onTagChange} />
      <Table>
        <Table.Column title="Key" dataIndex="key" />
        <Table.Column title="实例ID/名称" dataIndex="id" />
        <Table.Column title="状态" dataIndex="status" />
      </Table>
    </div>
    
  )
};

export default Demo3;
