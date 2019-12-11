import React from 'react'
import { Input, Select, Range, Field } from '@alicloud/console-components'

const Demo3 = () => {
  const myField = Field.useField({
    onChange: (name, value) => {
      console.log(myField.getValues())
      switch (name) {
        case 'input':
          myField.setValue('sync', `change to: ${value}`)
          break
        case 'select':
          myField.setValue('sync', `${value} is coming`)
          break
        case 'range':
          myField.setValue('sync', ` (${value.join(',')}) ready`)
          break
      }
    },
  })

  const { init, getValue } = myField
  const layout = {
    marginBottom: 10,
    width: 400,
  }

  return (
    <div>
      <Input
        placeholder="controled by onChange"
        {...init('input')}
        style={layout}
      />
      <br />
      <Input placeholder="under control" {...init('input')} style={layout} />
      <br />
      <Select style={layout} {...init('select', { initValue: 'lucy' })}>
        <Select.Option value="jack">jack</Select.Option>
        <Select.Option value="lucy">lucy</Select.Option>
        <Select.Option value="disabled" disabled>
          disabled
        </Select.Option>
        <Select.Option value="hugo">hugo</Select.Option>
      </Select>
      <br />

      {getValue('select') !== 'hugo' ? (
        <Range
          style={{ ...layout, marginTop: 30 }}
          slider="double"
          scales={10}
          marks={10}
          {...init('range', { initValue: [20, 40], trigger: 'onProcess' })}
        />
      ) : null}
      <br />

      <hr style={{ marginBottom: 10 }} />
      <Input
        placeholder="everyone can control me"
        {...init('sync')}
        style={layout}
      />
      <br />
    </div>
  )
}

export default Demo3

export const demoMeta = {
  zhName: `关联控制`,
  zhDesc: '组件之间的关联控制. `onChange` 统一管理。',
}
