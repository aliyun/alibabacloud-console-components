/**
 * @title 基本示例
 */

import React, { useState } from 'react'
import { Button } from '@alicloud/console-components'
import SlidePanel from '@alicloud/console-components-slide-panel'

const SlidePanelDemo: React.FC<{}> = () => {
  const [active, setActive] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setActive(true)
        }}
      >
        open
      </Button>

      <SlidePanel
        top={50}
        title="title"
        isShowing={active}
        width="medium"
        onMaskClick={() => {
          setActive(false)
        }}
        onSlideCompleted={() => {
          console.log('completed')
        }}
        onClose={() => {
          setActive(false)
        }}
        onCancel={() => {
          setActive(false)
        }}
        onOk={() => {
          setIsProcessing(true)
          setTimeout(() => {
            setIsProcessing(false)
          }, 2000)
        }}
        isProcessing={isProcessing}
      >
        content
      </SlidePanel>
    </>
  )
}

export default SlidePanelDemo
