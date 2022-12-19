/**
 * @title 事件
 * @description onChange, onProcess事件
 */

import * as React from 'react'
import styled from 'styled-components'

import { Range } from '@alicloudfe/components'

const onProcess = (value) => {
  // This callback will be triggered when startValue and endValue aren't equal after mousedown/mousemove. You shouldn't call setState here.
  console.log('onProcess: ', value)
}

const Demo = () => {
  const [value, onChange] = React.useState(128)
  const [doubleValue, onDoubleChange] = React.useState([200, 500])

  return (
    <div style={{ width: 400 }}>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <Range
          value={value}
          onChange={onChange}
          onProcess={onProcess}
          min={0}
          max={1024}
          marks={[0, 1024]}
          style={{ marginRight: 30 }}
        />
        <Range
          value={value}
          onProcess={onProcess}
          min={0}
          max={1024}
          marks={[0, 1024]}
        />
      </div>

      <Range
        slider="double"
        value={doubleValue}
        onChange={onDoubleChange}
        onProcess={onProcess}
        min={0}
        max={1024}
        marks={[0, 1024]}
      />
    </div>
  )
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
