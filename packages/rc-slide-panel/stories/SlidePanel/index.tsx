import React, { useState } from 'react'
import { Button } from '@alicloud/console-components'
import SlidePanel from '@alicloud/console-components-slide-panel'
import { useTextSetter, useBoolSetter, useTextAreaSetter } from '../utils'

const SlidePanelDemo: React.FC<{}> = () => {
  const [active, setActive] = useState(false)
  const [onClose, , onCloseSetterUI] = useBoolSetter('onClose', true)
  const [title, , titleSetterUI] = useTextSetter('title', 'title')
  const [content, , contentSetterUI] = useTextAreaSetter('content', 'content')
  const [onCancel, , onCancelSetterUI] = useBoolSetter('onCancel', true)
  const [onOk, , onOkSetterUI] = useBoolSetter('onOk', true)
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

      {titleSetterUI}
      {contentSetterUI}
      {onCloseSetterUI}
      {onCancelSetterUI}
      {onOkSetterUI}

      <SlidePanel
        top={50}
        title={title}
        isShowing={active}
        width="medium"
        onMaskClick={() => {
          setActive(false)
        }}
        onSlideCompleted={() => {
          console.log('completed')
        }}
        hasMask
        onClose={
          onClose
            ? () => {
                setActive(false)
              }
            : undefined
        }
        onCancel={
          onCancel
            ? () => {
                setActive(false)
              }
            : undefined
        }
        onOk={
          onOk
            ? () => {
                setIsProcessing(true)
                setTimeout(() => {
                  setIsProcessing(false)
                }, 2000)
              }
            : undefined
        }
        isProcessing={isProcessing}
      >
        {content}
      </SlidePanel>
    </>
  )
}

export default SlidePanelDemo
