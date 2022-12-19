// 用于生成 css-var 文件
const path = require('path')
const fs = require('fs-extra')
const cwd = process.cwd()
const log = console.log
const themes = require('./theme-data')
const chalk = require('chalk');

log(chalk.green('generate css variables...'));

themes.forEach((theme) => {
  const { themeName, ignore } = theme;
  if (!ignore) {
    const themePath = path.join(cwd, `fusion-theme/${themeName}/variables.css`);
    const styleContent = fs.readFileSync(themePath, 'utf-8')
    // const cssResult = `:root {
    //   ${styleContent.replace(/\$/g, '--').replace(/\/\/(.+)\/\//g, '/*$1*/')}
    // }`
    let cssResult = styleContent.replace(':root', '#{$css-var-scope}')
    // 来自fusion主题包的bug，暂时暴力修复
    cssResult = cssResult.replace(/, \$icon-reset/g, '')
  
    fs.writeFileSync(
      path.join(cwd, `src/theme/${themeName}`, 'css-var-definition.scss'),
      cssResult
    )
    log(`generate theme ${themeName} success!`)
  }
})
