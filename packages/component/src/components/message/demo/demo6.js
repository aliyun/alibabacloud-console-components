import React from 'react'
import { Message, Button } from '@alicloud/console-components'

const show = () => {
  Message.show({
    type: 'loading',
    title: <div>This is title</div>,
    content: (
      <div>
        <p>
          Will be closed after 3 seconds or manually click on the close button
        </p>
        <p>
          Will be closed after 3 seconds or manually click on the close button
        </p>
        <p>
          Will be closed after 3 seconds or manually click on the close button
        </p>
      </div>
    ),
    duration: 3000,
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
