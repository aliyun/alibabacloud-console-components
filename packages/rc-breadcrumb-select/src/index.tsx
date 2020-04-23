import BreadcrumbSelect from './breadcrumb-select'

import Link from './link'

/**
 * @public
 */
export type IBreadcrumbSelect = typeof BreadcrumbSelect & {
  Link: typeof Link
}

/**
 * @public
 */
const ExpBreadcrumbSelect: IBreadcrumbSelect = Object.assign(BreadcrumbSelect, {
  Link,
})

export default ExpBreadcrumbSelect

export { Link, BreadcrumbSelect }

export * from './breadcrumb-select'

export * from './link'
