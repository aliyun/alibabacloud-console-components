/**
 * Allowed colors of tag
 * @enum {String}
 */
export const Color = {
  LIGHT_STEEL_BLUE: 'light-steel-blue',
  PLUM: 'plum',
  MISTY_ROSE: 'misty-rose',
  LIGHT_GOLDENROD_YELLOW: 'light-goldenrod-yellow',
  PALE_GREEN: 'pale-green',
  SILVER: 'silver',
  GRAY: 'gray',
}

/**
 * @const
 * @type {String}
 */
export const COLORED_CLASS_NAME = 'wind-tag-colored'

/**
 * @const
 * @type {String}
 */
export const COLORED_GROUP_CLASS_NAME = `${COLORED_CLASS_NAME}-group`

/**
 * @const
 * @type {Symbol}
 */
export const PROTECTED_TYPE = Symbol('TAG_PROTECTED_TYPE')
