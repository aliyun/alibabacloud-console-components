import React from 'react'
import { Overlay } from '@alicloud/console-components'
import styled from 'styled-components'

const { Popup } = Overlay

const Demo3 = () => (
  <Popup trigger={<button>Open</button>} triggerType="click">
    <SInner>Hello World From Popup!</SInner>
  </Popup>
)

const SInner = styled.div`
  width: 300px;
  height: 100px;
  padding: 10px;
  border: 1px solid #999999;
  background: #ffffff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
`

export default Demo3
