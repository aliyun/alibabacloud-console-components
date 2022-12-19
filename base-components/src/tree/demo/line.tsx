/**
 * @title 带线样式
 * @description 使用`showLine`开启节点之间的连接线，用于更清晰地展示节点的层级结构。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tree, Checkbox } from '@alicloudfe/components'

const data = [
  {
    label: 'Component',
    key: '1',
    children: [
      {
        label: 'Form',
        key: '2',
        selectable: false,
        children: [
          {
            label: 'Input',
            key: '4'
          },
          {
            label: 'Select',
            key: '5'
          }
        ]
      },
      {
        label: 'Display',
        key: '3',
        children: [
          {
            label: 'Table',
            key: '6'
          }
        ]
      }
    ]
  }
]

export default function DemoComponent() {
  const content = <Tree defaultExpandAll showLine dataSource={data} />
  return <Style>{content}</Style>
}
const Style = styled.div``
