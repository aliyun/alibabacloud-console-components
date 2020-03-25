import React from 'react'
import { Grid, Button, Badge, Icon } from '@alicloud/console-components'
import { TableProps } from '@alicloud/console-components/types/table'
import Table, { ITableProps } from '@alicloud/console-components-table'

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
}> = props => {
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
      </Grid.Col>
    </Grid.Row>
  )
}

export default App
