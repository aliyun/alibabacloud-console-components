/**
 * @title 基本
 * @description 简单的弹性布局展示，可以通过 `spacing` 控制子元素的间距。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Box } from '@alicloudfe/components'

class BoxDemo extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="list-item">
          <Box spacing={20}>
            <div className="border-box height-30" />
            <div className="border-box height-30" />
            <div className="border-box height-30" />
            <div className="border-box height-30" />
          </Box>
        </div>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <BoxDemo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .child {
    width: 100%;
    height: 100%;
    background: 'red';
  }
  .border-box {
    background: #5584ff;
  }
  .height-30 {
    height: 30px;
  }
`
