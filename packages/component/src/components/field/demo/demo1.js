import React from 'react'
import { Input, Button, Field } from '@alicloud/console-components'
import './demo1.less'

export default class Demo1 extends React.PureComponent {
  field = new Field(this, {forceUpdate: true})

  onGetValue() {
    console.log(this.field.getValue('input'))
  }

  render() {
    const { init, setValue, reset } = this.field

    return (
      <div className="demo">
        <Input  {...init('input', {initValue: 'test'})}  />
        <br/><br/>
        <Button type="primary" onClick={this.onGetValue.bind(this)}>getValue</Button>
        <Button type="primary" onClick={() => setValue('input', 'set me by click')}>setValue</Button>
        <Button onClick={() => reset()}>reset</Button>
      </div>
    )
  }
}