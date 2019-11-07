import React from 'react'
import { Loading } from '@alicloud/console-components'
import './demo2.less'

const indicator1 = (
  <div className="load-container load1">
    <div className="loader">loading...</div>
  </div>
)

const indicator7 = (
  <div className="load-container load7">
    <div className="loader">loading...</div>
  </div>
)

const Demo2 = () => (
  <div>
    <Loading tip="default animation">
      <div className="demo">test</div>
    </Loading>
    <Loading indicator={indicator1}>
      <div className="demo">test</div>
    </Loading>
    <Loading indicator={indicator7}>
      <div className="demo">test</div>
    </Loading>
  </div>
)

export default Demo2