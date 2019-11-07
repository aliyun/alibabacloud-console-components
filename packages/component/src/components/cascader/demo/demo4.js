import React from 'react'
import { Checkbox, Cascader } from '@alicloud/console-components'
import './demo4.less'

export default class Demo4 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: null,
      canOnlySelectLeaf: false,
      data: []
    }

    this.handleCheck = this.handleCheck.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then(response => response.json())
      .then(data => this.setState({ data, value: '2975' }))
      .catch(e => console.log(e))
  }

  handleCheck() {
    this.setState({
      canOnlySelectLeaf: !this.state.canOnlySelectLeaf,
      value: null
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
      <div className="control-single-demo">
        <label className="leaf-check">
          <Checkbox value={this.state.canOnlySelectLeaf} onChange={this.handleCheck} />
          <span className="leaf-text">Enable canOnlySelectLeaf</span>
        </label>
        <Cascader canOnlySelectLeaf={this.state.canOnlySelectLeaf} value={this.state.value} dataSource={this.state.data} onChange={this.handleChange} />
      </div>
    )
  }
}
