/**
 * @title 导航箭头位置
 * @description 轮播组件的导航按钮在默认情况下为内置模式。在多图同时导航的情况下，如果想要使用外置按钮，
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Slider slidesToShow={4} arrowPosition="outer">
        <div style={{ width: '25%' }}>
          <h4 className="h4">1</h4>
        </div>
        <div style={{ width: '25%' }}>
          <h4 className="h4">2</h4>
        </div>
        <div style={{ width: '25%' }}>
          <h4 className="h4">3</h4>
        </div>
        <div style={{ width: '25%' }}>
          <h4 className="h4">4</h4>
        </div>
        <div style={{ width: '25%' }}>
          <h4 className="h4">5</h4>
        </div>
      </Slider>

      <br />

      <Slider>
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
    margin: 0 5px;
    position: relative;
  }
`
