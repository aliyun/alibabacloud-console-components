/**
 * @title 自动播放
 * @description 可以通过 `autoplay` 和 `autoplaySpeed` 属性来设置组件是否自动轮播 和 自动轮播的速度。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div style={{ width: '600px' }}>
      <Slider
        slidesToShow={4}
        arrowPosition="outer"
        lazyLoad
        dots={false}
        autoplay
        autoplaySpeed={1000}
      >
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
        <div style={{ width: '25%' }}>
          <h4 className="h4">6</h4>
        </div>
        <div style={{ width: '25%' }}>
          <h4 className="h4">7</h4>
        </div>
        <div style={{ width: '25%' }}>
          <h4 className="h4">8</h4>
        </div>
        <div style={{ width: '25%' }}>
          <h4 className="h4">9</h4>
        </div>
      </Slider>
      <br />
      <Slider speed={1000} autoplay autoplaySpeed={2000}>
        <div style={{ width: '25%' }}>
          <h4 className="h4">1</h4>
        </div>
        <div style={{ width: '25%' }}>
          <h4 className="h4">2</h4>
        </div>
        <div style={{ width: '25%' }}>
          <h4 className="h4">3</h4>
        </div>
      </Slider>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-slick .h3,
  .h4 {
    margin: 0 5px;
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`
