import React, { useRef } from 'react'
import { Overlay, Button } from '@alicloud/console-components'
import styled from 'styled-components'

const { Popup } = Overlay

const Demo6 = () => {
  const containerRef = useRef(null)

  return (
    <SContainer ref={containerRef}>
      <Popup
        trigger={<Button style={{ marginTop: '40px' }}>Open</Button>}
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
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.13);
`
export default Demo6
