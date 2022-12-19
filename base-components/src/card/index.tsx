import React from 'react'
import { Card as NextCard, Dropdown, Menu, Icon } from '@alifd/next'
import {
  CardHeaderProps,
  CardContentProps,
  CardMediaProps,
  CardActionsProps,
  CardDividerProps,
  CardProps
} from '@alifd/next/types/card'
import hoistNonReactStatics from 'hoist-non-react-statics'
import ConfigProvider from '../config-provider'
import { useCssVar } from '../utils/useCssVar'

const Card: React.FC<CardProps> & {
  Header: React.ComponentType<CardHeaderProps>
  Content: React.ComponentType<CardContentProps>
  Media: React.ComponentType<CardMediaProps>
  Actions: React.ComponentType<CardActionsProps>
  Divider: React.ComponentType<CardDividerProps>
  DropDownActions: React.FC<{
    actions: { label: React.ReactNode; onClick: () => void }[]
  }>
  CollapsableTail: React.FC<ICollapsableProps>
  CollapsableHead: React.FC<ICollapsableProps>
} = (props => {
  return <NextCard showTitleBullet={false} {...props} />
}) as any

hoistNonReactStatics(Card, NextCard)

Card.DropDownActions = ({ actions }) => {
  const theme = useCssVar('--alicloudfe-components-theme').trim()
  const actionIcon = (() => {
    if (theme.startsWith('hybridcloud')) {
      return (
        <Icon
          className="hybridcloud-card-dropdown-actions-icon"
          type="ellipsis"
          size="large"
        />
      )
    } else if (theme.startsWith('yunxiao')) {
      return (
        <Icon className="yunxiao-card-dropdown-actions-icon" type="ellipsis" />
      )
    } else {
      return <Icon type="ellipsis-vertical" size="small" />
    }
  })()
  return (
    <Dropdown trigger={actionIcon} triggerType="click">
      <Menu>
        {actions.map(({ label, onClick }, idx) => {
          return (
            <Menu.Item onClick={onClick} key={idx}>
              {label}
            </Menu.Item>
          )
        })}
      </Menu>
    </Dropdown>
  )
}

interface ICollapsableProps {
  collapsed: boolean
  onCollapsedChange: (newCollapsed: boolean) => void;
  children: React.ReactChild
}

const CollapsableTail: React.FC<ICollapsableProps & { prefix: string }> = ({
  collapsed,
  onCollapsedChange,
  prefix,
  children = '展开更多'
}) => {
  return (
    <div
      className={`${prefix}card-collapsable-tail`}
      onClick={() => onCollapsedChange(!collapsed)}
    >
      {children}
      {collapsed ? <Icon type="3212" /> : <Icon type="3213" />}
    </div>
  )
}

Card.CollapsableTail = ConfigProvider.config(CollapsableTail)

const CollapsableHead: React.FC<ICollapsableProps & { prefix: string }> = ({
  collapsed,
  onCollapsedChange,
  prefix,
  children = '标题'
}) => {
  return (
    <div
      className={`${prefix}card-collapsable-head`}
      onClick={() => onCollapsedChange(!collapsed)}
    >
      {children}
      {collapsed ? <Icon type="3212" /> : <Icon type="3213" />}
    </div>
  )
}

Card.CollapsableHead = ConfigProvider.config(CollapsableHead)

export default Card
