import React, { Component } from 'react'
import { Switch, Button, Icon } from '@alicloud/console-components'

const  onChange = (checked) => {
  console.log('switch to ' + checked);
}

export default class Demo2 extends Component {
  constructor(props){
    super(props)
    this.state={
      disabled: true
    }
  }

  toggle = () => {
    this.setState(Object.assign({}, this.state, {
      disabled: !this.state.disabled
    }))
  }

  render() {
    return (
      <div>
        <Switch disabled={this.state.disabled} checkedChildren={<Icon type="select" />} unCheckedChildren={<Icon type="close" />} />
        <br />
        <br />
        <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
      </div>
    )
  }
}
