/**
 * @title 平铺叶子节点
 * @description 当最后一级都是叶子节点时，平铺展示
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tree } from '@alicloudfe/components'

const TreeNode = Tree.Node

const formatDataSource = (data) => {
  return data.map((it) => {
    return {
      ...it,
      key: it.value,
      children: formatDataSource(it.children || [])
    }
  })
}

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then((response) => response.json())
      .then((data) => this.setState({ data: formatDataSource([data[0]]) }))
      .catch((e) => console.log(e))
  }

  render() {
    return (
      <Tree
        checkable
        renderChildNodes={(nodes) => {
          if (
            nodes.find(
              (node) => node.props.children && node.props.children.length
            )
          ) {
            ;<ul role="group" className={`next-tree-child-tree`}>
              {nodes}
            </ul>
          }
          return (
            <ul role="group" className="next-tree-child-tree custom-leaf-tree">
              {nodes}
            </ul>
          )
        }}
        defaultExpandAll
        dataSource={this.state.data}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-leaf-tree {
    padding-left: 20px;
    display: block;
    font-size: 0;
    white-space: normal;
  }
  .custom-leaf-tree .next-tree-switcher {
    display: none;
  }

  .custom-leaf-tree .next-tree-node {
    margin-left: 0 !important;
    margin-right: 8px;
    width: 68px;
    display: inline-block;
  }
`
