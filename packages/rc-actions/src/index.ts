import Actions, { IActionsProps } from './actions'
import { LinkButton, LinkMore, ILinkButtonProps } from './linkButton'
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

export { Actions, IActionsProps, LinkButton, LinkMore, ILinkButtonProps }

export * from './constants'
