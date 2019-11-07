import React from 'react'
import { Upload } from '@alicloud/console-components'

const Demo5 = () => (
  <Upload.Dragger
    listType="image"
    action="//upload-server.alibaba.net/upload.do"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    onDragOver={onDragOver}
    onDrop={onDrop}
  />
)

function onDragOver() {
  console.log('dragover callback')
}

function onDrop(fileList) {
  console.log('drop callback : ', fileList)
}

export default Demo5