import { messages as basicMsg } from './basic'
import { messages as varMsg } from './withVar'

declare module '@alicloud/console-components-intl' {
  interface ExtendIntl {
    keys: keyof typeof basicMsg | keyof typeof varMsg
  }
}
