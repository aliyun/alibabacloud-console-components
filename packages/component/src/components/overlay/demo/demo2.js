import React, { useState, useCallback, useRef } from 'react'
import { Overlay, Button } from '@alicloud/console-components'
import styled from 'styled-components'

const Demo2 = () => {
  const btnRef = useRef(null)

  const [visible, setVisible] = useState(false)

  const handleClick = useCallback(() => {
    setVisible(true)
  }, [])

  const handleClose = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <div>
      <Button onClick={handleClick} ref={btnRef}>
        Open
      </Button>
      <Overlay
        visible={visible}
        safeNode={() => btnRef.current}
        align="cc cc"
        hasMask
        disableScroll
        onRequestClose={handleClose}
      >
        <SInner>Hello World From Overlay!</SInner>
      </Overlay>
    </div>
  )
}

const SInner = styled.div`
  width: 300px;
  height: 100px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.13);
`

export default Demo2
