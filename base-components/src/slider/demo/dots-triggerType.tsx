/**
 * @title 导航锚点触发方式
 * @description 通过 `triggerType` 可以定义dots触发方式，共有两种触发方式：['click', 'hover'];
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Slider triggerType="click" arrows={false}>
        <div>
          <h3 className="h3">1</h3>
        </div>
        <div>
          <h3 className="h3">2</h3>
        </div>
        <div>
          <h3 className="h3">3</h3>
        </div>
        <div>
          <h3 className="h3">4</h3>
        </div>
      </Slider>
      <br />
      <Slider triggerType="hover" arrows={false}>
        <div>
          <h3 className="h3">1</h3>
        </div>
        <div>
          <h3 className="h3">2</h3>
        </div>
        <div>
          <h3 className="h3">3</h3>
        </div>
        <div>
          <h3 className="h3">4</h3>
        </div>
      </Slider>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-slick .h3,
  .h4 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .next-slick .h4 {
    margin-right: 5px;
    position: relative;
  }
`
