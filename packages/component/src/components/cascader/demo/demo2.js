import React from 'react'
import { Radio, Cascader } from '@alicloud/console-components'
import './demo2.less'

const RadioGroup = Radio.Group

export default class Demo2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      triggerType: 'click',
      data: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleTriggerTypeChange = this.handleTriggerTypeChange.bind(this)
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
    .then(response => response.json())
    .then(data => this.setState({ data }))
    .catch(e => console.log(e))
  }

  handleChange(value, data, extra) {
    console.log(value, data, extra)
  }

  handleTriggerTypeChange(triggerType) {
    this.setState({
      triggerType
    })
  }

  render() {
    return (
      <div>
        <div className="trigger-check">
          Expand trigger type:
          <RadioGroup dataSource={['click', 'hover']} value={this.state.triggerType} onChange={this.handleTriggerTypeChange} />
        </div>
        <Cascader expandTriggerType={this.state.triggerType} dataSource={this.state.data} onChange={this.handleChange} />
      </div>
    )
  }
}

