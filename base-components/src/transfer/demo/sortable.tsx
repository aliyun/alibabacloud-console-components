/**
 * @title 拖拽排序
 * @description 设置 sortable 属性为 true 后，可拖拽排序左右面板。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Transfer } from '@alicloudfe/components'

const dataSource = (() => {
  const dataSource = []

  for (let i = 0; i < 10; i++) {
    dataSource.push({
      label: `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    })
  }

  return dataSource
})()

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.handleSort = this.handleSort.bind(this)
  }

  handleSort(value, position) {
    console.log(value, position)
  }

  render() {
    return (
      <Transfer
        sortable
        defaultValue={['3']}
        dataSource={dataSource}
        onSort={this.handleSort}
        titles={['Sortable', 'Sortable']}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
