import React from 'react'
import { Upload, Button } from '@alicloud/console-components'

const Demo3 = () => (
  <Upload
    listType="image"
    action="//upload-server.alibaba.net/upload.do"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    beforeUpload={beforeUpload}
    onChange={onChange}
    defaultValue={[{
      name: 'IMG.png',
      state: 'done',
      size: 100,
      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
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

export default Demo3