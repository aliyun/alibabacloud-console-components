import React from 'react'
import { Button, Checkbox, Radio, Switch, Field } from '@alicloud/console-components'

export default class Demo8 extends React.Component {

  field = new Field(this)
  render() {
    const init = this.field.init;

    return (
      <div className="demo">
        <Radio {...init('radio', {initValue: false, valueName: 'checked'})} > checked</Radio>
        <br/>
        <Checkbox {...init('checkbox', {valueName: 'checked', initValue: true})} >
          defaultChecked
        </Checkbox>
        <br/>
        <Switch {...init('switch', {valueName: 'checked', initValue: false})}
          style={{marginTop: 10, marginBottom: 10}}/>
        <br/>
        <Button type="primary" onClick={() => {
          console.log(this.field.getValues());
          }}>getValues
        </Button>
        <Button onClick={() => {
          this.field.setValues({
            radio: true,
            switch: true,
            checkbox: false
          })
          }}> setValues 
        </Button>
        <Button onClick={() => {
          this.field.reset();
          }}>reset
        </Button>
      </div>
    )
  }
}