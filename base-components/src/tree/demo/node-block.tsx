/**
 * @title 树节点占满一行
 * @description 可以通过设置 `isNodeBlock` 为 `true`，来让树节点占满一行，`isNodeBlock` 也可传入一个对象，支持设置 `defaultPaddingLeft`（默认的左内边距）和 `indent` （缩进距离），另外注意 `showLine`  在开启 `isNodeBlock` 时失效。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tree } from '@alicloudfe/components'

const TreeNode = Tree.Node

export default function DemoComponent() {
  const content = (
    <Tree
      defaultExpandAll
      isNodeBlock={{ defaultPaddingLeft: 50 }}
      defaultSelectedKeys={['1']}
      style={{ width: '300px' }}
    >
      <TreeNode label="Component" key="0">
        <TreeNode label="Form" key="1" disabled>
          <TreeNode label="Select" key="2">
            <TreeNode label="TreeSelect" key="3" />
          </TreeNode>
          <TreeNode label="Input" key="4" />
        </TreeNode>
        <TreeNode label="Display" key="5">
          <TreeNode label="Card" key="6" />
          <TreeNode label="Table" key="7" />
        </TreeNode>
      </TreeNode>
    </Tree>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
