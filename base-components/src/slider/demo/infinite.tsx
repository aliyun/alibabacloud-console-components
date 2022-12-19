/**
 * @title 禁止循环
 * @description 默认情况下，轮播组件的表现为无穷循环模式。如果你不想无穷循环，
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Slider
        slidesToShow={4}
        arrowPosition="outer"
        infinite={false}
        dots={false}
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
      </Slider>

      <br />

      <Slider infinite={false} lazyLoad>
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
