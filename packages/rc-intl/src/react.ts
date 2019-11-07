import ReactIntl from './ReactIntl'
import { create } from './factory'
import { IWindIntlPublic } from './types'

const intlInstance = new ReactIntl()
const intl: IWindIntlPublic = create(intlInstance)

export default intl
