import React from 'react'
import { Pagination } from '@alicloud/console-components'

const handlePageSizeChange = size => console.log(size)

const Demo6 = () => (
  <div>
    <h3>To hidden per page size selector</h3>
    <Pagination pageSizeSelector={false} />
    <h3>Type per page size selector of is dropdown，and as for the tail of the entire component</h3>
    <Pagination pageSizeSelector="dropdown" pageSizePosition="end" onPageSizeChange={handlePageSizeChange} />
    <h3>Filter type per page size selector, and use floating layout</h3>
    <Pagination pageSizeSelector="filter" onPageSizeChange={handlePageSizeChange} useFloatLayout />
  </div>
)

export default Demo6 