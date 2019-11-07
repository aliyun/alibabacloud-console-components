import React, { Component } from 'react'
import { Checkbox, Button } from '@alicloud/console-components'

export default class Demo2 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      indeterminate: true,
      disabled: false
    }
  }

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.checked}
          indeterminate={this.state.indeterminate}
          disabled={this.state.disabled}
          onChange={
            (checked) => {
              this.setState({checked: checked, indeterminate: false});
            }
          }
        />
        <br />
        <br />
        <Button
          type="primary"
          onClick={
            () => {
              this.setState({checked: true, indeterminate: false});
            }
          }>checked = true
        </Button>
        <br />
        <br />
        <Button
          type="primary"
          onClick={
            () => {
              this.setState({checked: false});
            }
          }
          >checked = false
        </Button>
        <br />
        <br />
        <Button
          type="primary"
          onClick={
            () => {
              this.setState({checked: false, indeterminate: true});
            }
          }
          >indeterminate = true
        </Button>
        <br />
        <br />
        <Button
          type="primary"
          onClick={
            () => {
              this.setState({indeterminate: false});
            }
          }
          >indeterminate = false
        </Button>
        <br />
        <br />
        <Button
          type="primary"
          onClick={
            () => {
              this.setState({disabled: !this.state.disabled});
            }
          }
          >toggle disabled
        </Button>
      </div>
    )
  }
}