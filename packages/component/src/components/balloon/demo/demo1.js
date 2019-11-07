import React from 'react'
import { Button, Balloon } from '@alicloud/console-components'

const defaultTrigger = <Button className="btrigger" style={{margin: '5px'}}>default style</Button>
const primary = <Button className="btrigger" style={{margin: '5px'}}>primary style</Button>

const Demo1 = () => (
  <div className="container">
    <Balloon  trigger={defaultTrigger} closable={false}>
      default
    </Balloon>
    <Balloon type="primary" trigger={primary}  triggerType="click">
      primary
    </Balloon>
  </div>
)

export default Demo1
