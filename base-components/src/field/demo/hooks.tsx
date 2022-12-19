/**
 * @title Hooks
 * @description 在 functional component 里可使用 `Field.useField` 支持 hooks. `依赖: react@^16.8`
 */

import styled from 'styled-components'

import ReactDOM from 'react-dom'
import React from 'react'
import { Input, Button, Field } from '@alicloudfe/components'

function App() {
  const field = Field.useField()

  const { init, setValue, reset, getError } = field

  function onGetValue() {
    console.log(field.getValue('input'))
  }

  function onSetValue() {
    field.setValue('input', 'xyz')
  }

  return (
    <div className="demo">
      <Input
        {...init('input', {
          initValue: 'test',
          rules: [
            {
              required: true,
              pattern: /hello/,
              message: 'must be hello'
            }
          ]
        })}
      />
      <span style={{ color: 'red' }}>{getError('input')}</span>

      <br />
      <br />
      <Button onClick={onSetValue}> setValue </Button>
      <Button onClick={onGetValue}> getValue </Button>
      <br />
      <br />
    </div>
  )
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
