/**
 * @title 基本
 * @description 基本滑块，当 `slider` 为 `double` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Range, Switch } from '@alicloudfe/components'

const style = {
  marginBottom: 20
}

const Demo = () => {
  const [disabled, setDisabled] = React.useState(false)

  return (
    <div style={{ width: 400 }}>
      <Range defaultValue={30} disabled={disabled} style={style} />
      <Range
        slider="double"
        defaultValue={[20, 70]}
        disabled={disabled}
        style={style}
      />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        Disabled: <Switch checked={disabled} onChange={setDisabled} />
      </div>
    </div>
  )
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
