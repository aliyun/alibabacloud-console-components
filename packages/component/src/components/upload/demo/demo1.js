import React from 'react'
import { Upload, Button, Icon } from '@alicloud/console-components'

const Demo1 = () =>(
  <div>
    <Upload
      action="//upload-server.alibaba.net/upload.do"
      beforeUpload={beforeUpload}
      onChange={onChange}
      onSuccess={onSuccess}
      multiple
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
    <br/>
    <Upload shape="card" style={{display: 'inline-block'}}>
      Upload File
    </Upload>
    <Upload style={{display: 'inline', marginLeft: '5px'}}>
      <div className="next-upload-card">
        <Icon type="attachment" size="large"/>
        <div className="next-upload-text">
          Attachment
        </div>
      </div>
    </Upload>
  </div>
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

export default Demo1