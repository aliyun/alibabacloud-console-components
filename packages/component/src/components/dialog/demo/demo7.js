import React from 'react'
import { Button, Dialog, Message } from '@alicloud/console-components'


const popupConfirm = () => {
  Dialog.confirm({
    title: 'Confirm',
    content: 'Do you confirm deleting this content?',
    onOk: () => {
      return new Promise(resolve => {
        setTimeout(resolve, 2000);
      }).then(() => {
        Message.success('Deleted successfully!');
      })
    }
  })
}

const Demo7 = () => (
  <Button type="primary" warning onClick={popupConfirm}>Delete</Button>
)

export default Demo7