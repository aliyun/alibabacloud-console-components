/**
 * @title 展开触发行为
 * @description 展示可通过 `expandTriggerType` 来设置不同的展开触发行为，支持 `click` 和 `hover`，默认值为`click`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio, CascaderSelect } from '@alicloudfe/components'
import 'whatwg-fetch'

const RadioGroup = Radio.Group

class Demo extends React.Component {
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
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((e) => console.log(e))
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
          <RadioGroup
            dataSource={['click', 'hover']}
            shape="button"
            value={this.state.triggerType}
            onChange={this.handleTriggerTypeChange}
          />
        </div>
        <CascaderSelect
          expandTriggerType={this.state.triggerType}
          dataSource={this.state.data}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
