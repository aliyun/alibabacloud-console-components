/**
 * @title 基本
 * @description 最简单的单选用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TreeSelect } from '@alicloudfe/components'

const TreeNode = TreeSelect.Node

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
        onChange={this.handleChange}
        style={{ width: 200 }}
      >
        <TreeNode key="1" value="1" label="Component">
          <TreeNode key="2" value="2" label="Form">
            <TreeNode key="4" value="4" label="Input" />
            <TreeNode key="5" value="5" label="Select" disabled />
          </TreeNode>
          <TreeNode key="3" value="3" label="Display">
            <TreeNode key="6" value="6" label="Table" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
