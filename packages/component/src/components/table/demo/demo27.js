import React, { useState, useCallback } from 'react'
import { Table } from '@alicloud/console-components'
import styled from 'styled-components'

const data = [
  {
    key: 1,
    name: 'a',
    age: 32,
    address: 'aa',
    children: [
      {
        key: 11,
        name: 'b',
        age: 33,
        address: 'bb',
      },
      {
        key: 12,
        name: 'c',
        age: 33,
        address: 'cc',
        children: [
          {
            key: 121,
            name: 'd',
            age: 33,
            address: 'dd',
          },
        ],
      },
      {
        key: 13,
        name: 'e',
        age: 33,
        address: 'ee',
        children: [
          {
            key: 131,
            name: 'f',
            age: 33,
            address: 'ff',
            children: [
              {
                key: 1311,
                name: 'g',
                age: 33,
                address: 'gg',
              },
              {
                key: 1312,
                name: 'h',
                age: 33,
                address: 'hh',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'i',
    age: 32,
    address: 'ii',
    children: [],
  },
]

const generateAllKeys = (dataSource) => {
  let allKeys = []
  dataSource.forEach((item) => {
    allKeys.push(item.key)
    if (item.children && Array.isArray(item.children)) {
      allKeys = allKeys.concat(generateAllKeys(item.children))
    }
  })
  return allKeys
}

const TableMixTree = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const handleSelectAll = (selected, records) => {
    if (selected) {
      const allKeys = generateAllKeys(records)
      setSelectedRowKeys(allKeys)
    } else {
      const keys = records.map((item) => item.key)
      setSelectedRowKeys(keys)
    }
  }

  const handleSelect = useCallback(
    (selected, record) => {
      if (selected) {
        setSelectedRowKeys([record.key, ...selectedRowKeys])
      } else {
        // const selectedkeys = [...selectedRowKeys]
        // const index = selectedkeys.indexOf(record.key)
        // selectedkeys.splice(index, 1)
        const selectedKeys = selectedRowKeys.filter(
          (item) => item !== record.key
        )
        setSelectedRowKeys(selectedKeys)
      }
    },
    [selectedRowKeys]
  )

  return (
    <Table
      dataSource={data}
      primaryKey="key"
      isTree
      rowSelection={{
        onSelectAll: handleSelectAll,
        onSelect: handleSelect,
        selectedRowKeys,
      }}
    >
      <Table.Column title="Key" dataIndex="key" />
      <Table.Column title="Name" dataIndex="name" />
      <Table.Column title="Age" dataIndex="age" />
      <Table.Column title="Address" dataIndex="address" />
    </Table>
  )
}

const Demo27 = () => (
  <SWrapper>
    <div className="row">
      <h4>tree & select</h4>
      <TableMixTree />
    </div>
  </SWrapper>
)

export default Demo27

export const demoMeta = {
  zhName: `树型Table`,
  zhDesc: `演示了树型Table全选功能（包括children）`,
}

const SWrapper = styled.div`
  .row {
    margin-top: 10px;
  }
`
