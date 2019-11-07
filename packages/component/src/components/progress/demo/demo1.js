import React, { Component } from 'react'
import { Progress } from '@alicloud/console-components'

const Demo1 = () => (
	<div>
    <Progress percent={30} textRender={() => false} />
    <Progress percent={50} />
    <Progress percent={90} />
    <Progress percent={40} />
    <Progress percent={40} hasBorder size="large" />
  </div>
)

export default Demo1