import React from 'react'
import { Loading } from '@alicloud/console-components'

const Demo5 = () => (
  <div>
    <Loading tip="default">
      <div className="demo">test</div>
    </Loading>
    <Loading tip="right" tipAlign="right">
      <div className="demo">test</div>
    </Loading>
    <Loading tip="bottom" tipAlign="bottom">
      <div className="demo">test</div>
    </Loading>
  </div>
)

export default Demo5