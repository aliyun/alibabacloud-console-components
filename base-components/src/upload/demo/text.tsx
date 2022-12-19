/**
 * @title 文字列表
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button } from '@alicloudfe/components'

const defaultValue = [
  {
    uid: '0',
    name: 'IMG.png',
    state: 'done',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    size: 2000
  },
  {
    uid: '1',
    name: 'IMG.png',
    percent: 50,
    state: 'uploading',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
  },
  {
    uid: '2',
    name: 'IMG.png',
    state: 'error',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    errorMsg: 'fail to upload something'
  },
  {
    uid: '3',
    name: 'IMG.png',
    state: 'error',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL:
      'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
  }
]

function beforeUpload(info) {
  console.log('beforeUpload : ', info)
}

function onChange(info) {
  console.log('onChange : ', info)
}

function onSuccess(info) {
  console.log('onSuccess : ', info)
}
export default function DemoComponent() {
  const content = (
    <Upload
      action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
      beforeUpload={beforeUpload}
      onChange={onChange}
      onSuccess={onSuccess}
      listType="text"
      defaultValue={defaultValue}
    >
      <Button type="primary" style={{ margin: '0 0 10px' }}>
        Upload File
      </Button>
    </Upload>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
