import React from 'react'
import { Checkbox } from '@alicloud/console-components'

const { Group: CheckboxGroup } = Checkbox
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

export default class Demo4 extends React.Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  
  onChange(selectedItems) {
    console.log('onChange callback', selectedItems)
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <CheckboxGroup defaultValue={['apple']} dataSource={list} onChange={this.onChange} />
      </div>
    )
  }
}