import { PROTECTED_TYPE } from './constants'
import Colored from './Colored'
import ColoredGroup from './ColoredGroup'

/**
 * 兼容旧版wind的API
 */
export function wrap<TagType>(Tag: TagType): TagType {
  ;(Tag as any).Colored = Colored
  ;(Tag as any).ColoredGroup = ColoredGroup

  // Add protected property as component indentity
  ;(Tag as any)[PROTECTED_TYPE] = 'Tag'
  return Tag
}
