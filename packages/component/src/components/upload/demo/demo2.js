import React from 'react'
import { Upload, Button } from '@alicloud/console-components'

const defaultValue = [{
  name: 'IMG.png',
  state: 'done',
  size: 1024,
  downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
  fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
  url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
}]

const Demo2 = () => (
  <Upload
    action="//upload-server.alibaba.net/upload.do"
    beforeUpload={beforeUpload}
    onChange={onChange}
    onSuccess={onSuccess}
    listType="text"
    defaultValue={defaultValue}
  >
    <Button type="primary" style={{margin: '0 0 10px'}}>Upload File</Button>
  </Upload>
)

function beforeUpload(info) {
  console.log('beforeUpload : ', info)
}

function onChange(info) {
  console.log('onChange : ', info)
}

function onSuccess(info) {
  console.log('onSuccess : ', info)
}

export default Demo2