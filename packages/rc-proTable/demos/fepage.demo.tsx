/**
* @title basic
*/

import React  from 'react'
import { Grid, Button, Badge, Icon } from '@alicloud/console-components'
import type { TableProps } from '@alicloud/console-components/types/table'
import Table, { ITableProps } from '@alicloud/console-components-protable'

const dataSource = (() =>
  new Array(30).fill(null).map((item, i) => ({
    id: i + 1,
    name: `Wind Table Item - ${i}`,
    repo: `https://www.aliyun.com/repo?id=${i}`,
  })))()

const columns = [
  {
    dataIndex: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    dataIndex: 'repo',
    title: 'Repository',
  },
]

const searchOption = [
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

const rowSelection: TableProps['rowSelection'] & {
  UNSTABLE_defaultSelectedRowKeys?: any[]
} = {
  getProps: (item: any, i: number) => ({ disabled: i % 2 === 0 }),
  UNSTABLE_defaultSelectedRowKeys: [1, 2],
}

const primaryOperation = (ownerProps: { creatable?: boolean }) => (
  tableProps: ITableProps
) => {
  return (
    <>
      <Button type="primary" disabled={!ownerProps.creatable}>
        Create
      </Button>
      <Button>Refresh</Button>
    </>
  )
}

const secondaryOperation = () => () => (
  <>
    <Button>
      <Icon type="cog" />
    </Button>
  </>
)

const App: React.FC<{
  creatable?: boolean
}> = (props) => {

  // state

  // method
  // rc-search
  async function onRCSSuggest (value: string, dataIndex: string) {
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

  async function onRCSSearch (allFileds:any) {
    console.log(`onRCSSearch:`, 'allFileds', allFileds)
    alert(`提交搜索： ${JSON.stringify(allFileds)}`)
  }

  return (
    <Grid.Row>
      <Grid.Col span="24">
        <div style={{ margin: '0 24px' }}>
          <Table
            exact
            affixActionBar
            fixedBarZIndex={80}
            fixedBarExpandWidth={[24, 24]}
            afterFixedBarIntersectChanged={(
              alignType: 'top' | 'bottom',
              isIntersecting: boolean
            ) => {
              console.log(
                'alignType:',
                alignType,
                'isIntersecting:',
                isIntersecting
              )
            }}
            dataSource={dataSource}
            columns={columns}
            rowSelection={rowSelection}
            primaryKey="id"
            operation={{
              primary: primaryOperation(props),
              secondary: secondaryOperation(),
            }}
            search={{
              mode:"single-multi",
              defaultDataIndex:"name",
              regionId:"demo",
              resourceType:"demo",
              options: searchOption,
              onSuggest: onRCSSuggest,
              onSearch: onRCSSearch
            }}
            pagination={{
              current: 1,
              total: 40,
              pageSize: 10,
            }}
            paginationMode="fe"
            selection={({ selectedRowKeys }: { selectedRowKeys: any[] }) => {
              return (
                <Badge count={selectedRowKeys.length}>
                  <Button disabled={selectedRowKeys.length === 0}>
                    Delete
                  </Button>
                </Badge>
              )
            }}
          />
        </div>
      </Grid.Col>
    </Grid.Row>
  )
}

export default App
