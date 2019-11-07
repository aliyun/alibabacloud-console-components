import React, { Component } from 'react'
import { Radio } from '@alicloud/console-components'

export default class RadioDemo1 extends Component {

  render() {
    return (
      <div>
        <h6>Without Label</h6>
        <Radio defaultChecked />&nbsp;
        <Radio checked />&nbsp;
        <Radio disabled />&nbsp;
        <Radio checked disabled />&nbsp;
        <Radio />
        <br />
        <h6>With Label</h6>
        <Radio id="apple" label="苹果" />&nbsp;&nbsp;
        <Radio id="banana" label="香蕉" />&nbsp;&nbsp;
        <Radio id="pear" label="雪梨" />
      </div>
    )
  }

}
