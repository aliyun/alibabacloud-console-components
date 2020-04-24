import React, { useState } from 'react'
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

const tableMixExpanded = (
  <Table
    dataSource={data}
    primaryKey="key"
    expandedRowRender={record => record.address}
    rowSelection={{ onChange: () => {} }}
  >
    <Table.Column title="Key" dataIndex="key" />
    <Table.Column title="Name" dataIndex="name" />
    <Table.Column title="Age" dataIndex="age" />
    <Table.Column title="Address" dataIndex="address" />
  </Table>
)

const tableMixLock = (
  <div style={{ width: '500px' }}>
    <Table
      dataSource={data}
      primaryKey="key"
      rowSelection={{ onChange: () => {} }}
    >
      <Table.Column title="Key" dataIndex="key" width={100} />
      <Table.Column title="Name" dataIndex="name" lock width={100} />
      <Table.Column title="Age" dataIndex="age" width={200} lock="right" />
      <Table.Column title="Address" dataIndex="address" width={200} />
    </Table>
  </div>
)

const tableMixExpandedLock = (
  <div style={{ width: '500px' }}>
    <Table
      dataSource={data}
      primaryKey="key"
      rowSelection={{ onChange: () => {} }}
      expandedRowRender={record => record.address}
      expandedRowIndent={[3, 1]}
    >
      <Table.Column title="Key" dataIndex="key" width={100} />
      <Table.Column title="Name" dataIndex="name" lock width={100} />
      <Table.Column title="Age" dataIndex="age" width={200} lock="right" />
      <Table.Column title="Address" dataIndex="address" width={200} />
    </Table>
  </div>
)

const tableMixTreeLock = (
  <div style={{ width: '500px' }}>
    <Table dataSource={data} primaryKey="key" isTree>
      <Table.Column title="Key" dataIndex="key" width={100} />
      <Table.Column title="Name" dataIndex="name" lock width={100} />
      <Table.Column title="Age" dataIndex="age" width={200} lock="right" />
      <Table.Column title="Address" dataIndex="address" width={200} />
    </Table>
  </div>
)

const Demo20 = () => (
  <SWrapper>
    <div className="row">
      <h4>extra & select</h4>
      {tableMixExpanded}
    </div>
    <div className="row">
      <h4>extra & lock column & select</h4>
      {tableMixExpandedLock}
    </div>
    <div className="row">
      <h4>lock column & select</h4>
      {tableMixLock}
    </div>
    <div className="row">
      <h4>tree & lock column</h4>
      {tableMixTreeLock}
    </div>
  </SWrapper>
)

export default Demo20

export const demoMeta = {
  zhName: `混合模式`,
  zhDesc: `演示了tree模式和rowSelection模式混合`,
}

const SWrapper = styled.div`
  .row {
    margin-top: 10px;
  }
`
