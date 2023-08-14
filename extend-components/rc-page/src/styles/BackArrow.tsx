import styled from 'styled-components'
import { Icon } from '@alicloud/console-components'
import { headerHeight } from './Header'

export const BackArrowIcon = styled(Icon)`
  &&& {
    display: inline-block;
    color: var(--console-page-back, #333);

    &:before {
      width: 24px;
      font-size: 24px;
      vertical-align: top;
    }
  }
`

const BackArrow = styled.span`
  display: inline-block;
  height: ${headerHeight}px;
  line-height: ${headerHeight}px;
  margin-right: 16px;
  cursor: pointer;

  a {
    &:active,
    &:hover,
    &:link,
    &:visited {
      color: inherit;
      text-decoration: none;
    }
  }
`

export default BackArrow
