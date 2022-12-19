// 在微应用的场景下，如果在A应用内部渲染B应用，
// 那么B应用会受到A应用的cssVar影响
// 为了隔离这种影响，我们的解决方式是：
// 提供一份css-var-reset，它将所有A应用的var设置成initial，
// B应用在自己的根节点挂载这份reset，就可以隔绝A应用的var

const fs = require('fs-extra')
const path = require('path')

const shouldGenerateCssVarReset = ['wind', 'xconsole', 'xconsole-dark']
const cwd = process.cwd()

const allVars = {}
const varsByTheme = {}

shouldGenerateCssVarReset.forEach((themeName) => {
  const themePath = path.join(cwd, `src/theme/${themeName}`)
  const source = fs.readFileSync(
    path.join(themePath, 'css-var-custom.scss'),
    'utf-8'
  )
  collectVars(themeName, source)
})

shouldGenerateCssVarReset.forEach(generateCssVarReset)

function generateCssVarReset(themeName) {
  const themePath = path.join(cwd, `src/theme/${themeName}`)
  const themeVars = varsByTheme[themeName]
  const resetVars = Object.keys(allVars).filter(
    (varName) => !themeVars[varName]
  )
  const lines = resetVars.map((varName) => `${varName}: initial;`).join('\n  ')
  const output = `#{$css-var-scope} {
  ${lines}
}`
  fs.writeFileSync(path.join(themePath, 'css-var-custom-reset.scss'), output)
}

function collectVars(themeName, code) {
  const matches = code.match(/--.*?:/g)
  if (!Array.isArray(matches)) return
  matches.forEach((match) => {
    const varName = match.slice(0, -1)
    allVars[varName] = true
    varsByTheme[themeName] = varsByTheme[themeName] || {}
    varsByTheme[themeName][varName] = true
  })
}
