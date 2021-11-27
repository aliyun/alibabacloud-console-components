import React, { useCallback, useState } from 'react'
import { Grid, Button, Badge } from '@alicloud/console-components'
import Table from '@alicloud/console-components-table'

const dataSource = (() =>
  new Array(20).fill(null).map((item, i) => ({
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

const initPagination = {
  current: 1,
  pageSize: 10,
  total: 100,
}

const App: React.FC<{}> = () => {
  const [pagination, setPagination] = useState(initPagination)

  const handlePageSizeChange = useCallback(
    (pageSize) => {
      setPagination({
        ...pagination,
        pageSize,
      })
    },
    [pagination]
  )

  const handleChange = useCallback(
    (current) => {
      setPagination({
        ...pagination,
        current,
      })
    },
    [pagination]
  )

  return (
    <Grid.Row>
      <Grid.Col span="24">
        <div style={{ margin: '0 24px' }}>
          <Table
            exact
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
            rowSelection={{}}
            primaryKey="id"
            operation={<Button type="primary">Create</Button>}
            search={{
              filter: [
                {
                  value: 'InstanceName',
                  label: 'By Instance Name',
                },
              ],
            }}
            pagination={{
              ...pagination,
              onPageSizeChange: handlePageSizeChange,
              onChange: handleChange,
              popupProps: {
                align: 'bl tl',
              },
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
