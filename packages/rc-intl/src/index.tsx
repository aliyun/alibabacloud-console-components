import { createReactIntlFromCfg } from './factory'
import { IWindIntlPublic, IWindIntlExtended } from './types'

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

export { default as ReactIntl } from './ReactIntl'
export { createReactIntlFromCfg as reactIntlFactory } from './factory'
export { default as IntlBase } from './IntlBase'

export * from './types'

export { default as presets } from './presets/date'
export * from './presets/date'

export { default as withRcIntl } from './utils/useIntlContext/withRcIntl'
