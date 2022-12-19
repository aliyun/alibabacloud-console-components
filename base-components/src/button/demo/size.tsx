/**
 * @title 按钮尺寸
 * @description 可以通过设置 `size` 属性控制按钮的尺寸，可选值为 `large` `medium` `small`，其中默认值为 `medium`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon, Box } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Box direction="row" spacing={20}>
        <Button type="primary" size="large">
          <Icon type="atm" />
          Large
        </Button>
        <Button type="primary">
          <Icon type="atm" />
          Medium
        </Button>
        <Button type="primary" size="small">
          <Icon type="atm" />
          Small
        </Button>
      </Box>
      <br />
      <Button.Group size="large">
        <Button className="basic-button">Button</Button>
        <Button className="basic-button">Button</Button>
        <Button className="basic-button">Button</Button>
      </Button.Group>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
