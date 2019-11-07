import React from 'react'
import { Range } from '@alicloud/console-components'

const style = {
  marginBottom: '15px'
}

const Demo7 = () => (
  <div style={{width: '400px', margin: '50px'}}>
    <Range defaultValue={30} style={style} hasTip={false} />
    <Range defaultValue={30} style={style} reverse hasTip={false} />
    <Range slider={'double'} defaultValue={[20, 40]} style={style} />
    <Range slider={'double'} defaultValue={[20, 40]} style={style} reverse />
    <Range defaultValue={30} disabled style={style} />
    <Range defaultValue={30} disabled style={style} reverse />
    <Range slider={'double'} defaultValue={[20, 40]} disabled style={style} />
    <Range slider={'double'} defaultValue={[20, 40]} disabled style={style} reverse />
  </div>
)

export default Demo7