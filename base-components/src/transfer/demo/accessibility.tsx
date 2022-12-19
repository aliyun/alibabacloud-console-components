/**
 * @title 无障碍支持
 * @description 通过设置`locale`去修改对无障碍支持，默认已经设置，请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Transfer } from '@alicloudfe/components'

const dataSource = (() => {
  const dataSource = []

  for (let i = 0; i < 10; i++) {
    dataSource.push({
      label: `content${i}`,
      value: `${i}`
    })
  }

  return dataSource
})()

const obj = {
  items: '项',
  item: '项',
  moveAll: '移动全部',
  searchPlaceholder: '请输入',
  moveToLeft: '撤销选中元素',
  moveToRight: '提交选中元素'
}

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
        id="a11y-transfer"
        defaultValue={['2']}
        dataSource={dataSource}
        defaultLeftChecked={['1']}
        locale={obj}
        onChange={this.handleChange}
        titles={['Title', 'Title']}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
