import Actions, { LinkButton } from '@alicloud/console-components-actions'
import React from 'react'
import { Container } from './styles'

declare module 'react' {
  interface HTMLAttributes<T> {
    // extends React's HTMLAttributes
    disabled?: boolean
    visible?: boolean
  }
}

const Visible: React.FC<{}> = () => {
  return (
    <Container>
      <div className="block">
        <Actions>
          <LinkButton>详情</LinkButton>
          <LinkButton>删除</LinkButton>
          <LinkButton visible={false}>编辑</LinkButton>
          <LinkButton>释放</LinkButton>
          <LinkButton visible={false}>暂停</LinkButton>
          <LinkButton>其他</LinkButton>
        </Actions>
      </div>
    </Container>
  )
}

export default Visible
