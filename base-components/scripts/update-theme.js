const path = require('path')
const chalk = require('chalk')
const download = require('download')
const fs = require('fs-extra')
const themes = require('./theme-data')
const cwd = process.cwd()
const log = console.log

const getThemeSource = async (packageName, themeName, ignore) => {
  const unpkgUrl = 'https://unpkg.alibaba-inc.com/'
  if (!ignore) {
    const themePath = path.join(cwd, `fusion-theme/${themeName}`)
    log(chalk.green('empty files...'))
    fs.emptyDirSync(themePath)
    try {
      await download(`${unpkgUrl}${packageName}/dist/next.var.css`, themePath)
      await download(
        `${unpkgUrl}${packageName}/dist/next-noreset.var.css`,
        themePath
      )
      await download(`${unpkgUrl}${packageName}/variables.css`, themePath)
      log(chalk.green(`update theme ${themeName} successfully`))
    } catch (err) {
      console.error(err)
    }
  }
}

;(async function main() {
  await Promise.all(
    themes.map(async (theme) => {
      const { packageName, themeName, ignore } = theme
      await getThemeSource(packageName, themeName, ignore)
    })
  )

  require('./generate-css-var-reset')

  extractWindIcon()
})()

function extractWindIcon() {
  const windCssPath = path.join(cwd, `fusion-theme/wind/next.var.css`)

  const windCss = fs.readFileSync(windCssPath, 'utf-8')

  /*
  匹配css中的以下声明：
  @font-face {
    font-family: NextIcon
    src: url("//at.alicdn.com/t/font_1435786_mueafw9pwd.eot");
    src: url("//at.alicdn.com/t/font_1435786_mueafw9pwd.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.woff2") format("woff2"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.woff") format("woff"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.ttf") format("truetype"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.svg#NextIcon") format("svg"); }
  */
  const reg = /@font-face\s*{\s*font-family:\s*NextIcon;[\s\S]*?format\("svg"\);\s*}/g

  const match = windCss.match(reg)

  if (match.length !== 1) {
    throw new Error(`没有找到声明NextIcon的@font-face规则`)
  }

  let fontFace = match[0]

  if (!fontFace.includes('font-family: NextIcon;')) {
    throw new Error('assertion fail')
  }

  fontFace = fontFace.replace(
    'font-family: NextIcon;',
    'font-family: WindIcon;'
  )

  const destPath = path.join(cwd, `src/theme/xconsole/wind-icon.scss`)

  fs.writeFileSync(destPath, fontFace)
}
