import React from 'react'
import styled from 'styled-components'
import {
  LinkButton as Button,
  LinkButtonProps,
} from '@alicloud/console-components-button'
import { expandMenuClassName, collapsedItemClassName } from './constants'

const SLinkButton = styled(Button)<{ disabled?: boolean }>`
  /* 在下拉菜单中的SLinkButton，不应该展示下划线，字体颜色也不应该是蓝色 */
  .${expandMenuClassName} .${collapsedItemClassName} & {
    color: ${({ disabled }) => (disabled ? '#c1c1c1' : '#333333')};
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
`
/**
 * @public
 */
export type ILinkButtonProps = LinkButtonProps

/**
 * @public
 */
const LinkButton: React.FC<ILinkButtonProps> = (props) => (
  <SLinkButton {...props} />
)

export default LinkButton
