import React, { useState, useRef, useCallback } from 'react'
import { Overlay } from '@alicloud/console-components'
import styled from 'styled-components'

const Demo1 = () => {
  const btnRef = useRef(null)

  const [visible, setVisible] = useState(false)

  const handleClick = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  const handleClose = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <div>
      <button onClick={handleClick} ref={btnRef}>
        Toggle visible
      </button>
      <Overlay
        visible={visible}
        target={() => btnRef.current}
        safeNode={() => btnRef.current}
        onRequestClose={handleClose}
      >
        <SInner>Hello World From Overlay!</SInner>
      </Overlay>
    </div>
  )
}

const SInner = styled.span`
  width: 300px;
  height: 100px;
  padding: 10px;
  border: 1px solid #999999;
  background: #ffffff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
`

export default Demo1
