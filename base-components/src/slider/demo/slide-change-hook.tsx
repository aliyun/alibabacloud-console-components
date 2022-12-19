/**
 * @title onChange 钩子
 * @description 你可以利用 `onChange` 钩子函数处理一些额外的逻辑。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

const settings = {
  className: 'custom-slide',
  arrowPosition: 'outer',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  onChange: function (index) {
    console.log('change Slide index', index)
  }
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
