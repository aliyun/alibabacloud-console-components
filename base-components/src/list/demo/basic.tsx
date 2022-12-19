/**
 * @title 基础列表
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { List, Avatar } from '@alicloudfe/components'

const data = [
  {
    title: 'A Title',
    img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
    money: '$20'
  },
  {
    title: 'B Title',
    img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
    money: '$10'
  },
  {
    title: 'Title',
    img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
    money: '$20'
  },
  {
    title: 'Title',
    img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
    money: '$20'
  }
]

export default function DemoComponent() {
  const content = (
    <div style={{ width: 288 }}>
      <List
        size="small"
        header={<div>Notifications</div>}
        dataSource={data}
        renderItem={(item, i) => (
          <List.Item
            key={i}
            extra={item.money}
            title={item.title}
            media={<Avatar src={item.img} />}
          >
            List Item {i}
          </List.Item>
        )}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
