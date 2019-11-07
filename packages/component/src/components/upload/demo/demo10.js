import React from 'react'
import { Upload, Dialog, Button } from '@alicloud/console-components'

const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        if (img.width <= 1200) {
          resolve()
        } else {
          Dialog.alert({
            content: `Image width ${img.width}px, Exceed limits！`,
            closable: false,
            title: 'Warning'
          })
          reject()
        }
      }
      img.src = reader.result;
    }
    reader.readAsDataURL(file)
  })
}

const Demo10 =() => (
  <Upload
    action="//upload-server.alibaba.net/upload.do"
    limit={3}
    multiple
    beforeUpload={beforeUpload}
    listType="text"
    defaultValue={[{
      name: 'IMG.png',
      state: 'done',
      size: 1024,
      downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
    }]}
  >
    <Button type="primary" style={{margin: '0 0 10px'}}>Upload file</Button>
  </Upload>
)

export default Demo10