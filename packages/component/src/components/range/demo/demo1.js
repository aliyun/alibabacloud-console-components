import React from 'react'
import { Range } from '@alicloud/console-components'

const style = {
  marginBottom: '15px'
}

const Demo1= () => (
  <div style={{width: '400px', margin: '50px'}}>
    <h4>single slider - from left to right</h4>
    <Range defaultValue={30} style={style} hasTip={false} />
    <h4>single slider - from right to left</h4>
    <Range defaultValue={30} style={style} reverse hasTip={false} />
    <h4>double slider - from outside to inside</h4>
    <Range slider={'double'} defaultValue={[20, 40]} style={style} />
    <h4>double slider - from inside to outside</h4>
    <Range slider={'double'} defaultValue={[20, 40]} style={style} reverse />
    <h4>Disabled</h4>
    <Range defaultValue={30} disabled style={style} />
    <h4>Disabled</h4>
    <Range slider={'double'} defaultValue={[20, 40]} disabled style={style} />
  </div>
)

export default Demo1