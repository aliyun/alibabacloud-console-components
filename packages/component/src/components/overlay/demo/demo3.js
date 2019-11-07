import React from 'react'
import { Overlay } from '@alicloud/console-components'

const { Popup } = Overlay

const Demo3 = () => (
  <Popup trigger={<button>Open</button>} triggerType="click">
    <span className="overlay-demo">
      Hello World From Popup!
    </span>
  </Popup>
)

export default Demo3