import Actions from './actions'
import type { IActionsProps } from './actions'
import { LinkButton, LinkMore } from './linkButton'
import type { ILinkButtonProps } from './linkButton'

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

export type { IActionsProps, ILinkButtonProps }

export * from './constants'
