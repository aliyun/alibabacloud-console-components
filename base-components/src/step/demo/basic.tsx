/**
 * @title 基本用法
 * @description 在最简单的情况下，Step 有三种类型，可以通过 `shape` 属性进行切换。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Step } from '@alicloudfe/components'

const steps = [
  ['中文1', 'Open the refrigerator door'],
  ['中文2', 'Put the elephant in the refrigerator'],
  ['中文3', 'Close the refrigerator door']
].map((item, index) => (
  <Step.Item
    aria-current={index === 1 ? 'step' : null}
    key={index}
    title={item[0]}
    content={item[1]}
  />
))

export default function DemoComponent() {
  const content = (
    <div>
      <h3>Arrow</h3>
      <Step current={1} shape="arrow">
        {steps}
      </Step>

      <h3>Circle</h3>
      <Step current={1} stretch shape="circle">
        {steps}
      </Step>

      <h3>Circle(Horizontal content)</h3>
      <Step current={1} stretch shape="circle" labelPlacement="hoz">
        {steps}
      </Step>

      <h3>Dot</h3>
      <Step current={1} stretch shape="dot">
        {steps}
      </Step>
      <h3>Stretch</h3>
      <Step current={1} stretch shape="dot" labelPlacement="ver">
        <Step.Item title="步骤1" />
        <Step.Item title="步骤2" />
        <Step.Item title="步骤3" />
      </Step>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
