/**
 * @title 图标
 * @description 可以设置节点文本前的`icon`图标。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tree, Checkbox, Icon } from '@alicloudfe/components'

const data = [
  {
    label: 'Component',
    key: '1',
    icon: <Icon type="favorites-filling" />,
    children: [
      {
        label: 'Form',
        key: '2',
        icon: 'form',
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
        icon: 'form',
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
  const content = <Tree defaultExpandAll dataSource={data} />
  return <Style>{content}</Style>
}
const Style = styled.div``
