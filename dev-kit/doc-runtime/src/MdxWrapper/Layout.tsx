import React, { useEffect, useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import isequal from 'lodash.isequal'
import TOC, { ITocHeading } from './TableOfContent'

const Layout: React.FC = ({ children }) => {
  // const { autoPadding = true, scrollContainer } = useDocMetaCtx()
  // const [padding, setPadding] = useState(0)
  // const paddingRef = useRef<HTMLDivElement | null>(null)

  const { ctnRef, headings } = useTOC()

  // useEffect(() => {
  //   if (!autoPadding) return
  //   handle()
  //   window.addEventListener('resize', handle)

  //   return () => {
  //     window.removeEventListener('resize', handle)
  //   }
  //   function handle() {
  //     setPadding(getPadding())
  //   }
  //   function getPadding() {
  //     if (!headings || headings.length === 0) return 0
  //     const last = headings[headings.length - 1]
  //     const headingEl = document && document.getElementById(last.id)
  //     if (!headingEl) return 0
  //     const { viewportHeight, contentTopPos, contentHeight } = (() => {
  //       const parent =
  //         (scrollContainer && document.querySelector(scrollContainer)) ||
  //         getScrollParent(headingEl) ||
  //         window
  //       const currentPadding = paddingRef.current?.offsetHeight ?? 0
  //       // 滚动容器是window
  //       if ('document' in parent) {
  //         return {
  //           viewportHeight: document.documentElement.clientHeight,
  //           contentTopPos: document.documentElement.getBoundingClientRect().top,
  //           contentHeight:
  //             document.documentElement.scrollHeight - currentPadding,
  //         }
  //       }
  //       return {
  //         viewportHeight: parent.clientHeight,
  //         contentTopPos: parent.getBoundingClientRect().top - parent.scrollTop,
  //         contentHeight: parent.scrollHeight - currentPadding,
  //       }
  //     })()
  //     // 最后一个heading与文档顶部之间的滚动距离
  //     const offset = headingEl.getBoundingClientRect().top - contentTopPos
  //     return viewportHeight - (contentHeight - offset)
  //   }
  // }, [headings, autoPadding, scrollContainer])

  return (
    <ScLayout>
      <ScLayoutLeft>
        <ScDocStyle className="auto-padding-container">
          <div ref={ctnRef}>{children}</div>
          {/* {autoPadding && (
            <div
              className="auto-padding"
              style={{ height: padding }}
              ref={paddingRef}
            />
          )} */}
        </ScDocStyle>
      </ScLayoutLeft>
      {headings && (
        <ScLayoutRight>
          <TOC headings={headings} />
        </ScLayoutRight>
      )}
    </ScLayout>
  )
}

export default Layout

const ScLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const ScLayoutLeft = styled.div`
  flex: 1 1 auto;
  /* https://stackoverflow.com/questions/43809612/prevent-a-child-element-from-overflowing-its-parent-in-flexbox */
  min-width: 0;
`

const ScLayoutRight = styled.div`
  width: 280px;
  flex: 0 0 auto;
  max-height: 720px;
  overflow: auto;
  margin-left: 36px;
  margin-top: 28px;
  position: sticky;
  top: 12px;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #dedede;
  }
  ::-webkit-scrollbar-thumb {
    background: #666;
  }
`

const ScDocStyle = styled.div`
  /* 字体样式参考语雀 */
  line-height: 1.74;
  font-size: 14px;
  color: #262626;
  letter-spacing: 0.03em;
  font-family: 'Chinese Quote', 'Segoe UI', Roboto, 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji';

  /* 不要在这里随便用类选择器来选择文档元素，比如选择p元素。因为你可能选中demo中的p元素。 */
  /* 请在MarkdownComponents目录中定义文档元素的样式。 */

  figcaption {
    text-align: center;
    color: gray;
  }
`

function useTOC() {
  const ctnRef = useRef<HTMLDivElement>(null)
  const [headings, setHeadings] = useState<ITocHeading[]>([])

  const check = useCallback(
    debounce(() => {
      if (!ctnRef.current) return
      const headingEls: HTMLElement[] = Array.from(
        ctnRef.current.querySelectorAll('.cc-doc-toc')
      )
      setHeadings((oldHeadings) => {
        const newHeadings = headingEls.reduce<ITocHeading[]>((acc, el) => {
          const match = /h(\d)/i.exec(el.tagName || el.nodeName)
          if (match && el.textContent && el.id) {
            acc.push({
              depth: Number(match[1]),
              id: el.id,
              text: el.textContent,
            })
          }
          return acc
        }, [])
        // 避免无限重刷
        if (isequal(newHeadings, oldHeadings)) return oldHeadings
        return newHeadings
      })
    }, 100),
    []
  )

  useEffect(() => {
    check()
  })
  // 通过MutationObserver来监听子元素的变化，调用check
  // 可能会有性能问题，暂时用useEffect
  // useEffect(() => {
  //   const observer = new MutationObserver((mutList) => {
  //     mutList.forEach((mut) => {
  //       if (mut.type === 'childList') {
  //         const needCheck = Array.from(mut.addedNodes)
  //           .concat(Array.from(mut.removedNodes))
  //           .some((node) => {
  //             if (
  //               node instanceof HTMLElement &&
  //               (node.className.includes('cc-doc-toc') ||
  //                 node.querySelector('.cc-doc-toc'))
  //             )
  //               return true
  //             return false
  //           })
  //         if (needCheck) check()
  //       }
  //     })
  //   })
  //   observer.observe(ctnRef.current!, { childList: true, subtree: true })
  //   check()
  // }, [])

  return { ctnRef, headings }
}
