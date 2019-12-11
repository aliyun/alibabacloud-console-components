import React from 'react'
import { Input } from '@alicloud/console-components'

const Demo2 = () => (
  <div>
    <Input state="error" placeholder="error" />
    <br />
    <br />
    <Input state="error" maxLength={100} hasLimitHint placeholder="error" />
    <br />
    <br />
    <Input state="success" value="success" />
    <br />
    <br />
    <Input state="success" maxLength={100} hasLimitHint placeholder="success" />
    <br />
    <br />
    <Input state="loading" placeholder="loading" />
  </div>
)

export default Demo2

export const demoMeta = {
  zhName: '状态',
  zhDesc: '展示input的各种状态、success、error、loading等',
}
