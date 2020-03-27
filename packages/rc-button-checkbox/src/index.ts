import ButtonCheckbox from './button-checkbox'

import Group from './group'

/**
 * @public
 */
export type IButtonCheckbox = typeof ButtonCheckbox & {
  Group: typeof Group
}

/**
 * @public
 */
const ExpButtonCheckbox: IButtonCheckbox = Object.assign(ButtonCheckbox, {
  Group,
})

export default ExpButtonCheckbox

export { Group, ButtonCheckbox }

export * from './group'

export * from './button-checkbox'
