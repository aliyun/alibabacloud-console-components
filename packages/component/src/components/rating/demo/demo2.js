import React from 'react'
import { Rating } from '@alicloud/console-components'

const Demo2 = () => (
  <div>
    <Rating defaultValue={3.2} size="small" />
    <br/>
    <br/>
    <Rating defaultValue={3.2} />
    <br/>
    <br/>
    <Rating defaultValue={3.2} size="large" />
  </div>
)

export default Demo2