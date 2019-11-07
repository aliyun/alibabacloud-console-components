import React from 'react'
import { Affix, Button } from '@alicloud/console-components'
import './demo1.less'

const Demo1 =() => (
  <div className="custom-affix-wrapper">
    <Affix>
      <Button type="secondary">Affixed Button</Button>
    </Affix>
  </div>
)

export default Demo1
