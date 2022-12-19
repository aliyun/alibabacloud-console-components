/**
 * @title 受控
 * @description 展示树选择受控的用法。
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

    this.state = {
      value: ['4', '6']
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, data) {
    console.log(value, data)
    this.setState({
      value
    })
  }

  render() {
    return (
      <TreeSelect
        treeDefaultExpandAll
        treeCheckable
        dataSource={treeData}
        value={this.state.value}
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
