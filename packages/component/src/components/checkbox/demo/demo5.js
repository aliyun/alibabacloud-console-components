import React from 'react'
import { Checkbox } from '@alicloud/console-components'

const { Group: CheckboxGroup } = Checkbox


export default class Demo5 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ['orange']
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(selectedItems) {
    this.setState({
      value: selectedItems
    })
  }
  
  render() {
    return (
      <div>
        <CheckboxGroup value={this.state.value} onChange={this.onChange}>
          <Checkbox id="apple" value="apple" disabled>Apple</Checkbox>
          <Checkbox id="watermelon" value="watermelon">Watermelon</Checkbox>
          <Checkbox id="orange" value="orange">Orange</Checkbox>
        </CheckboxGroup>
      </div>
    )
  }
}
