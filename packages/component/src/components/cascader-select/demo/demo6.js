import React from 'react'
import { Checkbox, CascaderSelect } from '@alicloud/console-components'
import './demo6.less'

export default class Demo6 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: [],
      data: [],
      multiple: false
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
      multiple: !this.state.multiple,
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
      <div className="search-demo">
        <label className="multiple-check">
          <Checkbox value={this.state.multiple} onChange={this.handleCheck} />
          <span className="multiple-text">Multiple select</span>
        </label>
        <CascaderSelect 
          style={{ width: '302px' }} 
          showSearch 
          multiple={this.state.multiple} 
          value={this.state.value} 
          dataSource={this.state.data} 
          onChange={this.handleChange} />
      </div>
    )
  }
}