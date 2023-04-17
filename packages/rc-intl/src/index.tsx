import type {
  IWindIntlPublic,
  IWindIntlExtended,
} from '@alicloud/console-components-intl-core'
import { createReactIntlFromCfg } from './factory'

export type {
  ExtendIntl,
  IWindIntlPublic,
} from '@alicloud/console-components-intl-core'

const __intl = createReactIntlFromCfg()
/** @public */
const { IntlProvider } = __intl
/** @public */
const { withProvider } = __intl
/** @public */
const { Consumer } = __intl

/**
 * @public
 * This instance is created in top level code. And shared by
 * `import intl from '@alicloud/console-components-intl'`.
 * You can create your own instance with `reactIntlFactory`.
 */
const intlPublicTyped: IWindIntlPublic = __intl

export default intlPublicTyped
export { intlPublicTyped as intl, IntlProvider, withProvider, Consumer }
export {
  createReactIntlFromCfg,
  createReactIntlFromCfg as reactIntlFactory,
  createReactIntlFromInstance,
} from './factory'

export {
  ReactIntl,
  IntlBase,
  VanillaIntl,
  presets,
  withRcIntl,
} from '@alicloud/console-components-intl-core'
