import React from 'react'
import { Upload, Button } from '@alicloud/console-components'

const Demo6 = () => (
  <Upload
    listType="text"
    action="//upload-server.alibaba.net/upload.do"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    data={{token: 'abcd'}}
    beforeUpload={beforeUpload}
    onChange={onChange}
    defaultValue={[{
      name: 'IMG.png',
      state: 'done',
      size: 1024,
      downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
    }]}
  >
    <Button type="primary" style={{margin: '0 0 10px'}}>Upload File</Button>
  </Upload>
)

function beforeUpload(info) {
  console.log('beforeUpload callback : ', info)
}

function onChange(info) {
  console.log('onChange callback : ', info)
}

export default Demo6