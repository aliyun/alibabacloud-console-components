/**
 * @title 导航按钮尺寸
 * @description 可以通过`arrowSize`属性来更改导航组件的按钮尺寸，默认值为`normal`，
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

const bigSlides = [
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

export default function DemoComponent() {
  const content = (
    <div>
      <Slider>
        {bigSlides.map((item, index) => (
          <div key={index} className="slider-img-wrapper">
            <img src={item.url} alt={item.text} />
          </div>
        ))}
      </Slider>

      <br />

      <Slider arrowSize="large">
        {bigSlides.map((item, index) => (
          <div key={index} className="slider-img-wrapper">
            <img src={item.url} alt={item.text} />
          </div>
        ))}
      </Slider>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .slider-img-wrapper img {
    width: 100%;
  }
`
