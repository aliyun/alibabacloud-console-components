import React from 'react'
import { Upload, Button } from '@alicloud/console-components'

const Demo9 = () => (
  <Upload
    action="//upload-server.alibaba.net/upload.do"
    limit={3}
    multiple
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
    <Button type="primary" style={{margin: '0 0 10px'}}>Upload File</Button>
  </Upload>
)

export default Demo9