import React from 'react'
import { Overlay } from '@alicloud/console-components'

const { Popup } = Overlay

const Demo5 = () => (
  <Popup trigger={<button>Open first overlay</button>}
    triggerType="click">
    <div className="overlay-demo">
      <Popup trigger={<button>Open second overlay</button>}
        triggerType="click"
        container={trigger => trigger.parentNode}>
        <div className="overlay-demo">
          <p>Hello World From Second Overlay!</p>
        </div>
      </Popup>
      <p>Hello World From First Overlay!</p>
    </div>
  </Popup>
)

export default Demo5