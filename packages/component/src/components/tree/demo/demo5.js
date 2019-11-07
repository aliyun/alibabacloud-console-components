import React from 'react'
import { Tree, Checkbox } from '@alicloud/console-components'
import './demo5.less'

const data = [{
  key: '0-0',
  label: '0-0',
  children: [{
    key: '0-0-0',
    label: '0-0-0',
    children: [{
      key: '0-0-0-0',
      label: '0-0-0-0',
      children: [{
        key: '0-0-0-0-0',
        label: '0-0-0-0-0'
      }]
    }, {
      key: '0-0-0-1',
      label: '0-0-0-1'
    }]
  }, {
    key: '0-0-1',
    label: '0-0-1',
    children: [{
      key: '0-0-1-0',
      label: '0-0-1-0'
    }, {
      key: '0-0-1-1',
      label: '0-0-1-1'
    }]
  }]
}]

export default class Demo5 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: [],
      multiple: false
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleSelect(keys, info) {
    console.log(keys, info);
    this.setState({
      selectedKeys: keys
    })
  }

  handleCheck() {
    this.setState({
      multiple: !this.state.multiple,
      selectedKeys: []
    })
  }

  render() {
    const { multiple, selectedKeys } = this.state;
    return (
      <div className="control-select-demo">
        <label className="multiple-check">
          <Checkbox value={multiple} onChange={this.handleCheck} />
          <span className="multiple-text">Enable multiple</span>
        </label>
        <Tree defaultExpandAll multiple={multiple} selectedKeys={selectedKeys} onSelect={this.handleSelect} dataSource={data} />
      </div>
    )
  }
}