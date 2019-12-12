import React from 'react'
import { Message, Button } from '@alicloud/console-components'

const show = () => {
  Message.show({
    type: 'loading',
    content:
      'Will be closed after 3 seconds or manually click on the close button',
    afterClose: () => console.log('Closed the toast'),
  })
}
const hide = () => Message.hide()

const Demo6 = () => (
  <div className="message-toast-demo">
    <Button onClick={show}>Show</Button>
    <Button onClick={hide}>Hide</Button>
  </div>
)

export default Demo6
