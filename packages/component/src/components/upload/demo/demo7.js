import React from 'react'
import { Upload, Button } from '@alicloud/console-components'

export default class Demo7 extends React.Component {
  saveUploaderRef = (ref) => {
    this.uploaderRef = ref && ref.getInstance()
  }

  onSubmit = () => {
    this.uploaderRef && this.uploaderRef.startUpload()
  }

  componentWillUnmount() {
    this.uploaderRef = null
  }

  render() {
    return (
      <div>
        <Upload
          action="//upload-server.alibaba.net/upload.do"
          autoUpload={false}
          ref={this.saveUploaderRef}
          listType="text"
        >
          <Button>Upload</Button>
        </Upload>
        <br />
        <Button type="primary" onClick={this.onSubmit}>Submit</Button>
      </div>
    )
  }
}
