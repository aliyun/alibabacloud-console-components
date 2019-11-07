import React from 'react'
import { Range } from '@alicloud/console-components'

const style = {
  marginBottom: '40px',
  marginTop: '40px'
}

const Demo3 = () => (
  <div style={{width: '400px', margin: '50px'}}>
    <p>Rnage 0 ~ 1024</p>
    <Range defaultValue={128} min={0} max={1024} marks={[0, 1024]} style={style} />
    <p>Range 0 ~ 1024，step 128</p>
    <Range defaultValue={512} min={0} max={1024} step={128} marks={[0, 1024]}
      style={style} />
  </div>
)

export default Demo3