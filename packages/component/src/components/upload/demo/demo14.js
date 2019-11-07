import React from 'react'
import { Upload, Button, Dialog } from '@alicloud/console-components'
import Cropper from 'react-cropper'

function convertBase64UrlToFile(urlData) {
  const bytes = window.atob(urlData.split(',')[1])
  const ab = new ArrayBuffer(bytes.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  const blob = new Blob([ab], {type: 'image/png'})
  return new File([blob], 'test.png', {type: 'image/png'})
}

export default class Demo14 extends React.Component {
  constructor(props) {
    super(props)
    this.uploader = new Upload.Uploader({
      action: '//upload-server.alibaba.net/upload.do',
      onSuccess: this.onSuccess,
      name: 'file'
    })
  }

  state = {
    src: null,
    visible: false,
    img: null,
  }

  onSuccess = (value) => {
    console.log(value)
    this.setState({
      img: value.url
    })
  }

  onSelect = (files) => {
    const reader = new FileReader()
      reader.onload = () => {
        this.setState({
          src: reader.result,
          visible: true,
        })
      }
      reader.readAsDataURL(files[0])
  }

  onCancel = () => {
    this.setState({
      visible: false,
    })
  }

  onOk = () => {
    const data = this.cropperRef.getCroppedCanvas().toDataURL()
    const blob = convertBase64UrlToFile(data)
    const file = new File([blob], 'test.png', {type: 'image/png'})
        // start upload
    this.uploader.startUpload(file)
    this.setState({
      visible: false,
    })
  }

  saveCropperrRef = (ref) => {
    this.cropperRef = ref
  }

  render() {
    return (
      <div>
        <Upload.Selecter onSelect={this.onSelect}>
          <Button>Select file</Button>
        </Upload.Selecter>
        <Dialog visible={this.state.visible} onCancel={this.onCancel} onOk={this.onOk} isFullScreen>
          <Cropper
            ref={this.saveCropperrRef}
            src={this.state.src}
            style={{height: 300, width: 400}}
          />
        </Dialog>
        <div><img src={this.state.img} style={{width: 100}}/></div>
      </div>
    )
  }
}
