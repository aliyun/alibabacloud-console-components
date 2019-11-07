import React from 'react'
import { Tree, Checkbox } from '@alicloud/console-components'
import './demo6.less'

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

export default class Demo6 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedKeys: [],
      checkStrictly: false
    }
    this.handleCheck = this.handleCheck.bind(this)
    this.handleCheckStrictly = this.handleCheckStrictly.bind(this)
    }

  handleCheck(keys, info) {
    console.log(keys, info)
    this.setState({
      checkedKeys: keys
    })
  }

  handleCheckStrictly() {
    this.setState({
      checkStrictly: !this.state.checkStrictly,
      checkedKeys: []
    })
  }

  render() {
    const { checkedKeys, checkStrictly } = this.state
    return (
      <div className="control-check-demo">
        <label className="strictly-check">
          <Checkbox value={checkStrictly} onChange={this.handleCheckStrictly} />
          <span className="strictly-text">Enable checkStrictly</span>
        </label>
        <Tree defaultExpandAll checkable checkStrictly={checkStrictly} checkedKeys={checkedKeys} onCheck={this.handleCheck} dataSource={data} />
      </div>
    )
  }
}  