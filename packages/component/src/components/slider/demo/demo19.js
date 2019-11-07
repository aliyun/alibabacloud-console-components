import React from 'react'
import { Slider } from '@alicloud/console-components'
import './demo19.less'

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
    console.log('change Slide index', index);
  }
}

const Demo19 = () => (
  <div>
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6].map(function(d) {
        return <div key={d}><h3 onClick={() => console.log(d)} >{d}</h3></div>;
      })}
    </Slider>
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6].map(function(d) {
        return <div key={d}><a href={`https://www.taobao.com/?some=${d}`} target="_blank">{d}</a></div>;
      })}
    </Slider>
  </div>
)

export default Demo19 