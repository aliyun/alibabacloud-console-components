/**
 * @title 预览态
 * @description 设置  `isPreview` 和 `renderPreview` 属性后，评分组件仅展示模式，渲染自定义内容。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Rating, Button } from '@alicloudfe/components'

class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isPreview: false }
  }

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => this.setState({ isPreview: !this.state.isPreview })}
        >
          切换预览
        </Button>
        <br />
        <br />
        <Rating
          defaultValue={3.5}
          isPreview={this.state.isPreview}
          renderPreview={(value) => `Rating: ${value}`}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Preview />
  return <Style>{content}</Style>
}
const Style = styled.div``
