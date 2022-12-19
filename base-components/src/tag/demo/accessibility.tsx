/**
 * @title 无障碍支持
 * @description 组件已支持无障碍。关于键盘操作请参考 [#无障碍键盘操作指南](#无障碍键盘操作指南)
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag, Icon } from '@alicloudfe/components'

const { Group: TagGroup } = Tag

const dataType = ['全部', '衣服', '手机', '化妆品']

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.onclick = this.onclick.bind(this)
  }
  onclick(v) {
    this.setState({ name: v.item })
  }
  render() {
    return (
      <div>
        <TagGroup>
          {dataType.map((item) => (
            <Tag
              type="normal"
              key={item}
              size="medium"
              onClick={() => this.onclick({ item })}
            >
              {item}
            </Tag>
          ))}
        </TagGroup>
        {this.state.name}
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
