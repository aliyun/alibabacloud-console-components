import React, { Component } from 'react'
import { Table, Icon, MenuButton } from '@alicloud/console-components'

const { Item } = MenuButton

const dataSource = () => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      },
      id: 100306660940 + i,
      time: 2000 + i,
    })
  }
  return result
}
const render = (value, index, record) => {
  return <a href="javascript:;">Remove({record.id})</a>
}
const onChange = (...args) => {
  console.log(args)
}
const selectItem = id => {
  console.log(id)
}

const Demo2 = () => (
  <Table
    dataSource={dataSource()}
    rowSelection={{
      onChange,
      getProps: (record, index) => {
        console.log(record, index)

        return index === 2
          ? {
              disabled: true,
              children: index,
            }
          : {
              children: index,
            }
      },
      columnProps: () => {
        return {
          lock: 'left',
          width: 90,
          align: 'center',
        }
      },
      titleAddons: () => {
        return <div>请选择</div>
      },
      titleProps: () => {
        return {
          // remove the select all button
          // style: {display: 'none'},
          disabled: true,
          children: (
            <MenuButton
              text
              onItemClick={selectItem}
              menuProps={{
                isSelectIconRight: true,
              }}
            >
              <Item key="odd">odd</Item>
              <Item key="even">even</Item>
            </MenuButton>
          ),
        }
      },
    }}
  >
    <Table.Column title="Id" dataIndex="id" width={200} />
    <Table.Column title="Title" dataIndex="title.name" width={200} />
    <Table.Column title="Time" dataIndex="time" width={200} />
    <Table.Column cell={render} width={200} />
  </Table>
)

export default Demo2

export const demoMeta = {
  zhName: `可选择`,
  zhDesc: `表格可选择功能`,
}
