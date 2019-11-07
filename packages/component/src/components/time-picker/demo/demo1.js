import React from 'react'
import { TimePicker } from '@alicloud/console-components'

const Demo1 = () => (
	<TimePicker onChange={(val) => console.log(val)} />
)

export default Demo1