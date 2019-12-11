import React from 'react'
import {
  Button,
  Checkbox,
  Radio,
  Switch,
  Field,
} from '@alicloud/console-components'

const Demo8 = () => {
  const myField = Field.useField()
  const { init } = myField

  return (
    <div>
      <Radio {...init('radio', { initValue: false, valueName: 'checked' })}>
        checked
      </Radio>
      <br />
      <Checkbox
        {...init('checkbox', { valueName: 'checked', initValue: true })}
      >
        defaultChecked
      </Checkbox>
      <br />
      <Switch
        {...init('switch', { valueName: 'checked', initValue: false })}
        style={{ marginTop: 10, marginBottom: 10 }}
      />
      <br />
      <Button
        type="primary"
        style={{ marginRight: 8 }}
        onClick={() => {
          console.log(myField.getValues())
        }}
      >
        getValues
      </Button>
      <Button
        style={{ marginRight: 8 }}
        onClick={() => {
          myField.setValues({
            radio: true,
            switch: true,
            checkbox: false,
          })
        }}
      >
        setValues
      </Button>
      <Button
        onClick={() => {
          myField.reset()
        }}
      >
        reset
      </Button>
    </div>
  )
}

export default Demo8

export const demoMeta = {
  zhName: '自定义受控字段',
  zhDesc: 'valueName 的默认值为 value，如果为其他需要用 valueName 指定',
}
