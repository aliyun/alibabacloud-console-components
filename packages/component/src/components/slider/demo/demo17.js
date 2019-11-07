import React from 'react'
import { Slider } from '@alicloud/console-components'
import PropTypes from 'prop-types'
import './demo17.less'

const pages = [1, 2, 3, 4]

function Inner({ children, ...others }) {
    // Note that to transparently pass other attributes to the lower node, the Slider needs to perform the element's clone operation.
  return (
    <div {...others}>
      {children}
    </div>
  )
}

Inner.propTypes = {
  children: PropTypes.any,
}

const slider = (
  <Slider>
    {
      pages.map((page, index) => {
        return <Inner className="custom-inner" key={index}>custom {page}</Inner>;
      })
    }
  </Slider>
)

const Demo17 =() => (
  <div>
    {slider}
  </div>
)

export default Demo17