const fs = require('fs-extra')
const path = require('path')

const windVarCss = fs.readFileSync(
  path.join(__dirname, '../fusion-theme/wind/variables.css'),
  'utf-8'
)
const xconsoleVarCss = fs.readFileSync(
  path.join(__dirname, '../fusion-theme/xconsole/variables.css'),
  'utf-8'
)

const windVar = extractVars(windVarCss)
const windVarNames = Object.keys(windVar)

const xconsoleVar = extractVars(xconsoleVarCss)
const xconsoleVarNames = Object.keys(xconsoleVar)

const collapse = []

const windIcons = windVarNames
  .filter((i) => i.startsWith('icon-content-'))
  .map((i) => {
    return i.replace(/^icon-content-/, '')
  })
  .sort()

const xconsoleIcons = xconsoleVarNames
  .filter((i) => i.startsWith('icon-content-'))
  .map((i) => {
    return i.replace(/^icon-content-/, '')
  })
  .sort()

fs.writeFileSync(
  path.join(__dirname, '../src/icon/wind-icon-types.js'),
  `export default ${JSON.stringify(windIcons, null, 2)}`
)

fs.writeFileSync(
  path.join(__dirname, '../src/icon/xconsole-icon-types.js'),
  `export default ${JSON.stringify(xconsoleIcons, null, 2)}`
)

// const differenceBefore = difference(windVarNames, xconsoleVarNames)
// if (differenceBefore[0].length > 0) {
//   throw new Error('unexpect')
// }

// const newIcons = differenceBefore[1].filter((i) => i.startsWith('icon-content-')).map((i) => {
//   return i.replace(/^icon-content-/, '')
// })

// fs.writeFileSync('out.txt', newIcons.join('\n'))

// const differenceAfter = difference(unify(windVarNames), unify(xconsoleVarNames))

// if (differenceAfter[0].length > 0) {
//   throw new Error('unexpect2')
// }

// console.log(collapse)

function extractVars(code) {
  const vars = code.matchAll(/--(.*?):\s*(.*?);/g)
  return Object.fromEntries([...vars].map((v) => [v[1], v[2]]))
}

function intersection(arr1, arr2) {
  const set1 = new Set(arr1)
  return arr2.filter((item) => {
    return set1.has(item)
  })
}

function difference(arr1, arr2) {
  const intersect = new Set(intersection(arr1, arr2))
  const d1 = arr1.filter((item) => !intersect.has(item))
  const d2 = arr2.filter((item) => !intersect.has(item))
  return [d1, d2]
}

// 有些var名字使用_作为分隔符
function unify(strArr) {
  const set = new Set(strArr)
  return strArr.map((str) => {
    const result = str.replace(/_/g, '-')
    if (str !== result && set.has(result)) {
      collapse.push({ before: str, after: result })
      // throw new Error(`collapse ${str} ${result}`)
    }
    return result
  })
}
