import React, { Component } from 'react'
import { Progress } from '@alicloud/console-components'

const Demo5 = () => (
  <div>
    <Progress percent={20} progressive />
    <Progress percent={60} progressive />
    <Progress percent={90} progressive />
  </div>
)

export default Demo5