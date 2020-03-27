import Button from './button-checkbox'

import Group from './group'

/**
 * @public
 */
export type IButtonCheckboxGroupProps = typeof Button & {
  Group: typeof Group
}

/**
 * @public
 */
const ExpButtonCheckbox: IButtonCheckboxGroupProps = Object.assign(Button, {
  Group,
})

export { ExpButtonCheckbox, Group, Button }

export default ExpButtonCheckbox

export * from './button-checkbox'

export * from './group'
