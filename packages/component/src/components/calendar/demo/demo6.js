import React from 'react'
import { Calendar } from '@alicloud/console-components'
import moment from 'moment'

const Demo6 = () => (
  <div>
    <Calendar shape="panel" value={moment().add(1, 'days')} />
  </div>
)

export default Demo6