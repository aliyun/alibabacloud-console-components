/**
 * @title 按钮标签
 * @description 默认情况下 Button 组件使用 `<button>` 标签来渲染按钮，通过 `component` 属性可以自定义 Button 的标签类型。可选值为 `button` 和 `a`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Box } from '@alicloudfe/components'

const props = {
  component: 'a',
  href: 'http://www.alibaba.com',
  target: '_blank'
}

export default function DemoComponent() {
  const content = (
    <Box direction="row" spacing={20}>
      <Button {...props} type="primary">
        alibaba.com
      </Button>
      <Button {...props} type="secondary">
        alibaba.com
      </Button>
      <Button {...props} type="normal">
        alibaba.com
      </Button>
      <Button {...props} loading>
        alibaba.com loading
      </Button>
    </Box>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
