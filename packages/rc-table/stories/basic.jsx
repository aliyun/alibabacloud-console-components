import React, { Fragment } from 'react'
import { Grid, Button, Badge, Icon } from '@alicloud/console-components'
import Table from '@alicloud/console-components-table'

const dataSource = (() =>
  new Array(10).fill(null).map((item, i) => ({
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

const rowSelection = {
  mode: 'multiple',
  getProps: (item, i) => ({ disabled: i % 2 === 0 }),
  UNSTABLE_defaultSelectedRowKeys: [1, 2],
}

const primaryOperation = ownerProps => tableProps => (
  <Fragment>
    <Button type="primary" disabled={!ownerProps.creatable}>
      Create
    </Button>
    <Button>Refresh</Button>
  </Fragment>
)

const secondaryOperation = () => () => (
  <Fragment>
    <Button>
      <Icon type="cog" />
    </Button>
  </Fragment>
)

const App = props => (
  <div>
    <Grid.Row>
      <Grid.Col span="24">
        <Table
          exact
          affixActionBar
          fixedBarZIndex={80}
          afterFixedBarIntersectChanged={(alignType, isIntersecting) => {
            console.log(`${alignType}: ${JSON.stringify(isIntersecting)}`)
          }}
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
          primaryKey="id"
          operation={{
            primary: primaryOperation(props),
            secondary: secondaryOperation(props),
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
            total: 80,
            pageSize: 10,
          }}
          selection={({ selectedRowKeys }) => (
            <Fragment>
              <Badge count={selectedRowKeys.length}>
                <Button disabled={selectedRowKeys.length === 0}>Delete</Button>
              </Badge>
            </Fragment>
          )}
        />
      </Grid.Col>
    </Grid.Row>
  </div>
)

export default App
