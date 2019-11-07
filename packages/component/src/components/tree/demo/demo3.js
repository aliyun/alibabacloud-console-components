import React from 'react'
import { Tree } from '@alicloud/console-components'

const TreeNode = Tree.Node

const Demo3 = () => (
  <Tree defaultExpandAll showLine>
    <TreeNode label="Trunk">
      <TreeNode label="Branch">
        <TreeNode label="Branch">
          <TreeNode label="Leaf" />
        </TreeNode>
        <TreeNode label="Leaf" />
      </TreeNode>
      <TreeNode label="Branch">
        <TreeNode label="Leaf" />
        <TreeNode label="Leaf" />
      </TreeNode>
    </TreeNode>
  </Tree>)

export default Demo3