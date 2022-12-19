/**
 * @title 垂直水平对齐
 * @description `justify` `align` 等价于`justify-contents` `align-items`，用来设置 `Box` 的主轴方向、垂直主轴方向的对齐方式，即：
 */

import * as React from 'react'
import styled from 'styled-components'

import { Box } from '@alicloudfe/components'

class BoxDemo extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="list-item">
          <Box direction="row" align="center" style={{ height: 90 }}>
            <Box className="box-180-50" />
            <Box className="box-180-50" />
            <Box className="box-180-50" />
            <Box className="box-180-50" />
          </Box>
        </div>
        <div className="list-item">
          <Box direction="row" justify="center">
            <Box className="box-180-50" />
            <Box className="box-180-50" />
            <Box className="box-180-50" />
            <Box className="box-180-50" />
          </Box>
        </div>

        <div className="list-item">
          <Box direction="row" justify="center" padding={20}>
            <Box className="box-180-50" />
            <Box className="box-180-50" />
            <Box className="box-180-50" />
            <Box className="box-180-50" />
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
  .box-180-50 {
    background: #5584ff;
    width: 180px;
    height: 50px;
    border: 1px solid #ddd;
  }
  .box {
    background: #5584ff;
    min-height: 100%;
  }
  .distinct {
    background: #46bc15;
  }
`
