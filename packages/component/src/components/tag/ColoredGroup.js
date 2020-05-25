import React, { Children } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Tag } from '@alifd/next' // 兼容cjs和esm的import方式
import ColoredTag from './Colored'
import { Color, COLORED_GROUP_CLASS_NAME, PROTECTED_TYPE } from './constants'

const { Group: TagGroup } = Tag

const defaultAvaliableColors = [
  Color.LIGHT_STEEL_BLUE,
  Color.PLUM,
  Color.MISTY_ROSE,
  Color.LIGHT_GOLDENROD_YELLOW,
  Color.PALE_GREEN,
]

const ColoredGroup = ({
  className,
  style,
  avaliableColors = defaultAvaliableColors,
  children,
}) => (
  <TagGroup
    className={classNames(COLORED_GROUP_CLASS_NAME, className)}
    style={style}
  >
    {Children.map(children, (elem, i) => {
      let hijackedElem = elem

      try {
        const protectedElemType = elem.type[PROTECTED_TYPE]
        if (protectedElemType === 'Tag') {
          hijackedElem = (
            <ColoredTag {...elem.props} type={avaliableColors[i % 5]} />
          )
        }
      } catch (err) {
        /** DO NOT thrown unexpected error but swallow it */
      }

      return hijackedElem
    })}
  </TagGroup>
)

ColoredGroup.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  avaliableColors: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
}

export default ColoredGroup
