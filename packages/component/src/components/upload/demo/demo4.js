import React from 'react'
import { Upload } from '@alicloud/console-components'

const Demo4 = () => ( 
  <Upload.Card
    listType="card"
    action="//upload-server.alibaba.net/upload.do"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    onPreview={onPreview}
    onChange={onChange}
    onSuccess={onSuccess}
    onError={onError}
    defaultValue={[{
      uid: '0',
      name: 'IMG.png',
      state: 'done',
      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
    }, {
      uid: '1',
      name: 'IMG.png',
      percent: 50,
      state: 'uploading',
      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
    }, {
      uid: '2',
      name: 'IMG.png',
      state: 'error',
      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
    }]}
  />
)

function onPreview(info) {
  console.log('onPreview callback : ', info)
}

function onChange(info) {
  console.log('onChange callback : ', info)
}

function onSuccess(res, file) {
  console.log('onSuccess callback : ', res, file)
}

function onError(file) {
  console.log('onError callback : ', file)
}

export default Demo4