import Actions, { LinkButton } from '@alicloud/console-components-actions'
import { Button, Switch } from '@alicloud/console-components'
import React, { useState } from 'react'
import { Container } from './styles'

const CustomChildren: React.FC<{}> = () => {
  const [showEdit, setShowEdit] = useState(false)
  return (
    <Container>
      <div className="block">
        <Actions threshold={5}>
          <LinkButton>详情</LinkButton>
          <Button size="small">删除</Button>
          {showEdit && <LinkButton>编辑</LinkButton>}
          <LinkButton>释放</LinkButton>
          <LinkButton>暂停</LinkButton>
        </Actions>
      </div>
      <hr />
      <div className="block">
        展示编辑按键:
        <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          <Switch onChange={setShowEdit} size="small" />
        </span>
      </div>
    </Container>
  )
}

export default CustomChildren
