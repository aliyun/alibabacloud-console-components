import React from 'react'
import { Message, Button } from '@alicloud/console-components'
import './demo7.less'

const showSuccess = () =>
  Message.success({
    title: 'success',
    duration: 3000,
  })
const showWarning = () =>
  Message.warning({
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
const showError = () => Message.error('error')
const showNotice = () => Message.notice('notice')
const showHelp = () => Message.help('help')
const showLoading = () => Message.loading('loading')

const Demo7 = () => (
  <div className="message-toast-quick-demo">
    <Button onClick={showSuccess}>success</Button>
    <Button onClick={showWarning}>warning</Button>
    <Button onClick={showError}>error</Button>
    <Button onClick={showNotice}>notice</Button>
    <Button onClick={showHelp}>help</Button>
    <Button onClick={showLoading}>loading</Button>
  </div>
)

export default Demo7
