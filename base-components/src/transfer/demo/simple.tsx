/**
 * @title 简单模式
 * @description 通过设置 mode 为 'simple'，可以开启简单模式，点击选项即移动。
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
        mode="simple"
        defaultValue={['3']}
        dataSource={dataSource}
        defaultLeftChecked={['1']}
        onChange={this.handleChange}
        titles={['Simple Mode', 'Simple Mode']}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
