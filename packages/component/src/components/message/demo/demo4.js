import React from 'react'
import { Message } from '@alicloud/console-components'

const onClose = () => console.log('onClose triggered!')
const afterClose = () => console.log('afterClose triggered!')

const Demo4 = () => (
  <div>
    <Message title="title" closeable onClose={onClose} afterClose={afterClose}>
      Content Content Content Content
    </Message>
  </div>
)

export default Demo4