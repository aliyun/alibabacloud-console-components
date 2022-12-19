import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Icon } from '@alicloud/console-components'
import StyledWrapper from './style'
import { baseClassName } from './constant'
import type { IStatusIndicatorProps } from './types/IStatusIndicatorProps.type'
export type { IStatusIndicatorProps }

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
