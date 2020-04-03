import Actions from './actions'
import LinkButton, { LinkMore } from './linkButton'
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

export { LinkButton, Actions, LinkMore }

export * from './linkButton'

export * from './actions'

export * from './constants'

export * from './utils'

export * from './with-link'
