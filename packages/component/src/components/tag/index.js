import Tag from '@alifd/next/lib/tag'
import Colored from './Colored'
import ColoredGroup from './ColoredGroup'
import { PROTECTED_TYPE } from './constants'
import './index.scss'

Tag.Colored = Colored
Tag.ColoredGroup = ColoredGroup

// Add protected property as component indentity
Tag[PROTECTED_TYPE] = 'Tag'

export default Tag
