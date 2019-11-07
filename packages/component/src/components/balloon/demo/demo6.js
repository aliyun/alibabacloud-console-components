import React from 'react'
import { Button, Balloon, DatePicker } from '@alicloud/console-components'
import moment from 'moment'
import './demo6.less'

const primary = <Button className="btrigger">primary</Button>
const innerButton = <Button className="btrigger">innerButton</Button>
const dateValue = moment('2018-01-01', 'YYYY-MM-DD', true)

const Demo6 = () => (
  <div className="container nested">
    <Balloon type="primary" trigger={primary} closable={false} triggerType="click">
      <DatePicker defaultValue={dateValue} container={
        (trigger) => trigger.parentNode
      } />
    </Balloon>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Balloon type="primary"  trigger={innerButton} closable={false} triggerType="click">
      <Balloon trigger={<Button type="primary">please click</Button>} container={(trigger) => trigger.parentNode} triggerType="click">
        nesting balloon content
      </Balloon>
    </Balloon>
  </div>
)

export default Demo6
