import React, { useState, useCallback } from 'react'
import { Breadcrumb } from '@alicloud/console-components'

const Demo5 = () => {
  return (
    <Breadcrumb separator="/">
      <Breadcrumb.Item
        title="This is a long breadcrumb home"
        link="javascript:void(0);"
      >
        This is a long breadcrumb item
      </Breadcrumb.Item>
      <Breadcrumb.Item
        title="Whatever it will show there now"
        link="javascript:void(0);"
      >
        Whatever it will show there
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Demo5
