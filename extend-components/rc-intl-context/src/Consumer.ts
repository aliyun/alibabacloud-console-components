import { ConsumerProps, ExoticComponent } from 'react'
import Context from './Context'
import { IIntlCtxValue } from './types'

// Exports native consumer for more power
export default Context.Consumer as ExoticComponent<ConsumerProps<IIntlCtxValue>>
