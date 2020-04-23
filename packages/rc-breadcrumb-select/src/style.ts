import styled, { createGlobalStyle } from 'styled-components'
import MenuSelect from '@alicloud/console-components-menu-select'
import { Link } from 'dva/router'

export const SMenuSelect = styled(MenuSelect)`
  &.wind-breadcrumb-select {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    .wind-menu-select-inner {
      position: relative;
      height: 20px;
      line-height: 20px;
    }
    .trigger-icon-wrap {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 3;
      &:hover {
        .trigger-icon {
          color: #555555;
        }
      }
      .trigger-icon {
        color: #888888;
        transform: scale(0.8);
      }
    }
    .select-label {
      cursor: pointer;
      max-width: 142px;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        color: #0070cc;
      }
    }
  }
`
export const SLink = styled(Link)`
  display: inline-block;
  margin-right: 6px;
  position: relative;
  margin-right: 18px;
  z-index: 1;
  max-width: 142px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  && {
    color: #333;
    &:hover {
      color: #0070cc;
    }
  }
`
export const SWrapper = styled.div`
  display: inline-block;
  height: 20px;
  line-height: 20px;
`

export const GlobalStyle = createGlobalStyle<{ prefix: string }>`
  ${({ prefix }) => `.${prefix}breadcrumb-text`} {
		position: relative;
	}
`
