/**
 * @title 结构化解析
 * @description 把 `init('obj.b')` 的数据转换成 `obj={obj:{b:'value'}}`；
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input, Button, Field } from '@alicloudfe/components'

class App extends React.Component {
  field = new Field(this, {
    parseName: true,
    values: {
      objWithDefaults: {
        a: 1,
        b: 2
      }
    }
  })

  onGetValue() {
    console.log(this.field.getValues())
  }

  onSetValue() {
    this.field.setValues({
      obj: {
        b: 'b',
        c: 'c'
      },
      arr: ['first', 'second'],
      objWithDefaults: {
        a: 100,
        b: 200
      }
    })
  }

  render() {
    const { init, reset, resetToDefault } = this.field

    return (
      <div className="demo">
        <h3>Object transfer</h3>
        obj.b: <Input {...init('obj.b', { initValue: 'test1' })} />{' '}
        <span style={{ marginRight: 20 }} />
        obj.c: <Input {...init('obj.c', { initValue: 'test2' })} />
        <br />
        <h3>Array transfer</h3>
        arr.0: <Input {...init('arr.0', { initValue: '0' })} />{' '}
        <span style={{ marginRight: 20 }} />
        arr.1: <Input {...init('arr.1', { initValue: '1' })} />
        <br />
        <br />
        <h3>Object with Defaults</h3>
        objWithDefaults.a: <Input {...init('objWithDefaults.a')} />{' '}
        <span style={{ marginRight: 20 }} />
        objWithDefaults.b: <Input {...init('objWithDefaults.b')} />
        <br />
        <br />
        result:
        <pre>{JSON.stringify(this.field.getValues(), null, 2)}</pre>
        <br />
        <br />
        <Button type="primary" onClick={this.onGetValue.bind(this)}>
          getValues
        </Button>
        <Button onClick={this.onSetValue.bind(this)}>setValues</Button>
        <Button onClick={() => reset()}>reset</Button>
        <Button onClick={() => resetToDefault()}>resetToDefault</Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`
