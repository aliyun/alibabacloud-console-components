/**
* @title withAppLayout
*/

import React from 'react'
import { HashRouter } from 'dva/router'
import { Button, Badge } from '@alicloud/console-components'
import ConsoleMenu from '@alicloud/console-components-console-menu'
import Page from '@alicloud/console-components-page'
import Table from '@alicloud/console-components-table'
import type { TableProps } from '@alicloud/console-components/types/table'
import AppLayout from '@alicloud/console-components-app-layout'

const dataSource = (() =>
  new Array(100).fill(true).map((item, i) => ({
    id: i + 1,
    name: `Wind-table-item-${i}`,
    repo: 'https://wind.alibaba-inc.com/',
  })))()

const columns = [
  {
    dataIndex: 'name',
    title: 'Name',
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
  mode: 'multiple',
}

const items = [
  {
    label: 'Instance',
    key: '/instance',
  },
  {
    label: 'Monitor',
    key: '/monitor',
  },
  {
    label: 'Cases',
    key: '/cases',
  },
  {
    label: 'Manage',
    key: '/manage',
  },
  {
    label: 'Settings',
    key: '/settings',
  },
  {
    label: 'Profile',
    key: '/profile',
  },
  {
    label: 'Routes',
    key: '/routes',
  },
]
const Nav = () => <ConsoleMenu header="Aliyun Console" items={items} />

const Operation = () => (
  <>
    <Button type="primary" disabled>
      Create
    </Button>
    <Button>Refresh</Button>
  </>
)

const Basic: React.FC<{}> = () => {
  return (
    <HashRouter>
      <AppLayout nav={<Nav />}>
        <Page>
          <Page.Header title="阿里云控制台" />
          <Page.Content>
            <Table
              exact
              fixedBarExpandWidth={[24]}
              affixActionBar
              dataSource={dataSource}
              columns={columns}
              rowSelection={rowSelection}
              primaryKey="id"
              operation={Operation}
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
              selection={({ selectedRowKeys }: any) => (
                <>
                  <Badge count={selectedRowKeys.length}>
                    <Button disabled={selectedRowKeys.length === 0}>
                      Delete
                    </Button>
                  </Badge>
                </>
              )}
            />
          </Page.Content>
        </Page>
      </AppLayout>
    </HashRouter>
  )
}

export default Basic
