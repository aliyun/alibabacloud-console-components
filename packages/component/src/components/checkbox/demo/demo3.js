import React from 'react'
import { Checkbox } from '@alicloud/console-components'

const { Group: CheckboxGroup } = Checkbox
const list = [
  {
    value: 'apple',
    label: 'Apple'
  }, {
    value: 'pear',
    label: 'Pear'
  }, {
    value: 'orange',
    label: 'Orange'
 }
]

export default class Demo3 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: ['orange']
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(selectedItems) {
    console.log('onChange callback', selectedItems)
    this.setState({
      value: selectedItems
    })
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <CheckboxGroup value={this.state.value} dataSource={list} onChange={this.onChange} />
      </div>
    )
  }
}
