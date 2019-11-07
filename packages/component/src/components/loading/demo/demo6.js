import React from 'react'
import { Loading } from '@alicloud/console-components'

const Demo6 = () => (
  <div>
    <Loading tip="normal(size default large)" >
      <div className="demo">test</div>
    </Loading>
    <Loading tip="large" size="large">
      <div className="demo">test</div>
    </Loading>
    <Loading tip="medium" size="medium">
      <div className="demo">test</div>
    </Loading>
  </div>
)

export default Demo6