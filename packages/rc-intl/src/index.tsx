import { createReactIntlFromCfg } from './factory'
import {
  IWindIntlPublic,
  IWindIntlExtended,
} from '@alicloud/console-components-intl-core'

const __intl = createReactIntlFromCfg()
/** @public */
const IntlProvider: IWindIntlExtended['IntlProvider'] = __intl.IntlProvider
/** @public */
const withProvider: IWindIntlExtended['withProvider'] = __intl.withProvider
/** @public */
const Consumer: IWindIntlExtended['Consumer'] = __intl.Consumer

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
  IWindIntlPublic,
} from '@alicloud/console-components-intl-core'
