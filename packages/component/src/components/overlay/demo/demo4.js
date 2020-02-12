import React, { useState, useCallback } from 'react'
import { Overlay } from '@alicloud/console-components'
import styled from 'styled-components'

const { Popup } = Overlay

const Demo4 = () => {
  const [visible, setVisible] = useState(false)

  const onVisibleChange = useCallback(vis => {
    setVisible(vis)
  }, [])

  return (
    <Popup
      trigger={<button>Open</button>}
      triggerType="click"
      visible={visible}
      onVisibleChange={onVisibleChange}
    >
      <SInner>Hello World From Popup!</SInner>
    </Popup>
  )
}

const SInner = styled.div`
  width: 300px;
  height: 100px;
  padding: 10px;
  border: 1px solid #999999;
  background: #ffffff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
`

export default Demo4
