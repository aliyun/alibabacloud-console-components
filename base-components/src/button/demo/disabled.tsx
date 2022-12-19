/**
 * @title 禁用状态
 * @description 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Box } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Box wrap direction="column" spacing={20}>
        <Box direction="row" spacing={20}>
          <Button type="primary">Primary</Button>
          <Button component="a" type="primary" disabled>
            Primary
          </Button>
        </Box>
        <Box direction="row" spacing={20}>
          <Button type="secondary">Secondary</Button>
          <Button type="secondary" disabled>
            Secondary
          </Button>
        </Box>
        <Box direction="row" spacing={20}>
          <Button type="normal">Normal</Button>
          <Button type="normal" disabled>
            Normal
          </Button>
        </Box>
      </Box>
      <br />
      <div>
        <div className="ghost-light-background">
          <Button ghost="light" disabled>
            Ghost Light
          </Button>
        </div>
        <div className="ghost-dark-background">
          <Button ghost="dark" disabled>
            Ghost Dark
          </Button>
        </div>
      </div>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #ebecf0;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
`
