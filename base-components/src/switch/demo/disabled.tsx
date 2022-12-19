/**
 * @title 不可用
 * @description Switch 失效状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Switch } from '@alicloudfe/components'

const Demo = () => {
  const [disabled, setDisabled] = React.useState(true)

  const toggle = () => {
    setDisabled(!disabled)
  }

  return (
    <div>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </div>
  )
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
