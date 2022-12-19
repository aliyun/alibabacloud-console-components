/**
 * @title 勾选
 * @description 通过设置 `treeCheckable`，开启 `Tree` 组件的勾选功能，注意，此时组件处于可多选状态，`multiple` 属性无效。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TreeSelect } from '@alicloudfe/components'

const treeData = [
  {
    label: 'Component',
    value: '1',
    children: [
      {
        label: 'Form',
        value: '2',
        children: [
          {
            label: 'Input',
            value: '4'
          },
          {
            label: 'Select',
            value: '5'
          }
        ]
      },
      {
        label: 'Display',
        value: '3',
        children: [
          {
            label: 'Table',
            value: '6'
          }
        ]
      }
    ]
  }
]

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, data) {
    console.log(value, data)
  }

  render() {
    return (
      <TreeSelect
        treeDefaultExpandAll
        treeCheckable
        dataSource={treeData}
        onChange={this.handleChange}
        style={{ width: 200 }}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
