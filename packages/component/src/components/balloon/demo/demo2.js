import React from 'react'
import { Button, Balloon } from '@alicloud/console-components'

const content = (<div><p>content</p></div>)
const MoveTarget = <Button style={{margin: '5px'}}>hover</Button>
const ClickTarget = <Button style={{margin: '5px'}}>click</Button>
const FocusTarget = <Button style={{margin: '5px'}}>focus</Button>

const Demo2 = () => (
  <div>
    <Balloon trigger={MoveTarget} triggerType="hover">
      {content}
    </Balloon>

    <Balloon trigger={ClickTarget} triggerType="click">
      {content}
    </Balloon>

    <Balloon trigger={FocusTarget} triggerType="focus">
      {content}
    </Balloon>
  </div>
)

export default Demo2
