import React from 'react'
import { Checkbox, Cascader } from '@alicloud/console-components'
import './demo5.less'

export default class Demo5 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: [],
      data: [],
      checkStrictly: false
    }

    this.handleCheck = this.handleCheck.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
    .then(response => response.json())
    .then(data => this.setState({ data, value: ['2975'] }))
    .catch(e => console.log(e))
  }

  handleCheck() {
    this.setState({
      checkStrictly: !this.state.checkStrictly,
      value: []
    })
  }

  handleChange(value, data, extra) {
    console.log(value, data, extra)

    this.setState({
      value
    })
  }

  render() {
    return (
      <div className="control-multiple-demo">
        <label className="strictly-check">
          <Checkbox value={this.state.checkStrictly} onChange={this.handleCheck} />
          <span className="strictly-text">Enable checkStrictly</span>
        </label>
        <Cascader multiple checkStrictly={this.state.checkStrictly} value={this.state.value} dataSource={this.state.data} onChange={this.handleChange} />
      </div>
    )
  }
}
