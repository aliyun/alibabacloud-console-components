/**
* @title customWidth
*/

import Actions, { LinkButton } from '@alicloud/console-components-actions'
import React from 'react'
import { Container } from './styles'

const Basic: React.FC<{}> = () => {
  return (
    <Container>
      <div className="block">
        <p>下拉Menu内置最大的宽度为200px：</p>
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
            释放释放释放释放释放释放释放释放释放释放释放释放释放释放释放释放释放释放
          </LinkButton>
          <LinkButton
            // disabled
            onClick={() => {
              alert('on click')
            }}
          >
            暂停暂停暂停暂停暂停暂停
          </LinkButton>
        </Actions>
      </div>
      <div className="block">
        <p>开发者可通过传入menuProps来自定义最大宽度</p>
        <Actions menuProps={{ style: { maxWidth: '600px' } }}>
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
            释放释放释放释放释放释放释放释放释放释放释放释放释放释放释放释放释放释放
          </LinkButton>
          <LinkButton
            // disabled
            onClick={() => {
              alert('on click')
            }}
          >
            暂停暂停暂停暂停暂停暂停
          </LinkButton>
        </Actions>
      </div>
    </Container>
  )
}

export default Basic
