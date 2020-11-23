import { defineCssVars, overwriteCssVars } from "./src";

const a = defineCssVars({
  var1: { default: 'def 1', desc: 'desc1' },
  var2: { default: 'def 2' },
  var3: {},
} as const)

a.var2

a.toStyleObject().var2

const o1 = overwriteCssVars(a, {
  var1: 'overwrite 1',
} as const)

o1.var1.desc
o1.toStyleObject().var1

const o2 = overwriteCssVars(a, {
  var2: 'overwrite 2',
} as const)

o2.var1.desc

const o3 = overwriteCssVars(o1, {
  var1: 'overwrite 4',
  var2: 'overwrite 3',
} as const)

o3.var1
