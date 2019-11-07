import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Tag from '@alifd/next/lib/tag'
import { Color, COLORED_CLASS_NAME, PROTECTED_TYPE } from './constants'

const ColoredTag = ({
  type,
  className,
  ...restProps
}) => (
  <Tag
    {...restProps}
    className={
      classNames(
        COLORED_CLASS_NAME,
        `${COLORED_CLASS_NAME}-${type}`,
        className,
      )
    }
  />
)

/**
 * Prop types
 * @static
 * @type {Object}
 */
ColoredTag.propTypes = {
  ...Tag.propTypes,
  // Specific color of tag
  type: PropTypes.oneOf(Object.values(Color)),
  // Class name of tag
  className: PropTypes.string,
}

/**
 * Default props
 * @static
 * @type {Object}
 */
ColoredTag.defaultProps = {
  type: Color.LIGHT_STEEL_BLUE,
}

ColoredTag[PROTECTED_TYPE] = 'Tag'

export default ColoredTag
