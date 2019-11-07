import React from 'react'
import Info from '@alicloud/console-components-info'

const Demo: React.FC<{}> = () => {
  return (
    <>
      <Info title="自动用<Content>包裹每个子元素" extra="Little Finger">
        <span>11111111111111111</span>
        <span>22222222222222222</span>
        <span>33333333333333333</span>
      </Info>
      <Info title="React.Fragment整体被当做一个子元素" extra="Little Finger">
        some text.
        <>
          <span>11111111111111111</span>
          <span>22222222222222222</span>
          <span>33333333333333333</span>
        </>
        some text.
      </Info>
      <Info title="每个数组项都会被当做一个子元素" extra="Little Finger">
        some text.
        {[
          <span>11111111111111111</span>,
          <span>22222222222222222</span>,
          <span>33333333333333333</span>,
        ]}
        some text.
      </Info>
    </>
  )
}

export default Demo
