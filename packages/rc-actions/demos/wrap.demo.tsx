/**
* @title wrap
*/

import Actions, { LinkButton } from '@alicloud/console-components-actions'
import { Switch } from '@alicloud/console-components'
import React, { useState } from 'react'
import { Container } from './styles'

const Basic: React.FC<{}> = () => {
  const [wrap, setWrap] = useState(true)
  return (
    <Container>
      <div className="block" style={{ width: '160px' }}>
        <Actions wrap={wrap} threshold={10}>
          <LinkButton>编辑</LinkButton>
          <LinkButton>添加权限</LinkButton>
          <LinkButton>添加组成员</LinkButton>
          <LinkButton>删除</LinkButton>
          <LinkButton>释放释放</LinkButton>
          <LinkButton>暂停暂停</LinkButton>
        </Actions>
      </div>
      <hr />
      <div className="block">
        是否允许换行:
        <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          <Switch checked={wrap} onChange={setWrap} size="small" />
        </span>
      </div>
    </Container>
  )
}

export default Basic
