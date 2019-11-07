import React, { Component } from 'react'
import { Radio } from '@alicloud/console-components'
const { Group: RadioGroup } = Radio


export default class RadioDemo2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'orange'
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange(value){
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <h6>受限嵌套组件</h6>
        <RadioGroup value={this.state.value} onChange={this.onChange}>
          <Radio id="apple" value="apple">苹果</Radio>
          <Radio id="watermelon" value="watermelon">西瓜</Radio>
          <Radio id="orange" value="orange">橙子</Radio>
        </RadioGroup>

        <br /><br/>
         <h6>非受限嵌套组件</h6>
        <RadioGroup defaultValue={'apple'}>
          <Radio id="apple" value="apple" label="苹果" />
          <Radio id="watermelon" value="watermelon" label="西瓜" />
          <Radio id="orange" value="orange" label="橙子" />
        </RadioGroup>
      </div>
    )
  }
}
