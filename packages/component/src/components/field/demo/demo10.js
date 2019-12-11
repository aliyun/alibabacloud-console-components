import React from 'react'
import { Input, Button, Field } from '@alicloud/console-components'
import styled from 'styled-components'

const Demo10 = () => {
  const myField = Field.useField({
    parseName: true,
    values: {
      objWithDefaults: {
        a: 1,
        b: 2,
      },
    },
  })

  const onGetValue = () => {
    console.log(myField.getValues())
  }

  const onSetValue = () => {
    myField.setValues({
      obj: {
        b: 'b',
        c: 'c',
      },
      arr: ['first', 'second'],
      objWithDefaults: {
        a: 100,
        b: 200,
      },
    })
  }
  const { init, reset, resetToDefault } = myField

  return (
    <SWrapper>
      <h3>Object transfer</h3>
      obj.b: <Input {...init('obj.b', { initValue: 'test1' })} /> &nbsp; obj.c:{' '}
      <Input {...init('obj.c', { initValue: 'test2' })} />
      <br />
      <h3>Array transfer</h3>
      arr.0: <Input {...init('arr.0', { initValue: '0' })} /> &nbsp; arr.1:{' '}
      <Input {...init('arr.1', { initValue: '1' })} />
      <br />
      <br />
      <h3>Object with Defaults</h3>
      objWithDefaults.a: <Input {...init('objWithDefaults.a')} /> &nbsp;
      objWithDefaults.b: <Input {...init('objWithDefaults.b')} />
      <br />
      <br />
      result:
      <pre>{JSON.stringify(myField.getValues(), null, 2)}</pre>
      <br />
      <br />
      <Button type="primary" onClick={onGetValue}>
        getValues
      </Button>
      <Button onClick={onSetValue}>setValues</Button>
      <Button onClick={() => reset()}>reset</Button>
      <Button onClick={() => resetToDefault()}>resetToDefault</Button>
    </SWrapper>
  )
}

export default Demo10

export const demoMeta = {
  zhName: `结构化解析`,

  zhDesc: `把 \`init('obj.b')\` 的数据转换成 \`obj={obj:{b:'value'}}\`；

	把 \`init('arr.0')\` 的数据转换成 \`obj={arr:['']}\`；`,
}
const SWrapper = styled.div`
  .next-btn {
    margin-right: 8px;
  }
`
