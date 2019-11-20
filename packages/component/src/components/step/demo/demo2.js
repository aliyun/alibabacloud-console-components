import React, { Component } from 'react'
import { Step } from '@alicloud/console-components'

const steps = [
  { title: '步骤1', content: '知道自己不懂' },
  { title: '步骤2', content: '不知道自己懂' },
  { title: '步骤3', content: '知道自己懂了' },
].map((item, index) => (
  <Step.Item key={index} title={item.title} content={item.content} />
))

export default class StepDemo2 extends Component {
  render() {
    return (
      <div className="step-demo">
        <h3>圆型</h3>
        <Step current={2} direction="ver" shape="circle" animation={false}>
          {steps}
        </Step>
        <br />
        <br />
        <h3>圆型 (Small Size)</h3>
        <Step
          current={2}
          direction="ver"
          shape="circle"
          animation={false}
          size="small"
        >
          {steps}
        </Step>
        <br />
        <br />
        <h3>点型</h3>
        <Step current={1} direction="ver" shape="dot" animation={false}>
          {steps}
        </Step>
      </div>
    )
  }
}
