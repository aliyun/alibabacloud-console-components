/**
 * @title 禁用步骤项
 * @description 可以通过在 `Step.Item` 上设置 `disabled` 属性来禁用某个步骤。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Step } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Step current={1} shape="arrow">
        <Step.Item title="Step 1" />
        <Step.Item title="Step 2" />
        <Step.Item title="Step 3" disabled />
        <Step.Item title="Step 4" />
      </Step>
      <br />
      <br />
      <Step current={1} shape="dot">
        <Step.Item title="Step 1" />
        <Step.Item title="Step 2" />
        <Step.Item title="Step 3" disabled />
        <Step.Item title="Step 4" />
      </Step>
      <br />
      <br />
      <Step current={1} shape="circle">
        <Step.Item title="Step 1" />
        <Step.Item title="Step 2" />
        <Step.Item title="Step 3" disabled />
        <Step.Item title="Step 4" />
      </Step>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
