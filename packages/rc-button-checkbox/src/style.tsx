import styled from 'styled-components'
import { Button } from '@alicloud/console-components'

const sizeMap = {
	'large': '36px',
	'medium': '32px',
	'small': '24px',
}

const textPadding = {
	'large': '0 24px',
	'medium': '0 16px',
	'small': '0 8px',
}

export const SButton = styled(Button)`
  &&&&& {
    transition: all 0ms;
    border: 1px solid #dedede;
    background: #fff;
    margin: 0 0 0 -1px;
    &:first-child {
      margin-left: 0;
    }
    &.normal {
      position: relative;
      &.selected {
        z-index: 2;
        border: 1px solid #0070cc;
        color: #0070cc;
        &:hover {
          border: 1px solid #0070cc;
          z-index: 2;
        }
      }
      &:hover {
        z-index: 1;
        color: #0070cc;
        border: 1px solid #dedede;
      }
    }
    &.text {
			height: ${({ size = 'medium' }) => sizeMap[size]};
      border: 1px solid transparent;
			padding: ${({ size = 'medium' }) => textPadding[size]};
      &:hover {
        color: ${({ disabled }) => (disabled ? '#c1c1c1' : '#0070cc')};
      }
      &.selected {
        border: 1px solid #0070cc;
        color: #0070cc;
        z-index: 1;
      }
    }
  }
`

export const SGroup = styled.div``
