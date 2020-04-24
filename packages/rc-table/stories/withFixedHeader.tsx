import React from 'react'
import { Button, Badge, Icon, Tab } from '@alicloud/console-components'
import { TableProps } from '@alicloud/console-components/types/table'
import Table, { ITableProps } from '@alicloud/console-components-table'

const dataSource = (() =>
  new Array(100).fill(null).map((item, i) => ({
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
  return (
    <Tab>
      <Tab.Item key="list" title="列表">
        <div style={{ marginTop: '16px' }}>
          <Table
            exact
            fixedHeader
            maxBodyHeight={300}
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
              filter: [
                {
                  value: 'InstanceName',
                  label: 'By Instance Name',
                },
              ],
            }}
            pagination={{
              current: 1,
              total: 40,
              pageSize: 10,
            }}
            selection={({ selectedRowKeys }: { selectedRowKeys: any[] }) => {
              return (
                <>
                  <Badge count={selectedRowKeys.length}>
                    <Button disabled={selectedRowKeys.length === 0}>
                      Delete
                    </Button>
                  </Badge>
                </>
              )
            }}
          />
        </div>
      </Tab.Item>
      <Tab.Item key="other" title="其他">
        <div>
          {Array.from(Array(10)).map((_, idx) => {
            const index = idx
            return <p key={index}>其他内容{idx}</p>
          })}
        </div>
      </Tab.Item>
    </Tab>
  )
}

export default App
