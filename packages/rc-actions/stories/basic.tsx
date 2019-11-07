import Actions, { LinkButton } from '@alicloud/console-components-actions'
import React from 'react'
import { Container } from './styles'

const Basic: React.FC<{}> = () => {
  return (
    <Container>
      <div className="block">
        <p>不建议把a元素当作button使用：</p>
        <Actions>
          <a
            href="#"
            onClick={() => {
              alert('on click')
            }}
          >
            详情
          </a>
          <a href="#">删除</a>
          <a href="#">编辑</a>
          <a href="#">释放</a>
          <a href="#">暂停</a>
        </Actions>
      </div>
      <div className="block">
        <p>建议使用LinkButton：</p>
        <Actions>
          <LinkButton
            onClick={() => {
              alert('on click')
            }}
          >
            详情
          </LinkButton>
          <LinkButton
            disabled
            onClick={() => {
              alert('on click')
            }}
          >
            删除
          </LinkButton>
          <LinkButton>编辑</LinkButton>
          <LinkButton
            onClick={() => {
              alert('on click')
            }}
          >
            释放
          </LinkButton>
          <LinkButton
            disabled
            onClick={() => {
              alert('on click')
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
