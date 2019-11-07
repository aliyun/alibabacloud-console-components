import React, { Component } from 'react'
import { Progress, Icon } from '@alicloud/console-components'

const Demo2 = () => (
	<div>
    <Progress percent={30} shape="circle" /> &nbsp;&nbsp;
    <Progress percent={50} shape="circle" /> &nbsp;&nbsp;
    <Progress percent={80} shape="circle" textRender={() => false}/>&nbsp;&nbsp;
    <Progress percent={100} shape="circle" textRender={() => <Icon type="select" size="xl" />} />
  </div>
)

export default Demo2

