import React, { useState, useRef } from 'react'
import { Button } from '@alicloud/console-components'
import SlidePanel from '@alicloud/console-components-slide-panel'
import styled from 'styled-components'

const SlidePanelDemo: React.FC<{}> = () => {
  const [active, setActive] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const ref = useRef(null)
  return (
    <>
      <SContainer ref={ref}>SlidePanel将被渲染到这个标签里面</SContainer>
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
    </>
  )
}

const SContainer = styled.div`
  height: 100px;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  line-height: 25px;
  align-items: center;
`

export default SlidePanelDemo
