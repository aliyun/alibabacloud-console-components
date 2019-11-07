import React from 'react'
import { Slider } from '@alicloud/console-components'
import './demo1.less'

const slides = [
  { url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png', text: 'Tape Player Skin Design Competition' },
  { url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg', text: 'Mobile Phone Taobao Skin Call' },
  { url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg', text: 'Design Enabling Public Welfare' },
  { url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg', text: 'Amoy Doll Design Competition' },
]

const itemNodes = slides.map((item, index) => <div key={index} className="slider-img-wrapper"><img src={item.url} alt={item.text} /></div>)

const Demo1 = () => (
  <Slider>{itemNodes}</Slider>
)

export default Demo1