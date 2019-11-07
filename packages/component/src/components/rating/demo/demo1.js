import React from 'react'
import { Rating } from '@alicloud/console-components'

const Demo1 = () => (
  <div>
    <Rating defaultValue={3.2} onChange={val => console.log(val)} />
  </div>
)

export default Demo1