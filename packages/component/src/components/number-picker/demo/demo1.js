import React from 'react'
import { NumberPicker} from '@alicloud/console-components'

function onChange(value, e) {
    console.log(value, e.type, e.triggerType)
}

const Demo1 = () => (
  <div>
    <NumberPicker onChange={onChange}/>
    <br/><br/>
    <NumberPicker type="inline" onChange={onChange}/>
  </div>
)

export default Demo1
