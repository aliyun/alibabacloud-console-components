import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Icon } from '@alicloud/console-components'
import StyledWrapper from './style'
import { baseClassName } from './constant'

/**
 * @public
 */
export type StatusType =
  | 'success'
  | 'warning'
  | 'error'
  | 'loading'
  | 'disabled'

/**
 * @public
 */
export type ShapeType = 'dot' | 'icon'

const typeToIconMap: Record<StatusType, string> = {
  success: 'select',
  warning: 'minus-circle-fill',
  error: 'warning',
  loading: 'loading',
  disabled: 'minus-circle-fill',
}

const typeToIcon = (type: StatusType) => typeToIconMap[type] || type

/**
 * @public
 */
export interface IStatusIndicatorProps {
  /**
   * 自定义wrapper类名
   */
  className?: string
  /**
   * 自定义wrapper样式
   */
  style?: React.CSSProperties
  /**
   * 指定状态类型。它会决定图标类型和字体颜色。<br/><br/>
   * 可选值：`'success' | 'warning' | 'error' | 'loading' | 'disabled'`
   * @defaultValue 'success'
   */
  type?: StatusType
  /**
   * 使用图标还是小圆点。可选值：`'icon' | 'dot'`
   * @defaultValue 'icon'
   */
  shape?: ShapeType
  /**
   * 自定义图标类型
   */
  iconType?: string
  /**
   * 状态文字内容
   */
  children?: React.ReactNode
}

/**
 * @public
 */
const StatusIndicator: React.FC<IStatusIndicatorProps> = ({
  className,
  style,
  type = 'success',
  shape = 'icon',
  iconType,
  children,
}) => (
  <StyledWrapper className={classNames(baseClassName, className)} style={style}>
    <span className={`${baseClassName}-container`}>
      {shape === 'icon' || type === 'loading' ? (
        <Icon
          className={classNames(
            `${baseClassName}-icon`,
            `${baseClassName}-icon-${type}`
          )}
          type={iconType || typeToIcon(type)}
        />
      ) : (
        <span
          className={classNames(
            `${baseClassName}-light`,
            `${baseClassName}-light-${type}`
          )}
        />
      )}
    </span>
    {children && (
      <span
        className={classNames(
          `${baseClassName}-text`,
          `${baseClassName}-text-${type}`
        )}
      >
        {children}
      </span>
    )}
  </StyledWrapper>
)

StatusIndicator.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  type: PropTypes.oneOf(['success', 'warning', 'error', 'loading', 'disabled']),
  shape: PropTypes.oneOf(['dot', 'icon']),
  iconType: PropTypes.string,
  children: PropTypes.node,
}

export default StatusIndicator
