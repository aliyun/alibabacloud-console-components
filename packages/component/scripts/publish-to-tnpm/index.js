/* eslint-disable  */
const path = require('path')
const fs = require('fs-extra')
const semver = require('semver')
const _ = require('lodash')
const utils = require('../utils')

const componentNames = utils.getComponentNames()
const WORKSPACE_PATH = path.resolve(__dirname, '..', '..')
const OUT_PATH = path.resolve(__dirname, 'tmp')
const TEMPLATE_PATH = path.resolve(__dirname, 'template')

// 前置工作：检查lib、dist、types有内容存在
if (
  !utils.isDirHasFile(path.join(WORKSPACE_PATH, 'lib')) ||
  !utils.isDirHasFile(path.join(WORKSPACE_PATH, 'dist')) ||
  !utils.isDirHasFile(path.join(WORKSPACE_PATH, 'types'))
) {
  throw new Error(`lib、dist、types should have content`)
}
// 删除旧的输出
fs.emptyDirSync(OUT_PATH)

// 读取开源版本号
const publicVersion = (() => {
  const publicPackageJSON = require(path.join(WORKSPACE_PATH, 'package.json'))
  return publicPackageJSON.version
})()

// 计算内部版本号
// const internalVersion = (() => {
//   const publicVersionObj = semver.parse(publicVersion)
//   // 开源版本1.x对应于对内版本3.x，所以主版本+2
//   publicVersionObj.major = publicVersionObj.major + 2
//   publicVersionObj.inc('pre', 'alpha')
//   return publicVersionObj.format()
// })()
const internalVersion = '3.0.4'

// 读取内部package.json模板
let internalPackageJSONString = fs
  .readFileSync(path.join(TEMPLATE_PATH, 'package.json'), 'utf-8')
  .replace('{{internalWindVersion}}', internalVersion)
  .replace('{{publicWindVersion}}', publicVersion)

// 写出要发布到tnpm的package.json
const outPkgJSONPath = path.join(OUT_PATH, 'package.json')
fs.ensureFileSync(outPkgJSONPath)
fs.writeFileSync(outPkgJSONPath, internalPackageJSONString)

// 写出要发布到tnpm的index.scss和index-noreset.scss
fs.copySync(
  path.join(WORKSPACE_PATH, 'index.scss'),
  path.join(OUT_PATH, 'index.scss')
)
fs.writeFileSync(
  path.join(OUT_PATH, 'index-noreset.scss'),
  `
@import "~@alicloud/console-components/index-noreset.scss";
`
)

// 创建lib/index.js lib/index.scss types/index.d.ts 三个入口文件
const libIndexJsPath = path.join(OUT_PATH, 'lib', 'index.js')
const libIndexScssPath = path.join(OUT_PATH, 'lib', 'index.scss')
const typesIndexDTSPath = path.join(OUT_PATH, 'types', 'index.d.ts')
const libIndexJsCode = [
  ...utils.getCommonJSReExport('@alicloud/console-components/lib/index.js'),
  `module.exports['__VERSION__'] = '${internalVersion}';`,
]
const libIndexScssCode = [
  '@import "~@alicloud/console-components/lib/index.scss";',
]
const typesIndexDTSCode = componentNames.map(name => {
  const CamelCaseName = _.upperFirst(_.camelCase(name))
  return `export { default as ${CamelCaseName} } from './${name}'`
})

fs.ensureFileSync(libIndexJsPath)
fs.writeFileSync(libIndexJsPath, libIndexJsCode.join('\n'))
fs.ensureFileSync(libIndexScssPath)
fs.writeFileSync(libIndexScssPath, libIndexScssCode.join('\n'))
fs.ensureFileSync(typesIndexDTSPath)
fs.writeFileSync(typesIndexDTSPath, typesIndexDTSCode.join('\n'))

// 为每个组件创建re-export，
// 比如button：/lib/button/index.js /lib/button/index.scss /types/button/index.d.ts
componentNames.forEach(createReExportForComponent)
function createReExportForComponent(componentName) {
  const libIndexJsPath = path.join(OUT_PATH, 'lib', componentName, 'index.js')
  const jsFileContent = utils
    .getCommonJSReExport(
      `@alicloud/console-components/lib/${componentName}/index.js`
    )
    .join('\n')
  fs.ensureFileSync(libIndexJsPath)
  fs.writeFileSync(libIndexJsPath, jsFileContent)

  const libIndexScssPath = path.join(
    OUT_PATH,
    'lib',
    componentName,
    'index.scss'
  )
  const sassFileContent = `@import "~@alicloud/console-components/lib/${componentName}/index.scss";\n`
  fs.ensureFileSync(libIndexScssPath)
  fs.writeFileSync(libIndexScssPath, sassFileContent)

  const dtsFilePath = path.join(OUT_PATH, 'types', componentName, 'index.d.ts')
  const dtsFileContent = [
    `export { default } from '@alicloud/console-components/types/${componentName}'`,
    `export * from '@alicloud/console-components/types/${componentName}'`,
  ].join('\n')
  fs.ensureFileSync(dtsFilePath)
  fs.writeFileSync(dtsFilePath, dtsFileContent)
}

// copy dist
const distFrom = path.join(WORKSPACE_PATH, 'dist')
const distTo = path.join(OUT_PATH, 'dist')
fs.copySync(distFrom, distTo)

// tnpm publish
const { spawnSync } = require('child_process')
const child = spawnSync('tnpm', ['publish'], { cwd: OUT_PATH })
console.error('error', child.error)
console.log('stdout ', child.stdout.toString())
console.error('stderr ', child.stderr.toString())
