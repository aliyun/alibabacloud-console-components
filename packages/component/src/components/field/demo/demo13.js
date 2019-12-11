import React from 'react'
import { Button, Input, Table, Field } from '@alicloud/console-components'

const Demo = () => {
  const field = Field.useField()

  const { init, setValue, reset, getError } = field

  function onGetValue() {
    console.log(field.getValue('input'))
  }

  function onSetValue() {
    field.setValue('input', 'xyz')
  }

  return (
    <div>
      <Input
        {...init('input', {
          initValue: 'test',
          rules: [
            {
              required: true,
              pattern: /hello/,
              message: 'must be hello',
            },
          ],
        })}
      />
      <span style={{ color: 'red' }}>{getError('input')}</span>

      <br />
      <br />
      <Button style={{ marginRight: 8 }} onClick={onSetValue}>
        setValue
      </Button>
      <Button onClick={onGetValue}> getValue </Button>
      <br />
      <br />
    </div>
  )
}

export const demoMeta = {
  zhName: `Hooks`,
  zhDesc:
    '在 functional component 里可使用 Field.useField 支持 hooks. 依赖: react@^16.8',
}

export default Demo
