/**
 * @title ActiveIndex
 * @description 通过 `index` 属性可以快速的定位到指定次序的 slider 。
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

class SlickGoTo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0 // The initial value here need to be set to 0 for `activeIndex`. If you want the initial as 0 , you can use the `defaultActiveIndex` property to set.
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    this.setState({
      index: parseInt(e.target.value)
    })
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      activeIndex: this.state.index
    }
    return (
      <div>
        <div className="demo-item-title">Pull the scroll bar to switch:</div>
        <input
          onChange={this.changeHandler}
          defaultValue={0}
          type="range"
          min={0}
          max={3}
        />
        <Slider {...settings}>
          {slides.map((item, index) => (
            <div key={index} className="slider-img-wrapper">
              <img src={item.url} alt={item.text} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <SlickGoTo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .slider-img-wrapper img {
    width: 100%;
  }

  .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 20px 0 10px 0;
  }
`
