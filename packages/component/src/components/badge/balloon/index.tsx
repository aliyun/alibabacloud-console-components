import React from 'react'
import cs from 'classnames'
import { Badge } from '@alicloud/console-components'
import './index.scss'

const mapContent = {
  hot: 'HOT',
  new: 'NEW',
}

interface IBalloonProps {
  /**
   * 自定义展示内容
   */
  type?: 'hot' | 'new'
  /**
   * balloon展示的位置
   */
  align?: 'top' | 'right'
  /**
   * 子节点
   */
  children: React.ReactNode
  /**
   * 样式名
   */
  className?: string
}

const Balloon: React.FC<IBalloonProps> = ({
  type = 'hot',
  align = 'top',
  children,
  className,
}) => {
  return (
    <Badge
      className={cs(
        className,
        'badge-custom-balloon',
        `badge-balloon-${align}`,
        `badge-balloon-${type}`
      )}
      content={mapContent[type]}
    >
      {children}
    </Badge>
  )
}

export default Balloon
