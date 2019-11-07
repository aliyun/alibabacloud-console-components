import React from 'react'
import { Pagination } from '@alicloud/console-components'

const Demo4 = () => (
  <div> 
    <h3>normal</h3>
    <Pagination defaultCurrent={2} />
    <h3>simple</h3>
    <Pagination defaultCurrent={2} type="simple" />
    <h3>mini</h3>
    <Pagination defaultCurrent={2} type="mini" />
  </div>
)

export default Demo4