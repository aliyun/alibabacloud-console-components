/**
 * @title 自定义导航锚点
 * @description 通过 `dotsRender` 可以自定义修改dost，通过 `dotsClass` 可覆盖dots的样式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Slider
        dotsClass="dots-cust"
        dotsDirection="hoz"
        arrows={false}
        dotsRender={(index, current) => {
          console.log('current', current)
          return <a>{index}</a>
        }}
      >
        <div>
          <h3 className="h3">0</h3>
        </div>
        <div>
          <h3 className="h3">1</h3>
        </div>
        <div>
          <h3 className="h3">2</h3>
        </div>
        <div>
          <h3 className="h3">3</h3>
        </div>
        <div>
          <h3 className="h3">4</h3>
        </div>
      </Slider>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-slick .h3,
  .h4 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }

  .next-slick .h4 {
    margin-right: 5px;
    position: relative;
  }

  .dots-cust {
    color: #fff;
  }
  .dots-cust a {
    dispaly: block;
    background: rgba(200, 200, 200, 0.4);
    padding: 0 4px;
  }
  .dots-cust .active a {
    color: rgb(70, 188, 2);
  }
`
