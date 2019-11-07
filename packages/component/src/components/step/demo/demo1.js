import React, { Component } from 'react'
import { Step } from '@alicloud/console-components'

const steps = ['知道自己不懂', '不知道自己懂', '知道自己懂了']
    .map((item, index) => <Step.Item key={index} title={item} />);
    
export default class StepDemo1 extends Component {

  render() {
    return (
      <div className="step-demo">
        <h3>箭头型</h3>
        <Step current={1} shape="arrow">
          {steps}
        </Step>

        <h3>圆型</h3>
        <Step current={1} shape="circle">
          {steps}
        </Step>

        <h3>圆型 (Small Size)</h3>
        <Step current={1} shape="circle" size="small">
          {steps}
        </Step>

        <h3>点型</h3>
        <Step current={1}  shape="dot">
          {steps}
        </Step>

        <h3>节点说明内容水平(labelPlacement)</h3>
        <Step current={1} shape="circle" labelPlacement="horizontal">
          {steps}
        </Step>
      </div>
    )
  }
}

