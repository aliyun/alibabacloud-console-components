/**
 * @title 非受控组件
 * @description 使用 `RadioGroup` 渲染的组，通过设置 `defaultValue` 属性可以让组件变成[非受控组件](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alicloudfe/components'

const RadioGroup = Radio.Group

const list = [
  {
    value: 'apple',
    label: 'Apple',
    disabled: false
  },
  {
    value: 'pear',
    label: 'Pear',
    disabled: true
  },
  {
    value: 'orange',
    label: 'Orange'
  }
]

const UnControlApp = () => {
  return (
    <div>
      <RadioGroup dataSource={list} defaultValue={'apple'} />
    </div>
  )
}

export default function DemoComponent() {
  const content = <UnControlApp />
  return <Style>{content}</Style>
}
const Style = styled.div``
