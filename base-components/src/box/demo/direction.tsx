/**
 * @title 排布方向
 * @description 默认子元素的排布方向为 `column` ， 可以通过 `direction` 参数修改为 `row`。
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
            <div className="box height-30" />
            <div className="box height-30" />
            <div className="box height-30" />
            <div className="box height-30" />
          </Box>
        </div>

        <div className="list-item">
          <Box spacing={20} direction="row">
            <div className="box width-30 height-30" />
            <div className="box width-30 height-30" />
            <div className="box width-30 height-30" />
            <div className="box width-30 height-30" />
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
    min-height: 30px;
  }
  .box {
    background: #5584ff;
  }

  .height-30 {
    height: 30px;
  }

  .width-30 {
    width: 30px;
  }
`
