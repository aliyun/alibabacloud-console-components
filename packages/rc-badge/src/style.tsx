import Overlay from '@alifd/next/lib/overlay'
import styled from 'styled-components'
import { primaryColor } from './constants'

const { Popup } = Overlay

const scaleStyle = 'scale(0.7)'

export const SPopup = styled(Popup)``

export const SInner = styled.div`
  background-color: ${primaryColor};
  color: #fff;
  padding: 2px 4px;
  font-size: 12px;
  transform: ${scaleStyle};
  text-align: center;
  &:after {
    content: '';
    position: absolute;
  }
  &.badge-balloon-top {
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
  &.badge-balloon-right {
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
`

export const STrigger = styled.span`
  display: inline-block;
  line-height: normal;
`
