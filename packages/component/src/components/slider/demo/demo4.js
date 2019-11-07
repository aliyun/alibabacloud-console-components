import React from 'react'
import { Slider } from '@alicloud/console-components'

const bigSlides = [
  { url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png', text: 'Tape Player Skin Design Competition' },
  { url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg', text: 'Mobile Phone Taobao Skin Call' },
  { url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg', text: 'Design Enabling Public Welfare' },
  { url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg', text: 'Amoy Doll Design Competition' },
]

const Demo4 = () => (
  <div>
    <Slider>
      {
        bigSlides.map((item, index) => <div key={index} className="slider-img-wrapper"><img src={item.url} alt={item.text} /></div>)
      }
    </Slider>
    <br />
    <Slider arrowSize="large">
      {
        bigSlides.map((item, index) => <div key={index} className="slider-img-wrapper"><img src={item.url} alt={item.text} /></div>)
      }
    </Slider>
  </div>
)

export default Demo4