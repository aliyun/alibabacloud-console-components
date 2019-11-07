import React from 'react'
import { Slider } from '@alicloud/console-components'

const settings = {
  className: 'custom-slide',
  arrowPosition: 'outer',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  onChange: function (index) {
    console.log('change Slide index', index);
  }
}

const Demo20 = () => (
  <Slider {...settings}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
    <div><h3>5</h3></div>
    <div><h3>6</h3></div>
    <div><h3>7</h3></div>
    <div><h3>8</h3></div>
    <div><h3>9</h3></div>
  </Slider>
)

export default Demo20