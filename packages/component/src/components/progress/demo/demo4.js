import React from 'react'
import { Progress } from '@alicloud/console-components'
import './demo4.less'
const Demo4 = () => (
  <div className="">
    <Progress percent={20} shape="circle" state="normal" className="custom-progress" />
    <Progress percent={95} shape="circle" state="success" className="custom-progress" />
    <Progress percent={95} shape="circle" state="error" className="custom-progress" />
  </div>
)

export default Demo4