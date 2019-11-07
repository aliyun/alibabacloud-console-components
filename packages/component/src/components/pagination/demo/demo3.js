import React from 'react'
import { Pagination } from '@alicloud/console-components'

const Demo3 = () => (
  <div>
    <h3>small</h3>
    <Pagination defaultCurrent={2} size="small" />
    <h3>medium</h3>
    <Pagination defaultCurrent={2} size="medium" />
    <h3>large</h3>
    <Pagination defaultCurrent={2} size="large" />
  </div>
)

export default Demo3