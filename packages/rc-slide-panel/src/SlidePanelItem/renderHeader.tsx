import React from 'react'
import { Grid, Icon } from '@alicloud/console-components'
import { SHeaderWrapper, SBackIcon } from './style'
import { ISlidePanelItemProps } from './index'

const { Col } = Grid

function renderHeader({
  onBackArrowClicked,
  title,
  headerExtra,
  onClose,
}: Pick<
  ISlidePanelItemProps,
  'title' | 'headerExtra' | 'onClose' | 'onBackArrowClicked'
>): React.ReactNode {
  if (!onBackArrowClicked && !title && !headerExtra && !onClose) {
    return null
  }
  return (
    <SHeaderWrapper justify="space-between" className="panel-header">
      {onBackArrowClicked && <SBackIcon onClick={onBackArrowClicked} />}
      {title && (
        <Col style={{ flex: '0 0 auto' }} className="panel-header-title">
          {title}
        </Col>
      )}
      <Col className="panel-header-extra">{headerExtra}</Col>
      {onClose && (
        <Col className="panel-header-close" style={{ flex: '0 0 auto' }}>
          <Icon
            type="close"
            size="small"
            style={{ fontSize: 0 }}
            onClick={onClose}
          >
            close
          </Icon>
        </Col>
      )}
    </SHeaderWrapper>
  )
}

export default renderHeader
