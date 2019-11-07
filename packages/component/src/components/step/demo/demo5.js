import React, { Component } from 'react'
import { Step, Icon } from '@alicloud/console-components'
import './demo5.less'

const steps = ['one', 'two', 'three', 'four'];

const itemRender = (index, status) => (<div className="custom-node1"><span>{index + 1}</span></div>)

const itemRender2 = (index, status) => (<div className="custom-node2">{status === 'finish' ? <Icon type="success" /> : <span>{index + 1}</span>} </div>)

export default class StepDemo5 extends Component {
  render() {
    return (
      <div>
        <Step current={2} animation={false} itemRender={itemRender}>
          {
            steps.map(item => <Step.Item key={item} title={item} />)
          }
        </Step>
        <br /><br />
        <Step current={2} animation={false} itemRender={itemRender2}>
          {
            steps.map(item => <Step.Item key={item} title={item}  />)
          }
        </Step>
      </div>
    )
  }
}

