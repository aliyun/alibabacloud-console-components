/**
 * @title 步长
 * @description 通过step控制每次加减步长
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alicloudfe/components'

function onChange(value) {
  console.log('changed', value)
}
function onCorrect(obj) {
  console.log(obj)
}

export default function DemoComponent() {
  const content = (
    <div>
      <NumberPicker
        defaultValue={0}
        onChange={onChange}
        onCorrect={onCorrect}
        step={0.01}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
