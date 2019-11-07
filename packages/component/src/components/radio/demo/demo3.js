import React, { Component } from 'react'
import { Radio } from '@alicloud/console-components'

const { Group: RadioGroup } = Radio

const list = [
  {
    value: 'apple',
    label: '苹果'
  }, 
  {
    value: 'pear',
    label: '梨'
  }, 
  {
    value: 'orange',
    label: '橙子'
  }
]
export default class RadioDemo3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'orange'
    }
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
        <h6>受限组件</h6>
        normal: <RadioGroup dataSource={list} value={this.state.value} onChange={this.onChange} />
        <br />
        <br />
        disabled: <RadioGroup disabled dataSource={list} value={this.state.value} onChange={this.onChange} />
        <br />
        <br />
        <h6>非受限组件</h6>
        <RadioGroup dataSource={list} defaultValue={'apple'} />
      </div>
    )
  }

}
