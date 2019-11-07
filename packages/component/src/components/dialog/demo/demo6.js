import React from 'react'
import { Button, Dialog } from '@alicloud/console-components'

const popupAlert = () => {
  Dialog.alert({
    title: 'Alert',
    content: 'alert content alert content...',
    onOk: () => console.log('ok')
  })
}

const popupConfirm = () => {
  Dialog.confirm({
    title: 'Confirm',
    content: 'confirm content confirm content...',
    onOk: () => console.log('ok'),
    onCancel: () => console.log('cancel')
  })
}

const popupCustom = () => {
  const dialog = Dialog.show({
    title: 'Custom',
    content: 'custom content custom content...',
    footer: (
      <Button warning type="primary" onClick={() => dialog.hide()}>
        Custom button
      </Button>
    )
  })
}

const Demo6 = () => (
  <span>
    <Button onClick={popupAlert}>Alert</Button> &nbsp;
    <Button onClick={popupConfirm}>Confirm</Button> &nbsp;
    <Button onClick={popupCustom}>Custom</Button>
  </span>
)

export default Demo6