import React, { useEffect, useState, useRef } from 'react'
import TOC from './TableOfContent'
import styled from 'styled-components'
import { useDocMetaCtx } from '../utils/context'

const Layout: React.FC = ({ children }) => {
  const { tocHeadings: headings, autoPadding = true } = useDocMetaCtx()
  const [padding, setPadding] = useState(0)
  const paddingRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!autoPadding) return
    handle()
    window.addEventListener('resize', handle)
    return () => {
      window.removeEventListener('resize', handle)
    }
    function handle() {
      setPadding(getPadding())
    }
    function getPadding() {
      if (!headings || headings.length == 0) return 0
      const last = headings[headings.length - 1]
      const headingEl = document && document.getElementById(last.id)
      if (!headingEl) return 0
      const parent = headingEl.offsetParent
      if (!parent) return 0
      // 最后一个heading与滚动顶部之间的滚动距离
      const offset = headingEl.offsetTop
      const viewportHeight = parent.clientHeight
      const currentPadding = paddingRef.current?.offsetHeight ?? 0
      // 假设当前没有auto-padding，滚动容器的滚动高度是多少
      const parentHeight = parent.scrollHeight - currentPadding
      return offset + viewportHeight - parentHeight
    }
  }, [headings, autoPadding])

  return (
    <ScLayout>
      <ScLayoutLeft>
        <div className="auto-padding-container">
          {children}
          {autoPadding && (
            <div
              className="auto-padding"
              style={{ height: padding }}
              ref={paddingRef}
            />
          )}
        </div>
      </ScLayoutLeft>
      {headings && (
        <ScLayoutRight>
          <TOC />
        </ScLayoutRight>
      )}
    </ScLayout>
  )
}

export default Layout

const ScLayout = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
`

const ScLayoutLeft = styled.div`
  flex: 1 1 auto;
`

const ScLayoutRight = styled.div`
  width: 330px;
  flex: 0 0 auto;
`
