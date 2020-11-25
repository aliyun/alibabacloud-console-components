const ncp = require('ncp').ncp
const path = require('path')
const fs = require('fs-extra')
const rimraf = require('rimraf')
const postcss = require('postcss')
const {
  getComponentNames,
  codeExportLibInfoESM,
  codeExportLibInfoCJS,
} = require('./utils')
const _ = require('lodash')

const esmDir = path.join(__dirname, '../esm')
const libDir = path.join(__dirname, '../lib')
const distDir = path.join(__dirname, '../dist')
const typesDir = path.resolve(__dirname, '../types')

const cloudComponentDir = path.dirname(
  require.resolve('@alicloudfe/components/package.json')
)

rimraf.sync(esmDir)
rimraf.sync(libDir)
rimraf.sync(distDir)
rimraf.sync(typesDir)
;(async () => {
  await Promise.all([
    copy(path.join(cloudComponentDir, 'es'), esmDir),
    copy(path.join(cloudComponentDir, 'lib'), libDir),
    fs.copy(
      path.join(cloudComponentDir, 'dist/xconsole.css'),
      path.join(distDir, 'xconsole.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/xconsole-no-reset.css'),
      path.join(distDir, 'xconsole-noreset.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/xconsole-var.css'),
      path.join(distDir, 'xconsole-var.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/wind.css'),
      path.join(distDir, 'wind.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/wind-no-reset.css'),
      path.join(distDir, 'wind-noreset.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/wind-var.css'),
      path.join(distDir, 'wind-var.css')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/index.js'),
      path.join(distDir, 'wind.js')
    ),
    fs.copy(
      path.join(cloudComponentDir, 'dist/index.js'),
      path.join(distDir, 'wind.min.js')
    ),
  ])

  const componentNames = getComponentNames()

  const version = await (async () => {
    const pkgJson = await fs.readJson(path.join(__dirname, '../package.json'))
    return pkgJson['version']
  })()

  await Promise.all([
    minify(path.join(distDir, 'wind.css'), path.join(distDir, 'wind.min.css')),
    minify(
      path.join(distDir, 'wind-noreset.css'),
      path.join(distDir, 'wind-noreset.min.css')
    ),
    appendFile(
      path.join(esmDir, 'index.js'),
      codeExportLibInfoESM('@alicloud/console-components', version)
    ),
    appendFile(
      path.join(libDir, 'index.js'),
      codeExportLibInfoCJS('@alicloud/console-components', version)
    ),
    ...componentNames.map(async (componentName) => {
      const dtsFilePath = path.resolve(typesDir, componentName, 'index.d.ts')
      const dtsFileContent = [
        `export { default } from '@alifd/next/types/${componentName}'`,
        `export * from '@alifd/next/types/${componentName}'`,
      ].join('\n')
      await fs.ensureDir(path.dirname(dtsFilePath))
      await fs.writeFile(dtsFilePath, dtsFileContent)
    }),
    (async () => {
      const dtsFilePath = path.resolve(typesDir, 'index.d.ts')
      const dtsEntrySource = componentNames
        .map((componentName) => {
          const componentDisplayName = _.upperFirst(_.camelCase(componentName))
          return `export { default as ${componentDisplayName} } from './${componentName}'`
        })
        .join('\n')
      await fs.ensureDir(path.dirname(dtsFilePath))
      await fs.writeFile(dtsFilePath, dtsEntrySource)
    })(),
  ])
})()

async function copy(source, dest) {
  return new Promise((res, rej) => {
    ncp(source, dest, function (err) {
      if (err) return rej(err)
      return res()
    })
  })
}

async function minify(source, dest) {
  const sourceContent = await fs.readFile(source, 'utf-8')
  const result = await postcss([
    require('cssnano')({
      preset: 'default',
    }),
  ]).process(sourceContent, { from: source, to: dest })
  await fs.writeFile(dest, result.css)
}

async function appendFile(filePath, append) {
  const source = await fs.readFile(filePath, 'utf-8')
  const result = source + '\n' + append
  await fs.writeFile(filePath, result)
}
