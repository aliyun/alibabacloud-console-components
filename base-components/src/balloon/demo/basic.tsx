/**
 * @title 基本
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Balloon } from '@alicloudfe/components'

const defaultTrigger = (
  <Button className="btrigger" style={{ margin: '5px' }}>
    default style
  </Button>
)
const disabledTrigger = (
  <Button disabled className="btrigger" style={{ margin: '5px' }}>
    default style
  </Button>
)
const primary = (
  <Button className="btrigger" style={{ margin: '5px' }}>
    primary style
  </Button>
)

const Demo = () => (
  <div className="container">
    <Balloon trigger={defaultTrigger} closable={false}>
      default
    </Balloon>
    <Balloon type="primary" trigger={primary} triggerType="click">
      primary
    </Balloon>
    <Balloon trigger={disabledTrigger} closable={false}>
      disabeled default
    </Balloon>
  </div>
)

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
