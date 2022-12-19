/**
 * @title 通过columns设置列
 * @description 通过 `columns` 参数设置列
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table } from '@alicloudfe/components'

const dataSource = () => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2000 + i
    })
  }
  return result
}
const render = (value, index, record) => {
  return <a href="javascript:;">Remove({record.id})</a>
}

const columns = [
  {
    title: 'Title1',
    dataIndex: 'id',
    width: 140
  },
  {
    title: 'Group2-7',
    children: [
      {
        title: 'Title2',
        dataIndex: 'id',
        width: 140
      },
      {
        title: 'Title3',
        dataIndex: 'title.name',
        lock: true,
        width: 200
      },
      {
        title: 'Group4-7',
        children: [
          {
            title: 'Title4',
            dataIndex: 'title.name',
            width: 400
          },
          {
            title: 'Title5',
            dataIndex: 'title.name',
            width: 200
          },
          {
            title: 'tet',
            children: [
              {
                title: 'Title6',
                dataIndex: 'title.name',
                width: 400
              },
              {
                title: 'Title7',
                dataIndex: 'title.name',
                width: 200
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '',
    children: [
      {
        title: 'Time',
        dataIndex: 'time',
        width: 500
      },
      {
        cell: render,
        width: 200
      }
    ]
  }
]

export default function DemoComponent() {
  const content = <Table columns={columns} dataSource={dataSource()} />
  return <Style>{content}</Style>
}
const Style = styled.div``
