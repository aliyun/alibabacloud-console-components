/**
 * @title 仅图标按钮
 * @description Button只有图标时，应该显示为正方形
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Button>
        <Icon type="atm" />
      </Button>
      <Button text>
        <Icon type="atm" />
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
