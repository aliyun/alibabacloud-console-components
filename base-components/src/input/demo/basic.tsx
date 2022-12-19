/**
 * @title 简单
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

function onChange(v) {
  console.log(v)
}

export default function DemoComponent() {
  const content = (
    <div>
      <Input
        size="large"
        placeholder="Large"
        onChange={onChange}
        aria-label="Large"
      />
      <br />
      <br />

      <span id="J_InputMedium" style={{ display: 'none' }}>
        Aria Labelby Demo{' '}
      </span>
      <Input
        placeholder="Medium"
        aria-label="Medium"
        aria-labelledby="J_InputMedium"
      />
      <br />
      <br />

      <Input
        placeholder="Small"
        size="small"
        label="SIZE :"
        id="J_InputSmall"
      />
      <br />
      <br />

      <Input.TextArea placeholder="TextArea" aria-label="TextArea" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
