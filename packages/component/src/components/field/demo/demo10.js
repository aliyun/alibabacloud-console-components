import React from 'react'
import { Input, Button, Field } from '@alicloud/console-components'

export default class Demo10 extends React.Component {
  field = new Field(this, {
    parseName: true
  })

  onGetValue() {
    console.log(this.field.getValues());
  }

  onSetValue() {
    this.field.setValues({
      obj: {
        b: 'b',
        c: 'c'
      },
      arr: ['first', 'second']
    })
  }

  render() {
    const { init, reset } = this.field

    return (
      <div className="demo">
        <h2>Object transfer</h2>
        <Input  {...init('obj.b', {initValue: 'test1'})}  /> &nbsp;
        <Input  {...init('obj.c', {initValue: 'test2'})}  />
        <br/>
        <h2>Array transfer</h2>
        <Input  {...init('arr.0', {initValue: '0'})}  /> &nbsp;
        <Input  {...init('arr.1', {initValue: '1'})}  />
        <br/><br/>
        result:
        <pre>{JSON.stringify(this.field.getValues(), null, 2)}</pre>
        <br/><br/>
        <Button type="primary" onClick={this.onGetValue.bind(this)}>getValues</Button>
        <Button onClick={this.onSetValue.bind(this)}>setValues</Button>
        <Button onClick={() => reset()}>reset</Button>
      </div>
    )
  }
}
