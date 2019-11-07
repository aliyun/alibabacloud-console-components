import React from 'react'
import { Pagination } from '@alicloud/console-components'

const total = 50

const Demo7 = () => (
  <Pagination className="custom-pagination" total={total} totalRender={total => `Total: ${total}`} />
)

export default Demo7