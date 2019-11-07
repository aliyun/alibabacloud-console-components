import React from 'react'
import { Switch } from '@alicloud/console-components'

const onChange = checked => {
  console.log('switch to ' + checked)
}

const Demo1 = () => (
  <div>
    <p>基本模式</p>
    <Switch
      defaultChecked={true}
      onChange={onChange}
      checkedChildren="on"
      unCheckedChildren="off"
    />
    &nbsp;&nbsp;
    <Switch defaultChecked={true} onChange={onChange} />
    &nbsp;&nbsp;
    <Switch onChange={onChange} size="small" />
    <br />
    <br />
    <p>不可操作模式</p>
    <Switch
      defaultChecked={true}
      onChange={onChange}
      checkedChildren="on"
      unCheckedChildren="off"
      disabled
    />
    &nbsp;&nbsp;
    <Switch
      onChange={onChange}
      checkedChildren="on"
      unCheckedChildren="off"
      disabled
    />
  </div>
)

export default Demo1
