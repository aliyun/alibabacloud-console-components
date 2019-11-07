import React from 'react'
import { TreeSelect } from '@alicloud/console-components'

const treeData = [{
  label: 'Component',
  value: '1',
  children: [{
    label: 'Form',
    value: '2',
    children: [{
      label: 'Input',
      value: '4'
    }, {
      label: 'Select',
      value: '5'
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

export default class Demo3 extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, data) {
    console.log(value, data)
  }

  render() {
    return (
      <TreeSelect treeDefaultExpandAll treeCheckable dataSource={treeData} onChange={this.handleChange} style={{ width: 200 }} />
    )
  }
}
