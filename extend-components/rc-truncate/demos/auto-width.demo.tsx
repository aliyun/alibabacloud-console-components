/**
* @title auto-width
*/

import React, { useState } from 'react'
import Truncate from '@alicloud/console-components-truncate'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

const sentence =
  '改变窗口的大小，我只会在宽度不足的时候截断。宽度足够的时候我不会截断！'

const Demo = () => {
  const [isOverflow, setIsOverflow] = useState(false)
  return (
    <div className="truncate-demo">
      <FakeBrowser>
        <Truncate
          type="width"
          threshold="auto"
          align="b"
          style={{ width: '100%' }}
          isOverflowChange={newIsOverflow => {
            console.log('isOverflowChange', newIsOverflow)
            setIsOverflow(newIsOverflow)
          }}
        >
          {sentence}
        </Truncate>
        <p>isOverflow: {isOverflow ? 'true' : 'false'}</p>
      </FakeBrowser>
    </div>
  )
}
export default Demo
