import React from 'react'
import * as c from '@alicloud/console-components'
import { useTheme } from '../demos/utils/theme-switcher'

export default ({ children }: any) => {
  let content = children
  // 在开发环境下，展示主题切换
  const theme = useTheme()
  content = (
    <div className="switch-theme">
      主题切换：{theme.switchUI}
      <hr style={{ margin: '8px 0' }} />
      <div style={{ position: 'relative' }}>
        <theme.current.wrapper>{children}</theme.current.wrapper>
      </div>
    </div>
  )

  // 如果有ConfigWrapper，说明是configComponents提供的修改前缀工具
  if ((c as any).ConfigWrapper) {
    // @ts-ignore
    content = <c.ConfigWrapper>{content}</c.ConfigWrapper>
  }
  return content
}
