import { CssVarTheme } from './src'

const t1 = CssVarTheme.create({
  var1: { default: 'def 1', desc: 'desc1' },
  var2: { default: 'def 2' },
  var3: {},
} as const)

const t2 = t1.extends({
  var1: 'overwrite1',
} as const)

const t3 = t2.extends({
  var1: 'o2',
  var2: 'o3',
} as const)

const t4 = t3.extends({
  var1: 'o4',
  var2: 'o5',
  var3: 'o6',
} as const)

t4.vars.var1
t4.vars.var3
t4.vars.var2

