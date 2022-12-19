/**
 * @title 基本用法
 * @description 最简单的用法。
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

  handleSelect(sourceSelectedValue, targetSelectedValue, trigger) {
    console.log('in panel: ', trigger)
    console.log('sourceSelectedValue are: ', sourceSelectedValue)
    console.log('targetSelectedValue are: ', targetSelectedValue)
  }

  render() {
    return (
      <Transfer
        defaultValue={['3']}
        dataSource={dataSource}
        defaultLeftChecked={['1']}
        onChange={this.handleChange}
        titles={['Title', 'Title']}
        onSelect={this.handleSelect}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
