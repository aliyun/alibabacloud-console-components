import React from 'react'
import { Affix, Button } from '@alicloud/console-components'
import './demo2.less'

const Demo2 = () => (
  <div className="custom-affix-wrapper">
    <Affix offsetBottom={0}>
      <Button type="secondary">Affixed Button</Button>
    </Affix>
  </div>
) 

export default Demo2