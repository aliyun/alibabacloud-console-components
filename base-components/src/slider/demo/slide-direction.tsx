/**
 * @title 垂直滑动
 * @description 轮播组件可以通过 `slideDirection` 属性设置两种轮播方向。当值为 `ver` 时轮播方向为垂直方向，
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div style={{ width: '200px' }}>
      <div className="demo-item-title">Vertical multi-picture mode</div>
      <Slider
        slideDirection="ver"
        slidesToShow={3}
        slidesToScroll={1}
        dots={false}
        arrowPosition="inner"
        arrowDirection="ver"
        className="ver-slick"
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="custom-slider"
            style={{ border: '1px solid transparent' }}
          >
            <h3 className="h3">{item}</h3>
          </div>
        ))}
      </Slider>

      <div className="demo-item-title">Vertical single-picture mode</div>
      <Slider
        slideDirection="ver"
        dots={false}
        arrowPosition="inner"
        arrowDirection="ver"
        className="ver-slick"
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="custom-slider">
            <h3 className="h3">{item}</h3>
          </div>
        ))}
      </Slider>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .ver-slick .h3 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 20px 0 10px 0;
  }
`
