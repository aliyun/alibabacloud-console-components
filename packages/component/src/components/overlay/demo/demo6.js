import React, { useRef } from 'react'
import { Overlay } from '@alicloud/console-components'
import styled from 'styled-components'

const { Popup } = Overlay

const Demo6 = () => {
  const containerRef = useRef(null)

  return (
    <SContainer ref={containerRef}>
      <Popup
        trigger={<button style={{ marginTop: '40px' }}>Open</button>}
        triggerType="click"
        container={trigger => trigger.parentNode}
        target={containerRef.current}
        align="tl br"
      >
        <SInner>Hello World From Popup!</SInner>
      </Popup>
      <div style={{ height: '300px' }} />
    </SContainer>
  )
}

const SContainer = styled.div`
  position: relative;
  height: 150px;
  padding: 10px;
  border: 1px solid #999999;
  overflow: auto;
`
const SInner = styled.div`
  width: 300px;
  height: 100px;
  padding: 10px;
  border: 1px solid #999999;
  background: #ffffff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
`
export default Demo6
