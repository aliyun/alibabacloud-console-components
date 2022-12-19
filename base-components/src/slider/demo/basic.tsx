/**
 * @title 基本
 * @description 轮播组件共有两种类型：单图轮播和多图同时轮播。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

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

const itemNodes = slides.map((item, index) => (
  <div key={index} className="slider-img-wrapper">
    <img draggable={false} src={item.url} alt={item.text} />
  </div>
))

export default function DemoComponent() {
  const content = <Slider>{itemNodes}</Slider>
  return <Style>{content}</Style>
}
const Style = styled.div`
  .slider-img-wrapper img {
    width: 100%;
  }
`
