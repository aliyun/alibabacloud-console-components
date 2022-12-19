/**
 * @title Fade
 * @description 切换跑马灯时使用渐变效果。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

const settings = {
  arrowPosition: 'outer',
  dots: false,
  animation: 'fade',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'custom-slide',
  onChange: function (index) {
    console.log('change Slide index', index)
  }
}

export default function DemoComponent() {
  const content = (
    <div>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map(function (d) {
          return (
            <div key={d}>
              <h3 onClick={() => console.log(d)}>{d}</h3>
            </div>
          )
        })}
      </Slider>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map(function (d) {
          return (
            <div key={d}>
              <a href={`https://www.taobao.com/?some=${d}`} target="_blank">
                {d}
              </a>
            </div>
          )
        })}
      </Slider>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-slide h3,
  .custom-slide a {
    display: block;
    background: #4f74b3;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
`
