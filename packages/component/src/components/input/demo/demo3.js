import React from 'react'
import { Input, Icon } from '@alicloud/console-components'

const onChange = (v) => {
  console.log(v)
}

const onBlur = (e) => {
  console.log(e)
}

const Demo3 = () => (
  <div>
  <Icon type="atm" />
    <Input addonTextBefore="http://" addonTextAfter=".com" defaultValue="alibaba" maxLength={2} hasLimitHint />
    <br/>
    <br/>
    <Input defaultValue="clear by click" hasClear onChange={onChange} onBlur={onBlur}/>
    <br/><br/>
    <Input defaultValue="clear by click" hasClear onChange={onChange} onBlur={onBlur} hint="calendar"/>
    <br/><br/>
    
    <Input trim  onChange={onChange} placeholder="cant not input space" />
  </div>
)

export default Demo3
