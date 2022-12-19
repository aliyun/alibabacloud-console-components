/**
 * @title 悬浮时暂停
 * @description 可以通过设置 `pauseOnHover` 属性为 `true` 使得 Slide 在鼠标悬浮时自动停止轮播。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

const settings = {
  className: 'custom-slide',
  arrowPosition: 'outer',
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
}

export default function DemoComponent() {
  const content = (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
      <div>
        <h3>9</h3>
      </div>
    </Slider>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-slide h3 {
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
