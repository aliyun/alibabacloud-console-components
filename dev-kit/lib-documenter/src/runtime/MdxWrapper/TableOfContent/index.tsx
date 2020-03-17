import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDocMetaCtx } from '../../utils/context'
import getScrollParent from '../../utils/getScrollParent'

export interface ITocHeading {
  id: string
  text: string
  depth: number
}

const TOC: React.FC = () => {
  const { tocHeadings: headings, scrollContainer } = useDocMetaCtx()
  const activeId = useActiveHeading(headings, scrollContainer)
  return (
    <ScList>
      {headings.map(heading => {
        return (
          <ScListItem
            depth={heading.depth}
            active={heading.id === activeId}
            key={heading.id}
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </ScListItem>
        )
      })}
    </ScList>
  )
}

export default TOC

const ScList = styled.ol`
  margin-left: 36px;
  margin-top: 28px;
  position: sticky;
  line-height: 24px;
  top: 12px;
`

const ScListItem = styled(
  ({ depth: number, active: boolean, ...restProps }) => <li {...restProps} />
)`
  && {
    padding-left: ${({ depth }) => 16 + (depth - 1) * 12}px;
    ${({ active }) => (active ? 'font-weight: 700;' : '')}
    border-left: 2px solid ${({ active }) => (active ? '#25b864' : '#e8e8e8')};
    a {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #1a1a1a;
      transition: color 0.3s;
      :hover {
        color: #6d6d6d;
      }
      :active {
        text-decoration: none;
      }
    }
  }
`

interface IHeadingWithDomEl extends ITocHeading {
  el: HTMLElement
}

function useActiveHeading(
  headings: ITocHeading[],
  scrollContainer: string | undefined
) {
  const [headingWithDomEl, setHeadingWithDomEl] = useState<
    Array<IHeadingWithDomEl>
  >([])

  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    setHeadingWithDomEl(
      headings
        .map(heading => {
          const el = document.getElementById(heading.id)
          if (!el) return (null as unknown) as IHeadingWithDomEl
          return { el, ...heading }
        })
        .filter(Boolean)
    )
  }, [headings])

  useEffect(() => {
    const scrollContainerEl: Element | Window =
      (scrollContainer && document.querySelector(scrollContainer)) ||
      getScrollParent(headingWithDomEl[0]?.el) ||
      window

    const handle = () => {
      if (!headingWithDomEl.length) return
      const scrollParent = scrollContainerEl
      const found = headingWithDomEl.find((heaidng, idx) => {
        // 如果第一个heading都还没有滚动过去，那么高亮第一个heading
        if (idx === 0 && !isHeadingScrolled(heaidng.el, scrollParent))
          return true
        const nextHeading = headingWithDomEl[idx + 1]
        if (nextHeading) {
          return (
            isHeadingScrolled(heaidng.el, scrollParent) &&
            !isHeadingScrolled(nextHeading.el, scrollParent)
          )
        }
        return isHeadingScrolled(heaidng.el, scrollParent)
      })
      setActiveId(found?.id ?? '')
    }

    handle()

    scrollContainerEl.addEventListener('resize', handle)
    scrollContainerEl.addEventListener('scroll', handle)

    return () => {
      scrollContainerEl.removeEventListener('resize', handle)
      scrollContainerEl.removeEventListener('scroll', handle)
    }
  }, [headingWithDomEl, scrollContainer])

  return activeId

  function isHeadingScrolled(el: HTMLElement, scrollParent: Element | Window) {
    if ('document' in scrollParent) {
      return el.getBoundingClientRect().top <= 30
    }
    return (
      el.getBoundingClientRect().top -
        scrollParent.getBoundingClientRect().top <=
      30
    )
  }
}
