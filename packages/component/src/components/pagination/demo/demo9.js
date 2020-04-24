import React, { useState, useCallback } from 'react'
import { Pagination, Select } from '@alicloud/console-components'

const { Option } = Select

const Demo9 = () => {
  const [pageSize, setPageSize] = useState(10)

  const handleChange = useCallback(value => {
    console.log('pageSize:', value)
    setPageSize(value)
  }, [])

  return (
    <>
      <div style={{ marginBottom: '16px' }}>
        <span>设置pageSize：</span>
        <Select value={pageSize} onChange={handleChange}>
          <Option value={10}>每页10条</Option>
          <Option value={20}>每页20条</Option>
          <Option value={50}>每页50条</Option>
          <Option value={100}>每页100条</Option>
        </Select>
      </div>
      <Pagination
        defaultCurrent={2}
        pageSizeSelector="dropdown"
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        pageSizeList={[10, 20, 50, 100]}
      />
    </>
  )
}

export default Demo9

export const demoMeta = {
  zhName: '设置`pageSizeSelector`的值',
  zhDesc: `pageSizeSelector的值完全受pageSize的控制，如刷新页面之后pageSizeSelector的值发生改变，请确认pageSize是否改变`,
}
