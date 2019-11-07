import React from 'react'
import styled from 'styled-components'
import { Grid, Icon } from '@alicloud/console-components'
import { IconProps } from '@alicloud/console-components/types/icon'

const { Row } = Grid

const WrappedBackIcon: React.FC<IconProps> = props => (
  <Icon type="wind-arrow-left" {...props} size="small" />
)
export const SBackIcon = styled(WrappedBackIcon)``

export const SPlaceHolder = styled.div<{ display: 'none' | 'block' }>`
  display: ${({ display }) => display};
  font-size: 74px;
  text-align: center;
  color: #999;
  /* 垂直居中 */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 40px;
  line-height: 1px;
`

export const SHeaderWrapper = styled(Row)`
  border-bottom: 1px solid #efefef;
  padding: 0 24px;
  height: 60px;
  position: relative;
  z-index: 10;
  overflow: hidden;
  align-items: center;
  color: #333333;
  ${SBackIcon} {
    margin-right: 12px;
    cursor: pointer;
  }
  .panel-header-title {
    margin: 0;
    font-size: 18px;
    vertical-align: middle;
  }
  .panel-header-extra {
  }
  .panel-header-close {
    cursor: pointer;
    .next-icon {
      vertical-align: top;
    }
  }
`

export const SFooterWrapper = styled.div`
  border-top: 1px solid #efefef;
  overflow: hidden;
  padding: 0 24px;
  height: 64px;
  line-height: 64px;

  .btn-con {
    float: left;
  }

  .next-btn:not(:first-child) {
    margin-left: 8px;
  }
`

export const SBodyWrapper = styled.div<{ display: 'none' | 'block' }>`
  display: ${({ display }) => display};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px 24px;
`

/**
 * 控制面板的宽度，并且宽度变化时有渐变效果。
 *
 * 将面板分为3个部分(从上到下)：
 * - Header：固定高度
 * - Body: 弹性高度，
 * - Footer：固定高度
 * 最终高度总和恰好等于父容器的100%。
 *
 * align-items: stretch;使得上述三个容器的宽度默认为100%。
 */
export const SSlidePanelContentWrapper = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  ${SHeaderWrapper} {
    flex: 0 0 auto;
  }
  ${SBodyWrapper} {
    flex: 1 1 auto;
  }
  ${SFooterWrapper} {
    flex: 0 0 auto;
  }
`
