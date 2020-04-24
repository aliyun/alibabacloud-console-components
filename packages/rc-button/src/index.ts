/* eslint-disable import/no-named-as-default */

import IconButton, { IIconButtonProps } from './icon-button'

import LinkButton, { ILinkButtonProps } from './link-button'

import ButtonCheckbox, {
  IGroupProps,
  IButtonCheckboxGroupProps,
} from './button-checkbox'

/**
 * @public
 */
export type ButtonProps = {
  IconButton: typeof IconButton
  LinkButton: typeof LinkButton
  ButtonCheckbox: typeof ButtonCheckbox
}

/**
 * @public
 */
const ExpButton: ButtonProps = {
  IconButton,
  LinkButton,
  ButtonCheckbox,
}

export default ExpButton

export { IconButton, LinkButton, ButtonCheckbox }

/**
 * @public
 */
export type IconButtonProps = IIconButtonProps

/**
 * @public
 */
export type LinkButtonProps = ILinkButtonProps

/**
 * @public
 */
export type GroupProps = IGroupProps

/**
 * @public
 */
export type ButtonCheckboxProps = IButtonCheckboxGroupProps

export * from './button-checkbox'

export * from './icon-button'

export * from './link-button'
