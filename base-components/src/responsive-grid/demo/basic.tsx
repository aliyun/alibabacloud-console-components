/**
 * @title 基本
 * @description 简单的栅格布局展示，Fusion Next推荐以PC为主要开发场景，自适配平板、手机端。默认使用12栅格布局。
 */

import * as React from 'react'
import styled from 'styled-components'

import { ResponsiveGrid, Radio } from '@alicloudfe/components'

const { Cell } = ResponsiveGrid

const ds = ['desktop', 'tablet', 'phone']

class Demo extends React.Component {
  state = {
    device: 'desktop'
  }
  onChange = (device) => {
    this.setState({
      device
    })
  }
  render() {
    const { device } = this.state
    return (
      <div className="list">
        <Radio.Group
          shape="button"
          onChange={this.onChange}
          dataSource={ds}
          defaultValue="desktop"
        />
        <br />
        <br />
        <div className={`list-item ${device}`}>
          <ResponsiveGrid gap={10} device={device}>
            <Cell className="mygrid grid-12" colSpan={12}>
              12
            </Cell>
            <Cell className="mygrid grid-6" colSpan={6}>
              6
            </Cell>
            <Cell className="mygrid grid-6" colSpan={6}>
              6
            </Cell>
            <Cell className="mygrid grid-4" colSpan={4}>
              4
            </Cell>
            <Cell className="mygrid grid-4" colSpan={4}>
              4
            </Cell>
            <Cell className="mygrid grid-4" colSpan={4}>
              4
            </Cell>
            <Cell className="mygrid grid-3" colSpan={3}>
              3
            </Cell>
            <Cell className="mygrid grid-3" colSpan={3}>
              3
            </Cell>
            <Cell className="mygrid grid-3" colSpan={3}>
              3
            </Cell>
            <Cell className="mygrid grid-3" colSpan={3}>
              3
            </Cell>
          </ResponsiveGrid>
        </div>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .phone {
    width: 30%;
  }
  .tablet {
    width: 60%;
  }
  .child {
    width: 100%;
    height: 100%;
    background: 'red';
  }
  .mygrid {
    display: block;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .grid-12 {
    background: rgba(59, 154, 255, 0.25);
  }
  .grid-6 {
    background: rgba(59, 154, 255, 1);
  }
  .grid-4 {
    background: rgba(59, 154, 255, 0.25);
  }
  .grid-3 {
    background: rgba(59, 154, 255, 1);
  }
`
