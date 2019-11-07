import React, { Component } from 'react'
import { Step, Icon } from '@alicloud/console-components'
     
export default class StepDemo3 extends Component {
  
  render() {
    return (
      <div>
        <Step current={1} animation={false} shape="dot">
          <Step.Item title="步骤1" content="知道自己不懂" icon="set" />
          <Step.Item title="步骤2" content="不知道自己懂" percent={40}/>
          <Step.Item title="步骤3" content="知道自己懂了" icon="smile" />
        </Step>
        <br />
        <br />
        <Step current={1} animation={false}>
          <Step.Item title="步骤1" content="知道自己不懂" icon="set" />
          <Step.Item title="步骤2" content="不知道自己懂" percent={50}/>
          <Step.Item title="步骤3" content="知道自己懂了" icon="smile" />
        </Step>
      </div>
    )
  }
}

