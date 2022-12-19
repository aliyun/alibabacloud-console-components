/**
 * @title 受控分页
 * @description 受控分页，是指分页组件的状态由父组件维护，组件自身只负责渲染其父组件传递的值，父组件通过 `current` 属性传递当前的值。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 2
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(current) {
    this.setState({
      current
    })
  }

  render() {
    return (
      <Pagination current={this.state.current} onChange={this.handleChange} />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
