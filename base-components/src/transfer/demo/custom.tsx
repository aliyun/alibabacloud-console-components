/**
 * @title 自定义穿梭按钮
 * @description 展示自定义穿梭按钮的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Transfer, Button } from '@alicloudfe/components'

const dataSource = (() => {
  const dataSource = []

  for (let i = 0; i < 10; i++) {
    dataSource.push({
      label:
        i % 3 === 0
          ? `content${i}contentcontentcontentcontentcontent`
          : `content${i}`,
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
        defaultValue={['3']}
        dataSource={dataSource}
        listStyle={{ width: '200px', height: '192px' }}
        defaultLeftChecked={['1']}
        onChange={this.handleChange}
        titles={[
          <Button key="left" type="primary">
            Source
          </Button>,
          'Target'
        ]}
        operations={['>>', '<<']}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
