import React from 'react'
import { Upload, Input } from '@alicloud/console-components'

export default class Demo8 extends React.Component {
  onPaste = (e) => {
    e.preventDefault()
    const files = e.clipboardData.files
    files.length && this.uploaderRef && this.uploaderRef.selectFiles(files)
  }

  saveUploaderRef = (ref) => {
    this.uploaderRef = ref && ref.getInstance()
  }

  onChange = (value) => {
    console.log(value)
  }

  componentWillUnmount() {
    this.uploaderRef = null
  }

  render() {
    return (
      <div>
        <Input.TextArea style={{width: '100%', marginBottom: 10}} autoHeight={{minRows: 4}} onPaste={this.onPaste} />
        <Upload
          action="//upload-server.alibaba.net/upload.do"
          listType="image"
          onChange={this.onChange}
          ref={this.saveUploaderRef}
        />
      </div>
    )
  }
}