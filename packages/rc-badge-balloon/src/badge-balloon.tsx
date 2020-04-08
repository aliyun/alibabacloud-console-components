import React from 'react'
import cs from 'classnames'
import { GetFusionConfig, IFusionConfigProps } from './utils'
import * as S from './style'

const mapContent = {
  hot: 'HOT',
  new: 'NEW',
}

/**
 * @public
 */
export interface IBalloonProps {
  /**
   * 展示的类型，可选值为`hot`和`new`
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
	/**
   * 样式
   */
  style?: React.CSSProperties
  /**
   * 徽标定位的微调, 接收数组[hoz, ver], 表示徽标在 left / top 上的增量
   * @defaultValue `[0, 0]`
   */
  offset?: number[]
}

const Balloon: React.FC<IBalloonProps & IFusionConfigProps> = ({
  type = 'hot',
  align = 'top',
  children,
  className,
	fusionConfig = {},
	offset = [0, 0],
	style
}) => {
  const { prefix = 'next-' } = fusionConfig
  return (
    <S.SBadge
		  style={style}
      className={cs(
        className,
        'badge-custom-balloon',
        `badge-balloon-${align}`,
        `badge-balloon-${type}`
      )}
      prefix={prefix}
      content={mapContent[type]}
			offset={offset}
			type={type}
    >
      {children}
    </S.SBadge>
  )
}

export default GetFusionConfig(Balloon)
