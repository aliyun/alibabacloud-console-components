import React, { useCallback } from 'react'
import InlineEditor from '@alicloud/console-components-inline-editor'
import Table from '@alicloud/console-components-table'
import { Grid, Button } from '@alicloud/console-components'

import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

intl.set({
  locale: 'zh',
})

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

const WithTable: React.FC<{}> = () => {
  const handleSumbit = useCallback((value) => {
    console.log('value:', value)
  }, [])

  const nameRender = useCallback(
    (value) => {
      return <InlineEditor onSubmit={handleSumbit}>{value}</InlineEditor>
    },
    [handleSumbit]
  )

  const descRender = useCallback(
    (value) => {
      return (
        <InlineEditor type="desc" shape="text" onSubmit={handleSumbit}>
          {value}
        </InlineEditor>
      )
    },
    [handleSumbit]
  )

  const columns = [
    {
      dataIndex: 'id',
      title: 'id',
    },
    {
      dataIndex: 'name',
      title: 'name',
      cell: nameRender,
    },
    {
      dataIndex: 'description',
      title: 'description',
      cell: descRender,
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

export default intl.withProvider()(WithTable)
