/**
 * @title 步骤项自定义渲染
 * @description `Step.Item` 默认有三种状态，分别是 `wait`, `process`, `finish`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Step, Icon } from '@alicloudfe/components'

const steps = ['one', 'two', 'three', 'four']

function itemRender(index) {
  return (
    <div className="custom-node1">
      <span>{index + 1}</span>
    </div>
  )
}

function itemRender2(index, status) {
  return (
    <div className="custom-node2">
      {status === 'finish' ? <Icon type="success" /> : <span>{index + 1}</span>}{' '}
    </div>
  )
}

export default function DemoComponent() {
  const content = (
    <div className="fusion-demo">
      <div className="fusion-demo-item">
        <Step current={2} animation={false} itemRender={itemRender}>
          {steps.map((item) => (
            <Step.Item key={item} title={item} />
          ))}
        </Step>
      </div>

      <div className="fusion-demo-item">
        <Step current={2} animation={false} itemRender={itemRender2}>
          {steps.map((item) => (
            <Step.Item key={item} title={item} />
          ))}
        </Step>
      </div>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .fusion-demo-item {
    margin: 15px 0;
  }
  .custom-node1 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
  }
  .custom-node1 span {
    font-size: 12px;

    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
    left: 0;
    transform: translateY(-50%);
  }
  .custom-node2 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
    background: #3e71f1;
    color: #fff;
    position: relative;
  }

  .custom-node2 span,
  .custom-node2 i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    text-align: center;
  }
`
