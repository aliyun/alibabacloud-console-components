/**
 * @title 文件夹上传
 * @description 支持上传一个文件夹里的所有文件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button, Icon } from '@alicloudfe/components'

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
      onChange={onChange}
      onSuccess={onSuccess}
      listType="text"
      webkitdirectory
    >
      <Button type="primary" style={{ margin: '0 0 10px' }}>
        <Icon type="upload" />
        Upload Directory
      </Button>
    </Upload>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
