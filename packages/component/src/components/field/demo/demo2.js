import React from 'react'
import { Input, Button, Field } from '@alicloud/console-components'

const Demo2 = () => {
  const myField = Field.useField()
  const { init } = myField
  return (
    <div>
      <Input
        {...init('name', {
          getValueFromEvent: value => {
            if (value.match(/##/)) {
              return value
            }
            return `## title-${value}`
          },
        })}
      />
      <Button
        type="primary"
        onClick={() => {
          console.log(myField.getValues())
        }}
      >
        getValues
      </Button>
    </div>
  )
}

export default Demo2

export const demoMeta = {
  zhName: '自定义数据获取',
  zhDesc: '通过 `getValueFromEvent` 自定义获取数据',
}
