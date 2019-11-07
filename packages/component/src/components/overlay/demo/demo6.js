import React from 'react'
import { Overlay } from '@alicloud/console-components'
import './demo6.less'

const { Popup } = Overlay

const Demo6 = () => (
  <div className="scroll-container">
    <Popup trigger={<button>Open</button>}
      triggerType="click"
      container={trigger => trigger.parentNode}>
      <div className="overlay-demo">
        Hello World From Popup!
      </div>
    </Popup>
    <div style={{ height: '300px' }} />
  </div>
)

export default Demo6