/**
 * @title 无障碍支持
 * @description 在使用不包含文本的icon Button组件时，我们需要添加`aria-label`对其进行描述，键盘操作请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Button.Group>
        <Button type="primary" aria-label="prompt button">
          <Icon type="prompt" />
        </Button>
        <Button type="primary" aria-label="clock button">
          <Icon type="clock" />
        </Button>
        <Button type="primary" aria-label="set button">
          <Icon type="set" />
        </Button>
      </Button.Group>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
