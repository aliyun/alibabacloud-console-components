import React from 'react'
import * as c from '@alicloud/console-components'

export default ({ children }: any) => {
  let content = children

  // 如果有ConfigWrapper，说明是configComponents提供的修改前缀工具
  if ((c as any).ConfigWrapper) {
    // @ts-ignore
    content = <c.ConfigWrapper>{content}</c.ConfigWrapper>
  }
  // 避免宽度太小
  return <div style={{ minWidth: 1000 }}>{content}</div>
}
