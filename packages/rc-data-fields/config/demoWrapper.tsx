import React from 'react'
import * as c from '@alicloud/console-components'

export default ({ children }: any) => {
  let content = children

  // 如果有ConfigWrapper，说明是configComponents提供的修改前缀工具
  if ((c as any).ConfigWrapper) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    content = <c.ConfigWrapper>{content}</c.ConfigWrapper>
  }
  return content
}
