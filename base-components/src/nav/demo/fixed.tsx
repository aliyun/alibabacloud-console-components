/**
 * @title fixed模式
 * @description 固定导航下的使用方式
 */

import * as React from 'react'
import styled from 'styled-components'

import { Nav } from '@alicloudfe/components'

const { Item, SubNav } = Nav

const header = <span className="fusion">FUSION</span>
const footer = (
  <a className="login-in" href="javascript:;">
    Login in
  </a>
)

export default function DemoComponent() {
  const content = (
    <div>
      请查看{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://codepen.io/aboutblank/pen/JjdNKrm"
      >
        https://codepen.io/aboutblank/pen/JjdNKrm
      </a>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
