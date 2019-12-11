import React, { useState } from 'react'
import { Input, Button, Field } from '@alicloud/console-components'

const Demo11 = () => {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(true)

  const myField = Field.useField()

  const myField2 = Field.useField({ autoUnmount: false })

  return (
    <div>
      {show ? (
        <Input {...myField.init('name', { initValue: 'autoUnmount = true' })} />
      ) : null}
      <Button
        onClick={() => {
          console.log('value auto delete', myField.getValues())
        }}
        style={{ marginLeft: 4 }}
      >
        print
      </Button>
      <Button onClick={() => setShow(false)} warning style={{ marginLeft: 4 }}>
        delete
      </Button>
      <br />
      <br />
      {show2 ? (
        <Input
          {...myField2.init('name2', { initValue: 'autoUnmount = false' })}
        />
      ) : null}
      <Button
        onClick={() => {
          console.log('value always exist', myField2.getValues())
        }}
        style={{ marginLeft: 4 }}
      >
        print
      </Button>
      <Button onClick={() => setShow2(false)} warning style={{ marginLeft: 4 }}>
        delete
      </Button>
    </div>
  )
}

export const demoMeta = {
  zhName: `自动卸载`,
  zhDesc: `autoUnmount 默认为 true，当组件被 unmount 的时候会自动删除数据. autoUnmount 设置为 false 后，会一直保存数据.`,
}

export default Demo11
