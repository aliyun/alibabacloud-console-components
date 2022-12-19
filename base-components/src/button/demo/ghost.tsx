/**
 * @title 幽灵按钮
 * @description 幽灵按钮通常用在有色背景下，可以使用 `ghost` 属性开启，此时 Button 为透明背景。对于浅色背景和深色背景，通过取值 `light`, `dark` 可以配置使用幽灵按钮的场景。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div style={{ clear: 'both' }}>
      <div className="ghost-light-background">
        <Button ghost="light">Ghost light</Button>
      </div>
      <div className="ghost-dark-background">
        <Button ghost="dark">Ghost dark</Button>
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
