import React from 'react'
import { NumberPicker } from '@alicloud/console-components'

function onChange(value, e) {
  console.log(value, e)
}

function onCorrect(obj) {
  console.log(obj)
}

const Demo3 = () =>(
  <div>
    <NumberPicker type="inline" step={3} min={6} max={30} defaultValue={6}
      onChange={onChange} onCorrect={onCorrect}/>
  </div>
)

export default Demo3