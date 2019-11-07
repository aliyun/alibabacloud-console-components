import React, { Component } from 'react'
import { Radio } from '@alicloud/console-components'

const RadioGroup = Radio.Group;

const list = [
  {
    value: 'apple',
    label: 'Apple',
    disabled: false
  }, {
    value: 'pear',
    label: 'Pear'
  }, {
    value: 'orange',
    label: 'Orange',
    disabled: true
  }
]

export default class RadioDemo4 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value1: 'apple',
      value2: ''
    }
  }

  onNormalChange = (value) => {
    this.setState({
      value1: value
    })
  }

  onNestChange = (value) => {
    this.setState({
      value2: value
    })
  }


  render() {
    return (
      <div>
        <h4>Small size</h4>
        <RadioGroup dataSource={list} shape="button" size="small" value={this.state.value1} onChange={this.onNormalChange} />
        <br/>
        <br/>
        <h4>Medium size (default)</h4>
        <RadioGroup dataSource={list} shape="button" size="medium" value={this.state.value1} onChange={this.onNormalChange} />
        <br/>
        <br/>
        <h4>Large size</h4>
        <RadioGroup shape="button" size="large" value={this.state.value2} onChange={this.onNestChange}>
          <Radio id="banana" value="banana">Banana</Radio>
          <Radio id="watermelon" value="watermelon">Watermelon</Radio>
          <Radio id="peach" value="peach">Peach</Radio>
        </RadioGroup>
        <br/>
        <br/>
        <h4>Disabled and Selected-Disabled status</h4>
        <RadioGroup shape="button" value="banana" onChange={this.onNestChange}>
          <Radio id="peach" disabled value="peach">Peach</Radio>
          <Radio id="banana" disabled value="banana">Banana</Radio>
        </RadioGroup>
      </div>
    )
  }
}
