import React from 'react'
import { Upload, Button } from '@alicloud/console-components'

const Demo12 = () => ([
  <Upload
    listType="text"
    action="//upload-server.alibaba.net/upload1.do"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    beforeUpload={beforeUpload}
    onChange={onChange}
    key="1"
  >
    <Button type="primary" style={{margin: '0 0 10px'}}>Upload File</Button>
  </Upload>,
  <Upload
    listType="text"
    action="//upload-server.alibaba.net/upload1.do"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    beforeUpload={asyncBeforeUpload}
    onChange={onChange}
    key="2"
  >
    <Button type="secondary" style={{margin: '0 0 10px'}}>Async Call before Upload File</Button>
  </Upload>,
  <Upload
    listType="text"
    action="//upload-server.alibaba.net/upload.do"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    beforeUpload={() => false}
    onChange={onChange}
    key="3"
  >
    <Button type="normal" style={{margin: '0 0 10px'}}>Prevent Upload</Button>
  </Upload>,
  <Upload
    listType="text"
    action="//upload-server.alibaba.net/upload.do"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    beforeUpload={() => new Promise(resl => setTimeout(() => resl(false)))}
    onChange={onChange}
    key="4"
  >
    <Button type="primary" style={{margin: '0 0 10px'}}>Async Prevent Upload</Button>
  </Upload>,
  <Upload
    listType="text"
    action="//upload-server.alibaba.net/upload.do"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    beforeUpload={() => {}}
    onChange={onChange}
    key="5"
  >
    <Button type="secondary" style={{margin: '0 0 10px'}}>Do nothing</Button>
  </Upload>
])

const requestOpts = {
  action: '//upload-server.alibaba.net/upload.do',
  data: {osstoken: 1234},
  headers: {'X-Requested-With': 12345},
}

async function ajax() {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(requestOpts)
    }, 1e3)
  })
}

function beforeUpload(info, options) {
  console.log('beforeUpload callback : ', info, options)
  return requestOpts
}

async function asyncBeforeUpload(info, options) {
  console.log('beforeUpload callback : ', info, options)
  return await ajax()
}

function onChange(info) {
  console.log('onChange callback : ', info)
}

export default Demo12