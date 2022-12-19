/**
 * @title 自定义导航箭头
 * @description 开发者可以通过 `prevArrow` 和 `nextArrow` 两个属性传入自定义的导航箭头组件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider, Icon } from '@alicloudfe/components'

const slides = [
  {
    url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
    text: 'Tape Player Skin Design Competition'
  },
  {
    url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
    text: 'Mobile Phone Taobao Skin Call'
  },
  {
    url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
    text: 'Design Enabling Public Welfare'
  },
  {
    url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
    text: 'Amoy Doll Design Competition'
  }
]

const arrowStyle = {
  display: 'block',
  background: 'red',
  opacity: 1,
  margin: '0 20px'
}

const CustomNextArrow = (props) => {
  return (
    <div {...props} style={arrowStyle}>
      <Icon type="arrow-double-right" />
    </div>
  )
}

const CustomPrevArrow = (props) => {
  return (
    <div {...props} style={arrowStyle}>
      <Icon type="arrow-double-left" />
    </div>
  )
}

export default function DemoComponent() {
  const content = (
    <Slider
      nextArrow={<CustomNextArrow />}
      prevArrow={<CustomPrevArrow />}
      lazyLoad
    >
      {slides.map((item, index) => (
        <div key={index} className="slider-img-wrapper">
          <img src={item.url} alt={item.text} />
        </div>
      ))}
    </Slider>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .slider-img-wrapper img {
    width: 100%;
  }
`
