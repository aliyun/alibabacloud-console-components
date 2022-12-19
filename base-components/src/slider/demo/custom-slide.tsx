/**
 * @title 使用自定义组件
 * @description 你可以为传递自定义组件到 Slider 组件中。前提是该组件一定要开放透传 props 到下层组件或元素，Slider 底层需要执行元素的 clone 操作。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'
import PropTypes from 'prop-types'

const pages = [1, 2, 3, 4]

function Inner({ children, ...others }) {
  // Note that to transparently pass other attributes to the lower node, the Slider needs to perform the element's clone operation.
  return <div {...others}>{children}</div>
}

Inner.propTypes = {
  children: PropTypes.any
}

const slider = (
  <Slider>
    {pages.map((page, index) => {
      return (
        <Inner className="custom-inner" key={index}>
          custom {page}
        </Inner>
      )
    })}
  </Slider>
)

export default function DemoComponent() {
  const content = <div>{slider}</div>
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-inner {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`
