import React from 'react'
import { TreeSelect } from '@alicloud/console-components'

const treeData = [{
  label: 'Component',
  value: '1',
  selectable: false,
  children: [{
    label: 'Form',
    value: '2',
    children: [{
      label: 'Input',
      value: '4'
    }, {
      label: 'Select',
      value: '5',
      disabled: true
    }]
  }, {
    label: 'Display',
    value: '3',
    children: [{
      label: 'Table',
      value: '6'
    }]
  }]
}]

export default class Demo5 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ['4', '6']
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, data) {
    console.log(value, data)
  }

  render() {
    return (
      <TreeSelect 
        treeDefaultExpandAll 
        showSearch 
        dataSource={treeData} 
        onChange={this.handleChange} 
        style={{ width: 200 }} />
    )
  }
}
