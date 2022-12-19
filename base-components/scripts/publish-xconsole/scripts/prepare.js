const path = require('path')
const fs = require('fs-extra')
const rimraf = require('rimraf')
const {
  codeExportLibInfoESM,
  codeExportLibInfoCJS,
  copy,
  appendFile,
  updateFile
} = require('../../utils')
const _ = require('lodash')

const cssVarSelectorReg = /:root {/g

const root = path.join(__dirname, '../../../')
const pkgPath = path.join(__dirname, '../')

const sourcePkgJson = fs.readJsonSync(path.join(root, 'package.json'), 'utf-8')
const pkgJson = fs.readJsonSync(path.join(pkgPath, 'package.json'), 'utf-8')
const pkgVersion = pkgJson.version
const pkgName = pkgJson.name

console.log(`正在生成${pkgName}@${pkgVersion}`)

// 同步基线@alifd/next版本
pkgJson.dependencies['@alifd/next'] = sourcePkgJson.dependencies['@alifd/next']
fs.writeFileSync(
  path.join(pkgPath, 'package.json'),
  JSON.stringify(pkgJson, null, 2) + '\n'
)
//
//
;(async () => {
  const esmDir = path.join(pkgPath, 'esm')
  const libDir = path.join(pkgPath, 'lib')
  const distDir = path.join(pkgPath, 'dist')
  const typesDir = path.resolve(pkgPath, 'types')

  rimraf.sync(esmDir)
  rimraf.sync(libDir)
  rimraf.sync(distDir)
  rimraf.sync(typesDir)

  await Promise.all([
    copy(path.join(root, 'es'), esmDir),
    copy(path.join(root, 'lib'), libDir),
    copy(path.join(root, 'types'), typesDir),
    fs.copy(
      path.join(root, 'dist/xconsole.css'),
      path.join(distDir, 'xconsole.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-no-reset.css'),
      path.join(distDir, 'xconsole-noreset.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-var.css'),
      path.join(distDir, 'xconsole-var.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-dark.css'),
      path.join(distDir, 'xconsole-dark.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-dark-no-reset.css'),
      path.join(distDir, 'xconsole-dark-noreset.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-dark-var.css'),
      path.join(distDir, 'xconsole-dark-var.css')
    ),
    fs.copy(path.join(root, 'dist/wind.css'), path.join(distDir, 'wind.css')),
    // 产生 wind-without-icon-font ，用于私有部署用户
    fs
      .copy(
        path.join(root, 'dist/wind.css'),
        path.join(distDir, 'wind-without-icon-font.css')
      )
      .then(() =>
        updateFile(
          path.join(distDir, 'wind-without-icon-font.css'),
          withoutIconFont
        )
      ),
    fs.copy(
      path.join(root, 'dist/wind-no-reset.css'),
      path.join(distDir, 'wind-noreset.css')
    ),
    fs.copy(
      path.join(root, 'dist/wind-var.css'),
      path.join(distDir, 'wind-var.css')
    ),
    fs.copy(path.join(root, 'dist/xconsole.js'), path.join(distDir, 'wind.js')),
    fs.copy(
      path.join(root, 'dist/index.js'),
      path.join(distDir, 'wind.min.js')
    ),
    // 兼容旧版目录结构
    fs.copy(
      path.join(root, 'dist/wind.min.css'),
      path.join(distDir, 'wind.min.css')
    ),
    fs.copy(
      path.join(root, 'dist/wind-no-reset.css'),
      path.join(distDir, 'wind-noreset.min.css')
    )
  ])

  await Promise.all([
    fs.copy(
      path.join(esmDir, 'index-console-components.js'),
      path.join(esmDir, 'index.js'),
      {
        overwrite: true,
      }
    ),
    fs.copy(
      path.join(libDir, 'index-console-components.js'),
      path.join(libDir, 'index.js'),
      {
        overwrite: true,
      }
    )]
  )

  rimraf.sync(path.join(libDir, 'index-console-components.js'))
  rimraf.sync(path.join(libDir, 'index-console-components.d.ts'))
  rimraf.sync(path.join(esmDir, 'index-console-components.js'))
  rimraf.sync(path.join(esmDir, 'index-console-components.d.ts'))
  // 将业务组件的cssVar加入组件库css中
  // 从而用户无需自己引入
  const appendXconsoleCssVar = [
    '',
    fs.readFileSync(
      require.resolve(
        '@alicloud/console-components-app-layout/dist/vars/xconsole.css'
      ),
      'utf-8'
    ).replace(':root,', ''),,
    fs.readFileSync(
      require.resolve(
        '@alicloud/console-components-console-menu/dist/vars/xconsole.css'
      ),
      'utf-8'
    ).replace(':root,', ''),
  ].join('\n')

  const appendXconsoleDarkCssVar = [
    '',
    fs.readFileSync(
      require.resolve(
        '@alicloud/console-components-app-layout/dist/vars/xconsole-dark.css'
      ),
      'utf-8'
    ).replace(':root,', ''),
    fs.readFileSync(
      require.resolve(
        '@alicloud/console-components-console-menu/dist/vars/xconsole-dark.css'
      ),
      'utf-8'
    ).replace(':root,', ''),
  ].join('\n')

  await Promise.all([
    appendFile(
      path.join(esmDir, 'index.js'),
      codeExportLibInfoESM('@alicloud/console-components', pkgVersion)
    ),
    appendFile(
      path.join(libDir, 'index.js'),
      codeExportLibInfoCJS('@alicloud/console-components', pkgVersion)
    ),
    // appendFile(path.join(distDir, 'xconsole-var.css'), appendXconsoleCssVar),
    // appendFile(path.join(distDir, 'xconsole.css'), appendXconsoleCssVar),
    // 有的控制台暂时不升侧边栏样式，因此将业务组件的var单独提供，业务方按需引入
    fs.writeFile(
      path.join(distDir, 'xconsole-var-rc.css'),
      appendXconsoleCssVar
    ),
    fs.writeFile(
      path.join(distDir, 'xconsole-dark-var-rc.css'),
      appendXconsoleDarkCssVar
    )
  ])

  // 规范样式变量的作用范围
  await Promise.all([
    updateFile(path.join(distDir, 'xconsole-var.css'), (css) => {
      return css.replace(cssVarSelectorReg, `.theme-xconsole {`)
    }),
    updateFile(path.join(distDir, 'xconsole.css'), (css) => {
      return css.replace(cssVarSelectorReg, `.theme-xconsole, :root {`)
    })
  ])
})()

function withoutIconFont(originalText) {
  /*
  匹配css中的以下声明：
  @font-face {
    font-family: NextIcon
    src: url("//at.alicdn.com/t/font_1435786_mueafw9pwd.eot");
    src: url("//at.alicdn.com/t/font_1435786_mueafw9pwd.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.woff2") format("woff2"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.woff") format("woff"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.ttf") format("truetype"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.svg#NextIcon") format("svg"); }
  */
  const reg =
    /@font-face\s*{\s*font-family:\s*NextIcon;[\s\S]*?format\("svg"\);\s*}/g

  const match = originalText.match(reg)

  if (match.length !== 1) {
    throw new Error(`没有找到声明NextIcon的@font-face规则`)
  }

  const result = originalText.replace(reg, '')

  return result
}
