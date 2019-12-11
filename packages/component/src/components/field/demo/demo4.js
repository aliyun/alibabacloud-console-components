import React from 'react'
import { Input, Button, Field } from '@alicloud/console-components'
import styled from 'styled-components'

const Demo4 = () => {
  const myField = Field.useField()

  const { init, getError, setError, setErrors } = myField
  return (
    <SWrapper>
      <Input
        {...init('input', {
          rules: [
            {
              required: true,
              pattern: /hello/,
              message: 'must be hello',
            },
          ],
        })}
      />
      <br />
      <span style={{ color: 'red' }}>{getError('input')}</span>

      <br />
      <Button
        onClick={() => {
          setError('input', 'set error 1')
        }}
      >
        setError
      </Button>

      <Button
        onClick={() => {
          setErrors({ input: 'set error 2' })
        }}
      >
        setErrors
      </Button>

      <Button
        onClick={() => {
          setErrors({ input: '' })
        }}
      >
        clear
      </Button>
      <br />
      <br />
      <Input {...init('input2')} />
      <br />
      <span style={{ color: 'red' }}>{getError('input2')}</span>
      <br />

      <Button
        onClick={() => {
          setError('input2', 'errors will be removed by onChange')
        }}
      >
        setError
      </Button>
    </SWrapper>
  )
}

export default Demo4

export const demoMeta = {
  zhName: `自定义错误`,
  zhDesc: `自己控制组件的errors`,
}

const SWrapper = styled.div`
  .next-btn {
    margin-right: 8px;
  }
`
