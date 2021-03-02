import React, { useState, useRef } from 'react'
import { Button } from '@alicloud/console-components'
import SlidePanel from '@alicloud/console-components-slide-panel'

const SlidePanelDemo: React.FC<{}> = () => {
  const [active, setActive] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const ref = useRef(null)
  return (
    <div ref={ref}>
      {/* SlidePanel将被渲染到这个div里面 */}
      <Button
        onClick={() => {
          setActive(true)
        }}
      >
        open
      </Button>
      <SlidePanel
        title="指定渲染的容器container"
        isShowing={active}
        onMaskClick={() => {
          setActive(false)
        }}
        container={ref.current}
        hasMask
        width="medium"
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
        指定渲染的容器节点
      </SlidePanel>
    </div>
  )
}

export default SlidePanelDemo
