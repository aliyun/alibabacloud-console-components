import Badge from '@alifd/next/lib/badge'
import styled from 'styled-components'
import { primaryColor } from './constants'
import { IBalloonProps } from './badge-balloon'

interface IBadge {
  offset: number[]
  prefix: string
}

const scaleStyle = 'scale(0.7)'

export const SBadge = styled(Badge)<IBalloonProps & IBadge>`
  &.badge-custom-balloon {
    .${getPrefix}badge-custom {
      background-color: ${primaryColor};
      position: absolute;
      color: #fff;
      overflow: visible;
      padding: 2px 4px;
      font-size: 12px;
      text-align: center;
      &:after {
        content: '';
        position: absolute;
      }
    }
  }
  &.badge-balloon-top {
    .${getPrefix}badge-custom {
      top: ${({ offset }) => `${-22 + offset[1]}px`};
      right: ${({ offset }) => `${-offset[0] - 5}px`};
      transform: translateX(50%) ${scaleStyle};
      bottom: auto;
      left: auto;
      &:after {
        border-bottom: none;
        border-right: 7px solid transparent;
        border-left: 7px solid transparent;
        border-top: 10px solid ${primaryColor};
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%) ${scaleStyle};
      }
    }
  }
  &.badge-balloon-right {
    .${getPrefix}badge-custom {
      top: ${({ offset }) => `calc(50% + ${offset[1]}px)`};
      transform: translateY(-50%) ${scaleStyle};
      right: ${({ offset, type }) => `${getExactBaseRight(type) - offset[0]}px`};
      left: auto;
      bottom: auto;
      &:after {
        border-left: none;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 10px solid ${primaryColor};
        top: 50%;
        left: -8px;
        transform: translateY(-50%) ${scaleStyle};
      }
    }
  }
`

function getPrefix({ prefix }: { prefix: string }): string {
  return prefix
}

function getExactBaseRight(type: IBalloonProps['type']): number {
	return type === 'new' ? -45 : -40
}