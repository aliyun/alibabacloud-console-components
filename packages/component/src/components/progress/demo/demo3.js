import React from 'react'
import { Progress } from '@alicloud/console-components'

const Demo3 = () => (
  <div>
    <Progress percent={30} size="small" />
    <Progress percent={50} size="medium" />
    <Progress percent={90} size="large" />
    <br />
    <Progress percent={30} size="small" shape="circle" /> &nbsp;&nbsp;
    <Progress percent={50} size="medium" shape="circle" /> &nbsp;&nbsp;
    <Progress percent={90} size="large" shape="circle" />
  </div>
)

export default Demo3