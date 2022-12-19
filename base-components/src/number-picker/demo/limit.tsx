/**
 * @title 最大最小值
 * @description min max 来限制value的最大最小值。
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alicloudfe/components'

function onChange(value, e) {
  console.log('onChange', value, e)
}

function onCorrect(obj) {
  console.log('onCorrect', obj)
}

export default function DemoComponent() {
  const content = (
    <div>
      <NumberPicker
        type="inline"
        step={3}
        min={6}
        max={30}
        defaultValue={6}
        onChange={onChange}
        onCorrect={onCorrect}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
