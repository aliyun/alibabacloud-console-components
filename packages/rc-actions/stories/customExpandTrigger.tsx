import Actions, {
  LinkMore,
  LinkButton,
} from '@alicloud/console-components-actions'
import React from 'react'
import { Button } from '@alicloud/console-components'
import { Container } from './styles'

const Basic: React.FC<{}> = () => {
  return (
    <Container>
      <div className="block">
        <Actions
          expandTrigger={
            <LinkButton
              onClick={() => {
                console.log('click')
              }}
            >
              <Button size="small">更多</Button>
            </LinkButton>
          }
        >
          <LinkButton>详情</LinkButton>
          <LinkButton>删除</LinkButton>
          <LinkButton>编辑</LinkButton>
          <LinkButton>释放</LinkButton>
          <LinkButton>暂停</LinkButton>
        </Actions>
      </div>
      <div className="block">
        <Actions expandTrigger={<LinkMore>更多</LinkMore>}>
          <LinkButton>详情</LinkButton>
          <LinkButton>删除</LinkButton>
          <LinkButton>编辑</LinkButton>
          <LinkButton>释放</LinkButton>
          <LinkButton
            onClick={() => {
              console.log('click')
            }}
          >
            暂停
          </LinkButton>
        </Actions>
      </div>
    </Container>
  )
}

export default Basic
