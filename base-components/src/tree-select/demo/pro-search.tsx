/**
 * @title 异步搜索
 * @description 展示树选择异步搜索的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TreeSelect } from '@alicloudfe/components'

const defaultTreeData = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '绍兴',
        value: '绍兴'
      }
    ]
  }
]

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ['浙江'],
      treeData: defaultTreeData
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(searchVal, data) {
    clearTimeout(this.timeId)

    if (searchVal) {
      this.timeId = setTimeout(() => {
        this.setState({
          treeData: [
            {
              label: searchVal,
              value: searchVal
            }
          ]
        })
      }, 500)
    } else {
      this.setState({
        treeData: defaultTreeData
      })
    }
  }

  render() {
    return (
      <TreeSelect
        treeDefaultExpandAll
        showSearch
        onSearch={this.handleSearch}
        dataSource={this.state.treeData}
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
