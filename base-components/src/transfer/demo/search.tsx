/**
 * @title 带搜索框
 * @description 带搜索框的穿梭框，可以自定义搜索函数。
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

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, data, extra) {
    console.log(value, data, extra)
  }

  render() {
    return (
      <Transfer
        showSearch
        defaultValue={['3']}
        dataSource={dataSource}
        defaultLeftChecked={['1']}
        onChange={this.handleChange}
        titles={['Searchable', 'Searchable']}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
