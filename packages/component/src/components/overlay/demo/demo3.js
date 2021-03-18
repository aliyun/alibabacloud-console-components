import React from 'react'
import { Overlay, Button } from '@alicloud/console-components'
import styled from 'styled-components'

const { Popup } = Overlay

const Demo3 = () => (
  <Popup trigger={<Button>Open</Button>} triggerType="click">
    <SInner>Hello World From Popup!</SInner>
  </Popup>
)

const SInner = styled.div`
  width: 300px;
  height: 100px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.13);
`

export default Demo3
