/**
 * @title 步骤运行错误
 * @description 可通过自定义 step item 来实现当前步骤的状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Step, Box, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Step current={1}>
        <Step.Item title="Step 1" />
        <Step.Item
          title={<span style={{ color: 'red' }}>In Progress</span>}
          content={<span style={{ color: 'red' }}>download image failed</span>}
          itemRender={(index, status) => {
            return (
              <div>
                <Icon type="error" size="xl" style={{ color: '#FF3333' }} />
              </div>
            )
          }}
        />
        <Step.Item title="Step 3" />
        <Step.Item title="Step 4" />
      </Step>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
