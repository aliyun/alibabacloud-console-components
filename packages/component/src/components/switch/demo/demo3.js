import React, { Component } from 'react'
import { Switch } from '@alicloud/console-components'

const  onChange = (checked) => {
  console.log('switch to ' + checked);
};
export default class SwitchDemo3 extends Component {
  constructor(props){
    super(props)
    this.state={
      checked: false
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange(checked){
    this.setState({
      checked: checked
    })
  }
  render() {
    return (
      <div>
        <p>开关的值: {this.state.checked ? 'true' : 'false'}</p>
          <div>
            <Switch checked={this.state.checked} size="small" onChange={this.onChange} />&nbsp;&nbsp;
            <Switch checked={this.state.checked} size="small" onChange={this.onChange} disabled />
          </div>
      </div>
    )
  }
}