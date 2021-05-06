/**
* @title fragment
*/

import Actions, { LinkButton } from '@alicloud/console-components-actions'
import React from 'react'
import { Container } from './styles'

const Fragment: React.FC<{}> = () => {
  return (
    <Container>
      <p>Actions中的React.Fragment会被拍平, 就像将数组作为子元素一样</p>
      <div className="block">
        <Actions>
          <React.Fragment>
            <LinkButton>详情</LinkButton>
            <LinkButton>删除</LinkButton>
            {[
              <LinkButton key={1}>编辑</LinkButton>,
              <LinkButton key={2}>释放</LinkButton>,
              <LinkButton key={3}>暂停</LinkButton>,
            ]}
          </React.Fragment>
        </Actions>
      </div>
      <p className="block">效果等价于：</p>
      <div className="block">
        <Actions>
          <LinkButton>详情</LinkButton>
          <LinkButton>删除</LinkButton>
          <LinkButton>编辑</LinkButton>
          <LinkButton>释放</LinkButton>
          <LinkButton>暂停</LinkButton>
        </Actions>
      </div>
    </Container>
  )
}

export default Fragment
