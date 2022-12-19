/**
 * @title 非受控组件
 * @description 使用 `CheckboxGroup` 渲染的组，通过设置 `defaultValue` 属性可以让组件变成[非受控组件](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from '@alicloudfe/components'

const { Group: CheckboxGroup } = Checkbox
const list = [
  {
    value: 'apple',
    label: 'Apple',
    disabled: false
  },
  {
    value: 'pear',
    label: 'Pear'
  },
  {
    value: 'orange',
    label: 'Orange',
    disabled: true
  }
]

class UnControlApp extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(selectedItems) {
    console.log('onChange callback', selectedItems)
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <CheckboxGroup
          defaultValue={['apple']}
          dataSource={list}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <UnControlApp />
  return <Style>{content}</Style>
}
const Style = styled.div``
