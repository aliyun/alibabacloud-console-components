/**
 * @title 多图轮播
 * @description 在单图轮播的基础上，通过指定`slidesToShow`属性值，可以同时进行多图轮播。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
  <div style={{ width: '25%' }} key={item}>
    <h4 className="h4">{item}</h4>
  </div>
))

export default function DemoComponent() {
  const content = (
    <div style={{ width: '600px' }}>
      <div className="demo-item-title">slide one picture one at a time</div>
      <Slider slidesToShow={4} arrowPosition="outer" dots={false} lazyLoad>
        {slides}
      </Slider>

      <div className="demo-item-title">
        slide multiple picture one at a time
      </div>
      <Slider
        slidesToShow={4}
        slidesToScroll={4}
        arrowPosition="outer"
        lazyLoad
        dots={false}
      >
        {slides}
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

  .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 20px 0 10px 0;
  }
`
