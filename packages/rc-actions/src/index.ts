import Actions, { PartitionFn as PartitionFn_ } from './actions'
import {
  LinkButton,
  LinkMore,
  ILinkButtonProps as ILinkButtonProps_,
} from './linkButton'

// wait for api-extractor to support ts3.8, and we can migrate to type import
/** @public */
export type IActionsProps = PartitionFn_
/** @public */
export type ILinkButtonProps = ILinkButtonProps_

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

export * from './constants'
