import React, { useMemo, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'

export interface ITocHeading {
  id: string
  text: string
  depth: number
}

const TOC: React.FC<{ headings: ITocHeading[] }> = ({ headings }) => {
  const activeId = useActiveHeading(headings)
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
  padding-left: ${({ depth }) => 16 + (depth - 1) * 12}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ active }) => (active ? 'font-weight: 700;' : '')}
  border-left: 2px solid ${({ active }) => (active ? '#25b864' : '#e8e8e8')};
  a {
    display: block;
    color: #1a1a1a;
    transition: color 0.3s;
    :hover {
      color: #6d6d6d;
    }
    :active {
      text-decoration: none;
    }
  }
`

interface IHeadingWithDomEl extends ITocHeading {
  el: HTMLElement
}

function useActiveHeading(headings: ITocHeading[]) {
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
    const handle = () => {
      const found = headingWithDomEl.find((heaidng, idx) => {
        const nextHeading = headingWithDomEl[idx + 1]
        if (nextHeading) {
          return (
            isHeadingScrolled(heaidng.el) && !isHeadingScrolled(nextHeading.el)
          )
        }
        return isHeadingScrolled(heaidng.el)
      })
      setActiveId(found?.id ?? '')
    }

    handle()
    window.addEventListener('resize', handle)
    window.addEventListener('scroll', handle)

    return () => {
      window.removeEventListener('resize', handle)
      window.removeEventListener('scroll', handle)
    }
  }, [headingWithDomEl])

  return activeId

  function isHeadingScrolled(el: HTMLElement) {
    var rect = el.getBoundingClientRect()
    return rect.top <= 30
  }
}
