import React from 'react'
import { Overlay } from '@alicloud/console-components'
import styled from 'styled-components'

const { Popup } = Overlay

const Demo5 = () => (
  <Popup trigger={<button>Open first overlay</button>} triggerType="click">
    <SInner>
      <Popup
        trigger={<button>Open second overlay</button>}
        triggerType="click"
        container={trigger => trigger.parentNode}
      >
        <SInner>
          <p>Hello World From Second Overlay!</p>
        </SInner>
      </Popup>
      <p>Hello World From First Overlay!</p>
    </SInner>
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

export default Demo5
