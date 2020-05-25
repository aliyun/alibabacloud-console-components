import { Tag } from '@alifd/next' // 兼容cjs和esm的import方式
import Colored from './Colored'
import ColoredGroup from './ColoredGroup'
import { PROTECTED_TYPE } from './constants'
import './index.scss'

Tag.Colored = Colored
Tag.ColoredGroup = ColoredGroup

// Add protected property as component indentity
Tag[PROTECTED_TYPE] = 'Tag'

export default Tag
