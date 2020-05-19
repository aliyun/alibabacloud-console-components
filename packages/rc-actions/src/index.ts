import Actions from './actions'
import LinkButton, { ILinkButtonProps } from './linkButton'
import LinkMore from './linkMore'
/**
 * @public
 */
export type IActions = typeof Actions & {
  LinkButton: typeof LinkButton
  LinkMore: typeof LinkMore
}

/**
 * @public
 */
const ExpActions: IActions = Object.assign(Actions, {
  LinkButton,
  LinkMore,
})

export default ExpActions

export { Actions, LinkButton, LinkMore }

/**
 * @public
 */
export type LinkButtonProps = ILinkButtonProps

export * from './linkButton'

export * from './actions'

export * from './constants'
