import React from 'react'
import { Loading } from '@alicloud/console-components'
import './demo1.less'

const Demo1 = () => (
  <Loading tip="loading...">
    <div className="demo">test</div>
  </Loading>
)

export default Demo1