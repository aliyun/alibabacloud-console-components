import React from 'react'
import styled from 'styled-components'
import { mainClassName, omissionClassName, baseClassName } from './constants'

const FilteredSpan: React.FC<
  { threshold: string | number; omissionByCSS: boolean } & React.HTMLProps<
    HTMLSpanElement
  >
> = ({ threshold, omissionByCSS, ...rest }) => <span {...rest} />

export const STruncateWidthContainer = styled(FilteredSpan)`
  &.${baseClassName} {
    display: inline-flex;
    max-width: ${({ threshold }) =>
      typeof threshold === 'number' ? `${threshold}px` : threshold};
    overflow: hidden;
    .${mainClassName} {
      overflow: hidden;
      white-space: nowrap;
      /* 是否通过css来渲染省略符 */
      ${({ omissionByCSS }) =>
        omissionByCSS ? 'text-overflow: ellipsis;' : ''}
    }
    .${omissionClassName} {
      flex: 0 0 auto;
    }
  }
`

export const SWrapper = styled.span`
  display: inline-block;
`
