import React from 'react'
import { Pagination } from '@alicloud/console-components'

const change = function(value) {
  console.log(value)
}

const Demo1 = () => (
  <Pagination defaultCurrent={2} onChange={change} />
)

export default Demo1
