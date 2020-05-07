import React from 'react'
import CopyId from '@alicloud/console-components-copy-id'
import Table from '@alicloud/console-components-table'
import { Grid, Button } from '@alicloud/console-components'

const initDataSource = (() => {
  const dataSource = []
  for (let i = 0; i < 30; i++) {
    dataSource.push({
      id: i,
      name: `item-${i}`,
      description: `this is a long description-${i}`,
    })
  }
  return dataSource
})()

const renderId = (value: string) => (
  <CopyId balloonProps={{ align: 't' }} id={value}>
    {value}
  </CopyId>
)

const BasicDemo: React.FC<{}> = () => {
  const columns = [
    {
      dataIndex: 'id',
      title: 'id',
      cell: renderId,
    },
    {
      dataIndex: 'name',
      title: 'name',
    },
    {
      dataIndex: 'description',
      title: 'description',
    },
  ]

  return (
    <>
      <Grid.Row>
        <Grid.Col span="24">
          <div style={{ margin: '0 24px' }}>
            <Table
              search={{
                filter: [
                  {
                    value: 'InstanceName',
                    label: 'By Instance Name',
                  },
                ],
              }}
              operation={<Button>创建</Button>}
              rowSelection={{}}
              columns={columns}
              dataSource={initDataSource}
              pagination={{
                current: 1,
                total: 40,
                pageSize: 10,
              }}
            />
          </div>
        </Grid.Col>
      </Grid.Row>
    </>
  )
}

export default BasicDemo
