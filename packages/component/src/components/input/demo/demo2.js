import React from 'react'
import { Input } from '@alicloud/console-components'

const onChange = (v) => {
  console.log(v)
}

const Demo2 = () => (
  <div>
    <h6>密码输入框</h6>
    <Input htmlType="password" defaultValue="whoami"/>
    <h6>文本输入框</h6>
    <Input.TextArea maxLength={100} placeholder="TextArea" hasLimitHint/>
    <h6>各种状态输入框 </h6>
    <Input state="error" placeholder="error"/>
    <br/><br/>
    <Input state="error" maxLength={100} hasLimitHint placeholder="error"/>
    <br/>
    <br/>
    <Input state="success" value="success"/><br/><br/>
    <Input state="success" maxLength={100} hasLimitHint placeholder="success"/>
    <br/>
    <br/>
    <Input state="loading" placeholder="loading"/>
  </div>
)

export default Demo2
